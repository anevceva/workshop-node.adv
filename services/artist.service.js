import Artist from "../models/artist.model.js";

export default class ArtistService {

    static async getAllArtists() {
        const artist = await Artist.find({})
        return artist;
    }

    static async getAllArtistsByName(name) {
        const artist = await Artist.find({name:name})
       
        return artist;
    }


      static async addNewArtist(artistData) {

        const artist = new Artist(artistData);
        const response = await artist.save()
        return response;
    }

    

}