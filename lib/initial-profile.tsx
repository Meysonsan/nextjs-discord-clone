import { currentUser, redirectToSignIn } from "@clerk/nextjs";

import dbConnect from "@/lib/dbConnect";

export const initialProfile = async () => {
    const user = await currentUser();

    if (!user) {
        return redirectToSignIn();
    }

    console.log(user.firstName + " " + user.lastName);
    
}