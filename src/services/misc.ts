import { ErrorRequestHandler, RequestHandler } from 'express';
import { Schema, model } from 'mongoose';

// Autoincremento
export const autoIncremento = model('contadore', new Schema({
    collectionName: {type:String, required:true},
    count: {type:Number, required:true}
}));



// Cuando me envían un body mal formado:
export const syntaxError:ErrorRequestHandler = (error, req, res, next)=>{
    if(error instanceof SyntaxError) {
        // No te dejo seguir, YOU SHALL NOT PASS!!!
        res.status(400).json({
            mensaje: 'Necesito que me brindes los datos desde un '
            +'formulario o directamente desde un JSON compatible, parcero!'
        });
    }
    else next();
}





// Cuando no encuentra el recurso: 404
export const notFound:RequestHandler = (req, res) => {
    res.status(404).json(JSON.stringify({
        mensaje: 'No se encuentra lo que buscas bruh, :('
    }));
}