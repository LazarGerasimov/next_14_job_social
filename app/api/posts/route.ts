import { IUser } from "@/types";


export interface AddPostRequestBody {
  user: IUser;
  text: string;
  imageUrl?: string | null;
}

export async function POST(request: Request) {

}

export async function GET(request: Request) {

}