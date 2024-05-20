import { currentUser } from "@clerk/nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";



const UserInformation = async () => {

  const user = await currentUser();

  return (
    <div>
      <Avatar>
        {user?.id ? (
          <AvatarImage src={user?.imageUrl} />
        ) : (
          <AvatarImage src="https://github.com/shadcn.png" />
        )}
        <AvatarFallback>{user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default UserInformation;