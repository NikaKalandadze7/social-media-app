import GridSavedPostList from "@/components/shared/GridSavedPostList";
import Loader from "@/components/shared/Loader";
import { useGetSavedPosts } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Saved = () => {
  const { ref, inView } = useInView();
  const { data: posts, fetchNextPage, hasNextPage } = useGetSavedPosts();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  if (!posts) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }

  const shouldShowUsers = posts.pages.every(
    (item) => item?.documents.length === 0
  );
  console.log(posts, 1232322322322);
  return (
    <div className="explore-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold w-full">Saved Posts</h2>
        {shouldShowUsers ? (
          <p className="text-light-4 mt-10 text-center w-full">
            No Saved Posts
          </p>
        ) : (
          posts.pages.map((item, index) => (
            <GridSavedPostList key={`page-${index}`} posts={item.documents} />
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

export default Saved;
