import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type GridUserListProps = {
  users: Models.Document[];
};
const GridFeaturedList = ({ users }: GridUserListProps) => {
  return (
    <ul className="featured-grid">
      {users.map((user) => (
        <li key={user.$id} className="user-card  ">
          <Link to={`/profile/${user.$id}`}>
            <img
              src={user.imageUrl}
              alt="user"
              className=" object-cover rounded-full w-[54px] h-[54px]"
            />
          </Link>
          <p className="text-sm  font-semibold">{user.name}</p>
          <p className="text-light-3 small-regular">@{user.username}</p>
          <Button className="bg-primary-500 rounded-lg max-w-[74px] w-full">
            Follow
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default GridFeaturedList;
