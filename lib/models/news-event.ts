import mongoose, { Schema, Document } from "mongoose";

export interface INewsEvent extends Document {
  title: string;
  imageUrl: string;
  userId: string;
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

const NewsEventSchema = new Schema<INewsEvent>(
  {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true,
      index: true
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft'
    }
  },
  {
    timestamps: true,
  }
);

if (mongoose.models.NewsEvent) {
  delete mongoose.models.NewsEvent;
}

export default mongoose.model<INewsEvent>("NewsEvent", NewsEventSchema);
