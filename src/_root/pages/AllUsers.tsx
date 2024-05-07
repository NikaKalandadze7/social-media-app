import GridUserList from "@/components/shared/GridUserList";
import Loader from "@/components/shared/Loader";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AllUsers = () => {
  const { ref, inView } = useInView();
  const { data: users, fetchNextPage, hasNextPage } = useGetUsers();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
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
    <div className="explore-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold w-full">All Users</h2>
        {shouldShowUsers ? (
          <p className="text-light-4 mt-10 text-center w-full">End of Users</p>
        ) : (
          users.pages.map((item, index) => (
            <GridUserList key={`page-${index}`} users={item.documents} />
          ))
        )}
        {hasNextPage && (
          <div className="mt-10" ref={ref}>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
