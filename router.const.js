import { Router } from "express";
import songRoutes from "./routes/song.routes.js"
import artistRoutes from "./routes/artist.routes.js"

const router = Router();


router.use('/songs', songRoutes)
router.use('/artists', artistRoutes)



export default router;