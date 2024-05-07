import { useUserContext } from "@/context/AuthContext";
import { Models } from "appwrite";
import { Link } from "react-router-dom";

type GridUserListProps = {
  users: Models.Document[];
};

const GridUserList = ({ users }: GridUserListProps) => {
  const { user } = useUserContext();
  console.log(user);
  return (
    <ul className="user-grid">
      {users.map((user) => (
        <li key={user.$id} className="user-card">
          <Link to={`/users/${user.$id}`} className="grid-post_link">
            <p className="line-clamp-1">{user.name}</p>
            <img
              src={user.imageUrl}
              alt="user"
              className="h-full w-full object-cover"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GridUserList;
