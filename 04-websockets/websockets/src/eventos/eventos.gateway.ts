import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from '@nestjs/websockets';
import{ Server, Socket } from 'socket.io'

@WebSocketGateway(
    8080,
    {
        cors: {
            origin: '*',
        },
    })

export class EventosGateway{
    @SubscribeMessage('hola')
    devolverHola(
        @MessageBody() message,
        @ConnectedSocket() socket:Socket
    ){
        socket.broadcast
            .emit(
                'EscucharEventoHola',{
                    mensaje: 'Bienvenido' +message.nombre
                }
            );
        return 'ok'
    }

    @SubscribeMessage('UnirseSala')
    UnirseSala(
        @MessageBody()
            message: { salaId: string, nombre: string },
        @ConnectedSocket()
            socket: Socket
    ) {
        socket.join(message.salaId);
        const mensajeAEnviar: any = {
            mensaje: 'Bienvenido ' + message.nombre
        };
        socket.broadcast
            .to(message.salaId)
            .emit(
                'EscucharEventoUnirseSala',
                mensajeAEnviar
            );
        return 'ok';
    }

    @SubscribeMessage('EnviarMensaje')
    enviarMensaje(
        @MessageBody()
            message: { salaId: string, nombre: string, mensaje:string },
        @ConnectedSocket()
            socket: Socket
    ) {
        const nuevoMensaje = {
            nombre: message.nombre,
            mensaje: message.mensaje,
            salaId: message.salaId
        } as any;
        socket.broadcast.to(message.salaId).emit('EscucharEventoMensajeSala', nuevoMensaje);
        return 'ok';
    }
}







