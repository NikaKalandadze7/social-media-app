import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type GridUserListProps = {
  users: Models.Document[];
};

const GridUserList = ({ users }: GridUserListProps) => {
  return (
    <ul className="user-grid">
      {users.map((user) => (
        <li key={user.$id} className="user-card">
          <Link to={`/profile/${user.$id}`}>
            <img
              src={user.imageUrl}
              alt="user"
              className=" object-cover rounded-full w-[90px] h-[90px]"
            />
          </Link>
          <p className="line-clamp-1 font-semibold">{user.name}</p>
          <p className="text-light-3 small-regular">@{user.username}</p>
          <Button className="bg-primary-500 rounded-lg max-w-[118px] w-full">
            Follow
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default GridUserList;
