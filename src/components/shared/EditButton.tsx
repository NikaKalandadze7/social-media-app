import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";
import { Link } from "react-router-dom";

const EditButton = () => {
  const { data: currentUser } = useGetCurrentUser();
  return (
    <Link
      to={`/update-profile/${currentUser?.$id}`}
      className="shad-button_ghost"
    >
      <img src={"/assets/icons/edit.svg"} alt="edit" width={20} height={20} />
      Edit Profile
    </Link>
  );
};

export default EditButton;
