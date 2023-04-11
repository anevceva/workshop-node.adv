import { Schema, model } from 'mongoose';
import validator from 'validator';

const songSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name of song is required'],
        minLength: 2
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        minLength: 2
    },
    year: {
        type: Number,
        required: [true, 'Year is required']
    },
    // album: {
    //     type: Schema.Types.ObjectId,
    //     // required: [true, "What album is this song from?"],
    //     ref: 'Album'
        
    // },
    // artist: {
    //    type: Schema.Types.ObjectId,
    // //    required: [true, "What album is this song from?"],
    //    ref: 'Artist'
    // }
})

const Song = model('Song', songSchema);

export default Song;