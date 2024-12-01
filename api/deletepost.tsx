export interface Post {
    id: number;
   
  }
  
  export const deletePost = async (id: number): Promise<void> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!res.ok) {
      throw new Error("Failed to delete post");
    }
  };
  
  