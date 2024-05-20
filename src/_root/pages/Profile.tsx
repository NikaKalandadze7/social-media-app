import EditButton from "@/components/shared/EditButton";
import FollowButton from "@/components/shared/FollowButton";
import {
  useGetCurrentUser,
  useGetUserById,
} from "@/lib/react-query/queriesAndMutations";
import { Loader } from "lucide-react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams() as { id: string };

  const { data: currentUser } = useGetCurrentUser();
  const { data: user, isPending } = useGetUserById(id);

  console.log(user, 11111111);
  return (
    <div className="profile-container">
      {isPending ? (
        <Loader />
      ) : (
        <div>
          <div className="profile-inner_container">
            <img
              src={user?.imageUrl || "/assets/images/profile-placeholder.svg"}
              alt="profile"
              className="h-36 w-36 rounded-full"
            />
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="font-semibold !text-4xl"> {user?.name}</p>
                <p className="small-regular text-light-3 text-base">
                  @{user?.username}
                </p>
              </div>
              <div className="flex flex-row gap-8">
                <p className="flex flex-row gap-2 items-center">
                  <span className="text-primary-500">{user?.posts.length}</span>
                  Posts
                </p>
                <p className="flex flex-row gap-2 items-center">
                  <span className="text-primary-500">{user?.posts.length}</span>
                  Followers
                </p>
                <p className="flex flex-row gap-2 items-center">
                  <span className="text-primary-500">{user?.posts.length}</span>
                  Following
                </p>
              </div>
              <div>{user?.bio}</div>
            </div>
            {currentUser?.$id === user?.$id ? <EditButton /> : <FollowButton />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
