import socketIo from 'socket.io';
import { guardarFromForm } from '../modules/guardar.js';
import { productos } from '../modules/data.js';

export const initWsServer = (server) => {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('Nueva Conexion establecida!');

    socket.on('new-product', (data) => {
      let res = guardarFromForm(data);

      if (res === 400) {
        socket.emit('messages', 'Datos no validos en el formulario');
      } else {
        let product = [productos[productos.length - 1]];
        io.emit('update', product);
      }
      //PARA RESPONDER A UN SOLO CLIENTE
      // socket.emit('messages', messages);

      //PARA ENVIARLE EL MENSAJE A TODOS
      //io.emit('update', messages);

      //PARA ENVIARLE MENSAJE A TODOS MENOS AL QUE ME LO MANDO
      // socket.broadcast.emit('messages', messages);
    });

    socket.on('askProducts', () => {
      console.log('Envie los productos');
      if (productos.length > 0) {
        socket.emit('update', productos);
      }
    });
  });

  return io;
};
