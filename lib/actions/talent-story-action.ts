"use server";

import connectDB from "@/lib/db";
import TalentStory from "@/lib/models/talent-story";
import { revalidatePath } from "next/cache";

// Fetch all talent stories
export async function getTalentStories() {
  await connectDB();
  try {
    const stories = await TalentStory.find({}).sort({ createdAt: -1 });
    return stories.map((story) => ({
      id: story._id.toString(),
      title: story.title,
      imageUrl: story.imageUrl,
      userId: story.userId,
      status: story.status,
      createdAt: story.createdAt.toString(),
      updatedAt: story.updatedAt.toString(),
    }));
  } catch (error) {
    console.error("Error fetching talent stories:", error);
    return [];
  }
}

// Create new talent story
export async function createTalentStory(
  title: string,
  imageUrl: string,
  userId: string,
  status: 'draft' | 'published' = 'draft'
) {
  await connectDB();
  try {
    const newStory = await TalentStory.create({ title, imageUrl, userId, status });
    revalidatePath("/dashboard");
    revalidatePath("/");
    return {
      success: true,
      story: JSON.parse(JSON.stringify(newStory)),
    };
  } catch (error) {
    console.error("Error creating talent story:", error);
    return { success: false, error: "Failed to create talent story" };
  }
}

// Update existing talent story
export async function updateTalentStory(
  id: string,
  title: string,
  imageUrl: string,
  userId: string,
  status: 'draft' | 'published'
) {
  await connectDB();
  try {
    const updated = await TalentStory.findByIdAndUpdate(
      id,
      { title, imageUrl, userId, status },
      { new: true }
    );
    revalidatePath("/dashboard");
    revalidatePath("/");
    return {
      success: true,
      story: JSON.parse(JSON.stringify(updated)),
    };
  } catch (error) {
    console.error("Error updating talent story:", error);
    return { success: false, error: "Failed to update talent story" };
  }
}

// Delete talent story
export async function deleteTalentStory(id: string) {
  await connectDB();
  try {
    await TalentStory.findByIdAndDelete(id);
    revalidatePath("/dashboard");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error deleting talent story:", error);
    return { success: false, error: "Failed to delete talent story" };
  }
}
