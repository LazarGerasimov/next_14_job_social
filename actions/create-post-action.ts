"use server";

import { AddPostRequestBody } from "@/app/api/posts/route";
import { Post } from "@/mongodb/models/Post";
import { IUser } from "@/types";
import { currentUser } from "@clerk/nextjs/server";
import { text } from "stream/consumers";

export default async function createPostAction(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const postInput = formData.get("postInput") as string;
  const image = formData.get("image") as File;
  let imageUrl: string | undefined;

  if (!postInput) {
    throw new Error("post input is required");
  }

  // define user 
  const userDB: IUser = {
    userId: user.id,
    userImage: user.imageUrl,
    firstName: user.firstName || "John",
    lastName: user.lastName || "Doe"
  }


  try {
    if (image.size > 0) {
      // upload it 
      const body: AddPostRequestBody = {
        user: userDB,
        text: postInput,
        // imageUrl
      };
      // create post in db with image
      await Post.create(body);
    } else {
      // create post in db without image  

      const body: AddPostRequestBody = {
        user: userDB,
        text: postInput
      };

      await Post.create(body);
    }
  } catch (error: any) {
    throw new Error("Failed to create post", error);
  }

  // revalidatePath '/'

}