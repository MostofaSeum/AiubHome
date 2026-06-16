import mongoose, { Schema,Document } from "mongoose";

export interface INotice extends Document {
    name:string;
    userId:string;
    status: 'draft' | 'published';
    createdAt:Date;
    updatedAt:Date;
    
}

const NoticeSchema = new Schema<INotice>({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true,
        index:true
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft'
    }
},
{
    timestamps:true,
}

);

if (mongoose.models.Notice) {
  delete mongoose.models.Notice;
}

export default mongoose.model<INotice>("Notice", NoticeSchema);