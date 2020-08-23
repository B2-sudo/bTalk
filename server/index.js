const express=require('express');
const socketIo=require('socket.io');
const http=require('http');

const app=express();
const PORT=process.env.PORT||5000;
const server=http.createServer(app);
const router=require('./router');


const {addUser,getUser,removeUser,getUserInRoom}=require('./users');


const io  = socketIo(server);


app.use(router);




io.on('connection',(socket)=>{
    
    socket.on('join',({name,room})=>{
        const user=addUser({id:socket.id,name,room });

        socket.emit('message',{user:'admin',text:`Welcome ${user.name}!`});

        socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name},has joined!`});

        socket.join(user.room);
    });

    socket.on('sendMessage',(message)=>{
        const user=getUser(socket.id);

        io.to(user.room).emit('message',{user:user.name,text:message});

    });


    socket.on('disconnect',()=>{
        console.log('User has left');
    })
})


server.listen(PORT,()=>console.log('Server Is Live'));