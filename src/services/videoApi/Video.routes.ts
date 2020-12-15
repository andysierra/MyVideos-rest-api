import {Router} from 'express';
import bodyParser from 'body-parser';
import * as data from './Video.handlers';

const router = Router();
const jsonParser = bodyParser.json();

router.get('/video/list',        data.getVideoList); // Obtener lista de videos
router.get('/video/info/:title', data.getVideoInfo); // Obtener info de un solo video
router.post('/video/create', jsonParser, data.createVideo);  // Crear un video
router.delete('/video/delete/:id', data.deleteVideo);  // Borrar un video
router.put('/video/update/:id', data.updateVideo);  // Actualizar un video

export default router;