import connectDB from "@/mongodb/db";
import { Post } from "@/mongodb/models/Post";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { post_id: string } }
) {
  try {
    await connectDB();

    const post = await Post.findById(params.post_id);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const comments = await post.getAllComments();
    return NextResponse.json(comments);
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching comments" },
      { status: 500 }
    );
  }
}