import { currentUser } from "@clerk/nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SignedIn } from "@clerk/nextjs";



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

      <SignedIn>
        <div className="text-center">
          <p className="font-semibold">
            {user?.firstName || "John"} {user?.lastName || "Doe"}
          </p>

          <p className="text-xs">
            @{user?.firstName || "John"}
            {user?.lastName || "Doe"}-{user?.id.slice(-4)}
          </p>
        </div>
      </SignedIn>
    </div>
  )
}

export default UserInformation;