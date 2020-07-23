const webp = require('webp-converter')

if ( !process.argv[2] ) {
    console.log('Filename is required')
    return
}
const fileName = process.argv[2]
const fileNameWebP = fileName.split('.').slice(0, -1).join('.') + '.webp'

webp.cwebp(fileName, fileNameWebP, '-q 80')
.then((response) => {
    console.log(response)
})