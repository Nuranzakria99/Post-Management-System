export interface Post {
    id: string;
    title: string;
    body: string;
  }
  
  export const editPost = async (id:string, post: { title: string; body: string }): Promise<Post> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post), 
    });
  
    if (!res.ok) {
      throw new Error('Failed to edit post');
    }
  
    return res.json(); 
  };
  
  