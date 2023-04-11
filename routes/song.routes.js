import { Router } from 'express';
import SongController from '../controllers/song.controller.js';
const router = Router();

router.get('/:name?', SongController.getAllSongs)
router.post('/add',SongController.addNewSong)

export default router;