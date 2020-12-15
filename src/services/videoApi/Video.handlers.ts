import { RequestHandler } from 'express';
import video from './Video.model';
import { autoIncremento } from './../misc';

// Get the list of all videos in JSON
export const getVideoList:RequestHandler = async (req, res)=>{
    const videos = await video.find();
    res.status(200).json(videos);
}

// Get the list of all videos in JSON / 204 instead of {}
export const getVideoInfo:RequestHandler = async (req, res)=>{
    const videosFound = await video.find({title: req.params.title});
    let noContent = Object.keys(videosFound).length<1; // No Content?
    res.status(noContent?204:200).json(noContent?undefined:videosFound);
}

// Create a video from a JSON body request
export const createVideo:RequestHandler = async (req, res)=>{
    try {
        // primero encuentro que índice va a tener
        let lastCount = await autoIncremento.countDocuments();
        await (new autoIncremento({
            collectionName:'videos', 
            count:lastCount
        })).save();
        // luego guardo el video
        Object.assign(req.body, {id:lastCount});
        const newVideo = new video(req.body);
        let result = await newVideo.save();
        res.status(200).json(result);
    } catch (error) {
        console.error('\n[ERROR GUARDANDO VIDEO]: \n'+error);
        res.status(400).json({
            error_name:error.name,
            error_message:error.message
        });
    }
}

// Delete a video
export const deleteVideo:RequestHandler = async (req, res)=>{
    const exito = await video.findOneAndDelete({id:req.params.id});
    await autoIncremento.findOneAndDelete({count:req.params.id});
    res.status(exito?200:400).json(exito?exito:{
        error_name:'No Existe video con tal ID',
        error_message:`El id seleccionado (${req.params.id}) no se puede `+
        'borrar porque no existe en la base de datos!'
    });
}

// Update video info
export const updateVideo:RequestHandler = async (req, res)=>{
    if(!req.body)
        res.json('updating a video without body!');
    else {
        const result = await video.findOneAndUpdate({id:req.params.id}, 
            req.body, 
            {overwrite:true});
        res.status(200).json(result);
    }
}