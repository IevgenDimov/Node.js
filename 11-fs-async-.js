const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8', (err, result) => {
    if(err) {
        console.log('failed')
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8', (err, result)=> {
        if(err) {
            console.log('failed')
            return
        }
        const second = result;
        writeFile(
            './content/result-async.tx',
             `Here is the result: ${first}, ${second}`
             ,(err, result) =>{
                 if(err){
                     console.log(err)
                     return
                 }
                 console.log(result)
             })
    })
})