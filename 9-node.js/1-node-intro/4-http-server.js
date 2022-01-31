const http = require('http');
const fs = require('fs')

const httpServer = http.createServer() // Event Emitter

httpServer.on('request', (req, res) => {

    //------------------------------------------------------------
    // res.writeHead(200, {
    //     "Content-Type": 'text/plain'
    // })
    // res.write("Hello sapient!")
    // res.end()
    //------------------------------------------------------------


    //------------------------------------------------------------
    // Blocking/Sync IO
    //------------------------------------------------------------

    // const nodePdfBinary = fs.readFileSync('./slides/node.pdf')
    // res.writeHead(200, {
    //     "Content-Type": 'application/pdf',
    //     "Content-Disposition": `attachment; filename="${`sapient-node.pdf`}"`
    // })
    // res.write(nodePdfBinary)
    // res.end()

    //------------------------------------------------------------
    // Non-Blocking/Async IO
    //------------------------------------------------------------

    // fs.readFile('./slides/node.pdf', (err, data) => {
    //     res.writeHead(200, {
    //         "Content-Type": 'application/pdf',
    //         "Content-Disposition": `attachment; filename="${`sapient-node.pdf`}"`
    //     })
    //     res.write(data)
    //     res.end()
    // })


    //------------------------------------------------------------
    // Non-Blocking/Async IO with streams
    //------------------------------------------------------------

    // const fileReadStream = fs.createReadStream('./slides/node.pdf')
    // res.writeHead(200, {
    //     "Content-Type": 'application/pdf',
    //     "Content-Disposition": `attachment; filename="${`sapient-node.pdf`}"`
    // })
    // fileReadStream.pipe(res) // back-pressure enabled..


    //--------------------------------------------------------------

    const url = req.url;
    console.log(url);
    const fileReadStream = fs.createReadStream(`./slides${url}`)
    res.writeHead(200, {
        "Content-Type": 'application/pdf',
        "Content-Disposition": `attachment; filename="${`sapient-${url}`}"`
    })
    fileReadStream.pipe(res) // back-pressure enabled..

    //------------------------------------------------------------------
})


httpServer.listen(3000, () => {
    console.log("server at http://localhost:3000");
})