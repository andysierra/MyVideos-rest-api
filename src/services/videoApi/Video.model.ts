import { Schema, model, Model, Document} from 'mongoose';

// Video Schema
const videoSchema = new Schema({
    id: {type:Number},
    title: {type: String, required:true},
    description: {type: String, default:'Sin descripción'},
    url: {type: String, unique:true, required:true}
}, {
    timestamps:true
});


// Export videoModel
export default model('video', videoSchema);