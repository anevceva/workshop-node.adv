import SongService from "../services/song.service.js";

export default class SongController {
    static async getAllSongs(req, res) {
        var name = req.params.name;
        try {

            if (name) {
                const songs = await SongService.getAllSongsByName(name)
                res.status(200).send(songs)
            } else {
                const songs = await SongService.getAllSongs()
                res.status(200).send(songs)
            }

        } catch (error) {
            res.status(500).send('Error while fetching song')
        }
    }



    static async addNewSong(req, res) {
        try {
            const song = await SongService.addNewSong(req.body);
            res.status(201).send(song)
        } catch (error) {
            res.status(500).send(error)
        }
    }

}