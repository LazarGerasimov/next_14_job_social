import { IUser } from "@/types";
import mongoose, { Schema, Document, models, Model } from "mongoose";
import { IComment } from "./Comment";

export interface IPostBase {
  user: IUser;
  text: string;
  imageUrl?: string;
  comments?: IComment[];
  likes?: string;
}