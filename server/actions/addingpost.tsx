export interface Post {
  id: number;
  title: string;
  body: string;
}

export const addPost = async (post: { title: string; body: string }): Promise<Post> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post), 
  });

  if (!res.ok) {
    throw new Error('Failed to add post');
  }

  return res.json(); 
};
