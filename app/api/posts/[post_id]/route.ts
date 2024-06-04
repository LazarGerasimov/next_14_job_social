import connectDB from "@/mongodb/db";
import { Post } from "@/mongodb/models/Post";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { post_id: string } }
) {
  await connectDB();

  try {
    const post = await Post.findById(params.post_id);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching this post" }
    )
  }
};

// export interface DeletePostRequestBody {
//   userId: string;
// }

export async function DELETE(
  request: Request,
  { params }: { params: { post_id: string } }
) {
  auth().protect(); // protected route 

  const user = await currentUser();

  await connectDB();

  // const { userId }: DeletePostRequestBody = await request.json();  - check later 

  try {
    const post = await Post.findById(params.post_id);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (post.user.userId !== user?.id) {
      throw new Error("Post does not belong to this user");
    }

    await post.removePost();

    return NextResponse.json({ message: "Post delete successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while deleting the post" }
    )
  }
}