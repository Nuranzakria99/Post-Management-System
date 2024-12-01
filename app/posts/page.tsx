

import PostsTable from '../../component/table'; 
import Error from "../../component/error"
import Addpost from '@/component/addpost';

const PostsPage = async () => {
  try {
  
    return (
      <section className="p-4">
        <Addpost/>
        <PostsTable/>
      </section>
    );
  } catch (error) {
    return <Error/>;
  }
};

export default PostsPage;
