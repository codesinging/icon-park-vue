const path = require('path')
const fs = require('fs')
const del = require('del')

const iconPark = require('@icon-park/svg')
const selected = require('./selected')

class Builder{
    prefix = 'PinIcon'

    successfulCount = 0
    failedCount = 0

    successfulComponents = []
    failedComponents = []

    destPath = ''

    isSelected = false

    constructor() {
        this.destPath = path.resolve(__dirname, '../icons')
    }

    iconNames(){
        if (this.isSelected){
            return Object.keys(selected)
        } else {
            let names = Object.keys(iconPark)
            names.shift()
            names.shift()
            return names
        }
    }

    clean(){
        del.sync(path.join(this.destPath, '*'))
    }

    svgContent(name){
        let svg = iconPark[name]
        return svg ? svg({}) : ''
    }

    stubContent(filename){
        return fs.readFileSync(path.resolve(__dirname, 'stubs', filename)).toString()
    }

    createBuilder(name){
        let svgContent = this.svgContent(name)
        if (!svgContent){
            return false
        }

        let vueTemplate = svgContent
            .replace('<?xml version="1.0" encoding="UTF-8"?>', '')
            .replace('width="1em"', ':width="size"')
            .replace('height="1em"', ':height="size"')
            .replace(/stroke="currentColor"/g, ':stroke="color"')
            .replace(/fill="currentColor"/g, ':fill="color"')
            .replace(/stroke-width="4"/g, ':stroke-width="strokeWidth"')

        let saveName = this.isSelected ? selected[name] : name
        let componentName = this.prefix + saveName

        let componentContent = this.stubContent('vue.stub')
            .replace('__NAME__', componentName)
            .replace('<div>__SVG__</div>', vueTemplate)

        return {
            name,
            saveName,
            componentName,
            svgContent,
            componentContent,
        }
    }

    createComponent(name){
        let builder = this.createBuilder(name)

        if (builder){
            let saveDir = this.destPath
            if (!fs.existsSync(saveDir)){
                fs.rmdirSync(saveDir)
            }

            fs.writeFileSync(path.join(saveDir, builder.componentName + '.vue'), builder.componentContent)
            console.log('Created component: ' + builder.componentName)
            this.successfulCount++
            this.successfulComponents.push(builder)
        } else {
            console.log('Failed to create: ' + name)
            this.failedCount++
            this.failedComponents.push(name)
        }
    }

    createComponents(isSelected = false){
        this.isSelected = isSelected
        this.iconNames().forEach(name => {
            this.createComponent(name)
        })
    }

    printResult(){
        console.log(`Component creation result: ${this.successfulCount} successes, ${this.failedCount} errors`)
        if (this.failedCount){
            console.log('Components failed: ' + this.failedComponents)
        }
    }
}

module.exports = Builder