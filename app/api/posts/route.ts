import connectDB from "@/mongodb/db";
import { IPostBase, Post } from "@/mongodb/models/Post";
import { IUser } from "@/types";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export interface AddPostRequestBody {
  user: IUser;
  text: string;
  imageUrl?: string | null;
}

export async function POST(request: Request) {
  auth().protect(); // Protect the route with Clerk authentication;



  try {
    const { user, text, imageUrl }: AddPostRequestBody = await request.json();

    const postData: IPostBase = {
      user,
      text,
      ...(imageUrl && { imageUrl }), // if image URL is available, spread 
    };

    const post = await Post.create(postData);

    return NextResponse.json({ message: "Post created successfully", post });

  } catch (error) {
    return NextResponse.json(
      { error: `An error occured while creating the post ${error}` },
      { status: 500 }
    )
  }


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