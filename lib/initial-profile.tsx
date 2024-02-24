import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import dbConnect from "@/lib/dbConnect";
import Profile from "@/models/Profile";

export const initialProfile = async () => {
  const user = await currentUser();
  await dbConnect();

  if (!user) {
    return redirectToSignIn();
  }

  // Спробувати знайти існуючий профіль
  const existingProfile = await Profile.findOne({ userId: user.id });

  if (existingProfile) {
    return existingProfile;
  }

  // Створити новий профіль, якщо він не існує
  const newProfile = new Profile({
    userId: user.id,
    name: user.firstName,
    imageUrl: user.imageUrl,
    email: user.emailAddresses[0].emailAddress,
  });

  await newProfile.save(); // Зберегти новий профіль у базі даних

  return newProfile;
};
