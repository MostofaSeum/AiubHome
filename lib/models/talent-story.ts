import mongoose, { Schema, Document } from "mongoose";

export interface ITalentStory extends Document {
  title: string;
  imageUrl: string;
  userId: string;
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

const TalentStorySchema = new Schema<ITalentStory>(
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

if (mongoose.models.TalentStory) {
  delete mongoose.models.TalentStory;
}

export default mongoose.model<ITalentStory>("TalentStory", TalentStorySchema);
