import { IUser } from "@/types";
import mongoose, { Schema, Document, models, Model } from "mongoose";
import { IComment, ICommentBase } from "./Comment";

export interface IPostBase {
  user: IUser;
  text: string;
  imageUrl?: string;
  comments?: IComment[];
  likes?: string;
}

export interface IPost extends IPostBase, Document {
  createdAt: Date;
  updatedAt: Date;
}

interface IPostMethods {
  likePost(userId: string): Promise<void>;
  unlikePost(userId: string): Promise<void>;
  commentOnPost(comment: ICommentBase): Promise<void>;
  getAllComments(): Promise<IComment[]>;
  removePost(): Promise<void>;
}

interface IPostStatics {
  getAllPosts(): Promise<IPostDocument[]>;
}

export interface IPostDocument extends IPost, IPostMethods { }; // singular instance of a post

interface IPostModel extends IPostStatics, Model<IPostDocument> { }; // all posts

const PostSchema = new Schema<IPostDocument>(
  {
    user: {
      userId: { type: String, required: true },
      userImage: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String }
    },
    text: { type: String, required: true },
    imageUrl: { type: String },
    comments: { type: [Schema.Types.ObjectId], ref: "Comment", default: [] },
    likes: { type: [String] }
  },
  {
    timestamps: true,
  }
);

PostSchema.methods.likePost = async function (userId: string) {
  try {
    await this.updateOne({ $addToSet: { likes: userId } });
  } catch (error) {
    console.log("error when liking post", error);
  }
};



