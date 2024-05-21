"use client"

import { useUser } from "@clerk/nextjs"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const PostForm = async () => {

  const { user } = useUser();

  return (
    <div>
      <form action="">
        <div>
          <Avatar>
            <AvatarImage src={user?.imageUrl || "https://github.com/shadcn.png"} />
            <AvatarFallback>
              {user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
      </form>
    </div>
  )
}

export default PostForm