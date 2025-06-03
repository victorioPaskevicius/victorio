const EventEmitter =  require('events')

const customEmitter = new EventEmitter() 
customEmitter.on('response',(data,secondData)=>{
    console.log(data)
    console.log(secondData)
})

customEmitter.emit('response','Hello world',[10,20,30])