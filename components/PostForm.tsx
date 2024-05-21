"use client"

import { useUser } from "@clerk/nextjs"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const PostForm = () => {

  const { user } = useUser();

  return (
    <div>
      <form action="">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={user?.imageUrl || "https://github.com/shadcn.png"} />
            <AvatarFallback>
              {user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <input
            type="text"
            name="postInput"
            placeholder="Write a post.."
            className="flex-1 outline-none rounded-full py-3 px-4 border"
          />
        </div>
      </form>
    </div>
  )
}

export default PostForm