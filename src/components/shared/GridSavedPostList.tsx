import { useUserContext } from "@/context/AuthContext";
import { Models } from "appwrite";
import { Link } from "react-router-dom";
import PostStats from "./PostStats";

type GridPostListProps = {
  posts: Models.Document[];
  showUser?: boolean;
  showStats?: boolean;
};

const GridSavedPostList = ({
  posts,

  showStats = true,
}: GridPostListProps) => {
  const { user } = useUserContext();

  return (
    <ul className="grid-container">
      {posts.map((post) => (
        <li key={post.$id} className="relative min-w-80 h-80">
          <Link to={`/posts/${post.$id}`} className="grid-post_link">
            <img
              src={post.post.imageUrl}
              alt="post"
              className="h-full w-full object-cover"
            />
          </Link>
          {/* <div className="grid-post_user">
            {showStats && <PostStats post={post.user} userId={user.id} />}
          </div> */}
        </li>
      ))}
    </ul>
  );
};

export default GridSavedPostList;
