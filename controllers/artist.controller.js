import ArtistService from "../services/artist.service.js";

export default class ArtistController {
    static async getAllArtists(req, res) {
        var name = req.params.name;
        try {
            if (name) {
                const artists = await ArtistService.getAllArtistsByName(name)
                res.status(200).send(artists)
            } else {
                const artists = await ArtistService.getAllArtists()
                res.status(200).send(artists)
            }
        } catch (error) {
            res.status(500).send('Error while fetching artists')
        }

    }

    static async addNewArtist(req, res) {
        try {
            const artist = await ArtistService.addNewArtist(req.body);
            res.status(201).send(artist)
        } catch (error) {
            res.status(500).send(error)
        }
    }

}