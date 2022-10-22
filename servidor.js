const { Socket } = require('dgram')
const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection',(socket)=>{
 
socket.on('chat', (msg)=>{
    io.emit('chat',msg)
})
})


//para ver como estamos interactundo con el cliente
app.get('/',(req, res)=>{
    //res.send('<h1>CORRIENDO APLICACION</h1>')
    //console.log(__dirname)
    res.sendFile(`${__dirname}/cliente/index.html`)

})


server.listen(3000,()=>{
    console.log('servidor corriendo en http://localhost:3000')

})