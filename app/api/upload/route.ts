import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST (req:NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if(!file){
            return NextResponse.json({error:"file is required"}, {status:400});
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

       // create unique filename

       const uniqueName = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
       const uploadDir = path.join(process.cwd(), "public", "news-and-events");

       await mkdir(uploadDir,{recursive:true});

       const filePath = path.join(uploadDir, uniqueName);

       await writeFile(filePath,buffer);

       return NextResponse.json({ success: true, url: `/news-and-events/${uniqueName}` }, { status: 200 });
    } catch (error) {
        console.log("Error uploading file:",error);
        return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
    }
    
}