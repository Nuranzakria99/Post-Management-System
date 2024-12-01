

import PostsTable from '../../component/table'; 
import Error from "../../component/error"

const PostsPage = async () => {
  try {
  
    return (
      <section className="p-4">
        <PostsTable/>
      </section>
    );
  } catch (error) {
    return <Error/>;
  }
};

export default PostsPage;
