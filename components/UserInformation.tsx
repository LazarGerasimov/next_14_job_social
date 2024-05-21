import { currentUser } from "@clerk/nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";



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

      <SignedOut>
        <div className="text-center space-y-2">
          <p className="font-semibold">
            You are not signed in
          </p>
          <Button asChild className="bg-[#0B63C4] text-white">
            <SignInButton>Sign in</SignInButton>
          </Button>
        </div>
      </SignedOut>
    </div>
  )
}

export default UserInformation;