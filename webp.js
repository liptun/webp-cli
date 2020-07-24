const fs = require('fs')

const webp = require('webp-converter')
const chalk = require('chalk')

if ( !process.argv[3] ) {
    console.log(chalk.red('Filename is required'))
    return
}

const fileDir = process.argv[2].split('\\').join('/')
const fileName = `${fileDir}/${process.argv[3]}`
const fileNameWebP = fileName.split('.').slice(0, -1).join('.') + '.webp'

if ( fs.existsSync(fileName) ) {
    webp.cwebp(fileName, fileNameWebP, '-q 80')
    .then((response) => {
        console.log(chalk.green(response))
    })
}
