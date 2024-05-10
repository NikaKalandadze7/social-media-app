import Loader from "@/components/shared/Loader";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";

import GridFeaturedList from "./GridFeaturedList";
const RightSidebar = () => {
  const { data: users } = useGetUsers();

  if (!users) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }
  const shouldShowUsers = users.pages.every(
    (item) => item?.documents.length === 0
  );
  return (
    <div className="home-creators">
      <div className="flex flex-col items-start justify-start gap-2 flex-1">
        <h3 className="line-clamp-1 font-bold text-2xl">Top Creators</h3>
        {shouldShowUsers ? (
          <p className="text-light-4 mt-10 text-center w-full">
            No Featured Users
          </p>
        ) : (
          users.pages.map((item, index) => (
            <GridFeaturedList key={`page-${index}`} users={item.documents} />
          ))
        )}
      </div>
    </div>
  );
};

export default RightSidebar;
