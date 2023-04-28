import mongoose from 'mongoose';
import novelsSchema from './novels-schema.js'
const novelsModel = mongoose.model("novels", novelsSchema);
export default novelsModel;