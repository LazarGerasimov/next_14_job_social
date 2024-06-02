import connectDB from "@/mongodb/db";
import { Post } from "@/mongodb/models/Post";
import { IUser } from "@/types";
import { NextResponse } from "next/server";


export interface AddPostRequestBody {
  user: IUser;
  text: string;
  imageUrl?: string | null;
}

export async function POST(request: Request) {

}

export async function GET(request: Request) {
  try {
    
    await connectDB(); // connect to database 

    const posts = await Post.getAllPosts();

    return NextResponse.json({ posts });

  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching posts" },
      { status: 500 }
    );
  }
}