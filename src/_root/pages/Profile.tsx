import EditButton from "@/components/shared/EditButton";
import FollowButton from "@/components/shared/FollowButton";
import {
  useGetCurrentUser,
  useGetPostById,
  useGetUserById,
} from "@/lib/react-query/queriesAndMutations";
import { Loader } from "lucide-react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams() as { id: string };

  const { data: currentUser } = useGetCurrentUser();
  const { data: user, isPending } = useGetUserById(id);

  return (
    <div className="profile-container">
      {isPending ? (
        <Loader />
      ) : (
        <div className="profile-inner-container">
          <div className="flex items-center gap-3">
            <img
              src={user?.imageUrl || "/assets/images/profile-placeholder.svg"}
              alt="profile"
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col">
              <p className="body-bold"> {user?.name}</p>
              <p className="small-regular text-light-3">@{user?.username}</p>
            </div>
            {currentUser?.$id === user?.id ? <EditButton /> : <FollowButton />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
