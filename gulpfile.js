const {watch, series} = require('gulp')

const Builder = require('./builder/builder')
const builder = new Builder()

exports.build = async () => {
    await builder.clean()
    await builder.createComponents()
    await builder.printResult()
}