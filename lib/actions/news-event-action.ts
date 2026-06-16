"use server"
import connectDB from "@/lib/db";
import NewsEvent from "@/lib/models/news-event";
import { success } from "better-auth";
import { revalidatePath } from "next/cache";


//fetch all news and events
export async function getNewsEvents() {
    await connectDB();
    try{
        const newsEvents = await NewsEvent.find({}).sort({createdAt:-1});
        return newsEvents.map((newsEvent)=>{
            return{
                id: newsEvent._id.toString(),
                title: newsEvent.title,
                imageUrl: newsEvent.imageUrl,
                userId: newsEvent.userId,
                status: newsEvent.status,
                createdAt: newsEvent.createdAt.toString(),
                updatedAt: newsEvent.updatedAt.toString(),
            }
        })
    }catch(error){
        console.error('error fetching news and events', error);
    }
    
}


//create news and events
export async function createNewsEvents(title:string,imageUrl:string,userId:string,status:'draft' | 'published'){
    await connectDB();
    try{
        const newNewsEvents = await NewsEvent.create({title,imageUrl,userId,status});
        revalidatePath("/dashboard");
        revalidatePath("/");
        return {
            success:true,
            newsEvent:JSON.parse(JSON.stringify(newNewsEvents)),
        };
    }catch(error){
        console.log("Error creating news and events:", error);
        return { success: false, error: "Failed to create news and events" };
    }
    
}

//update news and events
export async function updateNewsEvents(id:string,title:string,imageUrl:string,userId:string,status:'draft' | 'published'){
    await connectDB();
    try{
        const updateNewsEvents = await NewsEvent.findByIdAndUpdate(
            id,
            {title,imageUrl,userId,status},
            {new:true},
        );
        revalidatePath("/dashboard");
        revalidatePath("/");
        return {
            success:true,
            newsEvent:JSON.parse(JSON.stringify(updateNewsEvents)),
        };
    }catch(error){
        console.log("Error updating news and events:", error);
        return { success: false, error: "Failed to update news and events" };
    }
    
}

//delete news and events
export async function deleteNewsEvents(id:string){
    await connectDB();
    try{
        await NewsEvent.findByIdAndDelete(id);
        revalidatePath("/dashboard");
        revalidatePath("/");
        return {
            success:true,
        };
    }catch(error){
        console.log("Error deleting news and events:", error);
        return { success: false, error: "Failed to delete news and events" };
    }
    
}