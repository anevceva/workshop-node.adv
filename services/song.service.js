import Song from "../models/song.model.js";

export default class SongService {

    static async getAllSongs() {
        const songs = await Song.find({})
        return songs;
    }

  static async getAllSongsByName(name) {
        const song = await Song.find({name:name})
       
        return song;
    }
    static async addNewSong(songData) {

        const song = new Song(songData);
        const response = await song.save()
        return response;
    }

}