import mongoose, { Schema,Document } from "mongoose";

export interface INotice extends Document {
    name:string;
    userId:string;
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
    }
},
{
    timestamps:true,
}

);

export default mongoose.models.Notice || mongoose.model<INotice>("Notice",NoticeSchema);