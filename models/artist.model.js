import { Schema, model } from 'mongoose';
import validator from 'validator';

const artistSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name of artist is required'],
        minLength: 2
    },
    age: {
        type: Number,
        min: 1,
        max: 120,
        required: [true, 'Age is required']
    }
    
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

const Artist = model('Artist', artistSchema);

export default Artist;