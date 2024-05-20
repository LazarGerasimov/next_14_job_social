import { currentUser } from "@clerk/nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";



const UserInformation = async () => {

  const user = await currentUser();

  return (
    <div>
      <Avatar>
        <AvatarImage src={user?.imageUrl || "https://github.com/shadcn.png"} />
        <AvatarFallback>{user?.firstName?.charAt(0)} {user?.lastName}</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default UserInformation;