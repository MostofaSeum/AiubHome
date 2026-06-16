"use server";

import connectDB from "@/lib/db";
import Notice from "@/lib/models/notice";
import { success } from "better-auth";
import { revalidatePath } from "next/cache";

//fetch all notice from database
export async function getNotice(filter: any = {}) {
  try {
    const notices = await Notice.find(filter).sort({ createdAt: -1 });
    return notices.map((notice) => ({
      id: notice._id.toString(),
      name: notice.name,
      status: notice.status,
      userId: notice.userId,
      createdAt: notice.createdAt.toString(),
      updatedAt: notice.updatedAt.toString(),
    }));
  } catch (error) {
    console.log("Error fetching notice:", error);
  }
}

//create a new notice

export async function createNotice(name: string, userId: string, status: string = 'draft') {
  await connectDB();
  try {
    const newNotice = await Notice.create({ name, userId, status });
    revalidatePath("/dashboard");
    revalidatePath("/");
    return {
      success: true,
      notice: JSON.parse(JSON.stringify(newNotice)),
    };
  } catch (error) {
    console.log("Error creating notice:", error);
    return { success: false, error: "Failed to create notice" };
  }
}

//update an existing notice

export async function updateNotice(id: string, name: string, status: string) {
  await connectDB();
  try {
    const updateNotice = await Notice.findByIdAndUpdate(
      id,
      { name, status },
      { new: true },
    );
    revalidatePath("/dashboard");
    revalidatePath("/");
    return {
      success: true,
      notice: JSON.parse(JSON.stringify(updateNotice)),
    };
  } catch (error) {
    console.log("Error updating notice:", error);
    return { success: false, error: "Failed to update notice" };
  }
}


//delete notice
export async function deleteNotice(id:string){
  await connectDB();
  try{
    await Notice.findByIdAndDelete(id);
    revalidatePath("/dashboard");
    revalidatePath("/");
    return {
      success:true,
    };
  }catch(error){
    console.log("Error deleting notice:", error);
    return { success: false, error: "Failed to delete notice" };
  }
}