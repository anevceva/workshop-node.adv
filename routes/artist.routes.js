import { Router } from 'express';
import ArtistController from "../controllers/artist.controller.js"
const router = Router();

router.get('/:name?', ArtistController.getAllArtists)
router.post('/add',ArtistController.addNewArtist)

export default router;