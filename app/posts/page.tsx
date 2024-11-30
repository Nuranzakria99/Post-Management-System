import { Table ,Button } from 'antd';
import { ColumnType } from 'antd/es/table';
import { fetchPosts, Post } from '../../server/actions/postaction';
import Error from '../../component/error';
import Link from 'next/link';

const PostsPage = async () => {
  try {
    const posts: Post[] = await fetchPosts();

    const columns: ColumnType<Post>[] = [
      { title: 'Title', dataIndex: 'title', key: 'title' },
      { title: 'Body', dataIndex: 'body', key: 'body' },
      { title: 'Actions', key: 'actions' },
    ];

    return (
      <section className="p-4">
        <div className='flex flex-row mx-5 justify-center items-center'>
        Add Post
        <Link href="/posts/addform">
        <Button type="primary" htmlType="submit" block>
            Add Post
          </Button>
        </Link>
        
        </div>
        
        <Table
          className="w-full rounded-lg shadow-lg"
          dataSource={posts}
          columns={columns}
          rowKey="id"
        />
      </section>
    );
  } catch (error) {
    console.log("Error occurred during data fetching");

    return <Error />;
  }
};

export default PostsPage;
