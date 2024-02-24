import { redirect } from "next/navigation";

import dbConnect from "@/lib/dbConnect";
import { initialProfile } from "@/lib/initial-profile";
import Server from "@/models/Server";
import InitialModal  from "@/components/modals/initial-modal";

const SetupPage = async () => {
  await dbConnect();

  const profile = await initialProfile();

  const server = await Server.findOne({
    members: {
      $elemMatch: { profileId: profile._id },
    },
  });

  if (server) {
    return redirect(`/servers/${server._id}`);
  }

  return <InitialModal />;
};

export default SetupPage;
