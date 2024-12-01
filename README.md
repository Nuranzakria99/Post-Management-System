# Post Management System

This is a simple Post Management System built using **Next.js** and **Ant Design**. The application allows users to view, edit, and delete posts. The data is fetched from a placeholder API and can be managed via a user-friendly interface.

## Features
- **View Posts**: A table of posts is displayed, showing the title and body of each post.
- **Edit Post**: Each post has an "Edit" button that redirects the user to a form to edit.
- **Delete Post**: A "Delete" button is available to remove a post from the list.

## Installation
To get started with the project, follow these steps:

### 1. Clone the repository
git clone https://github.com/Nuranzakria99/Post-Management-System.git

#### 2. Install dependencies
cd post-management-system
npm install

##### 3. Run the application
npm run dev
Your application should now be running at http://localhost:3000.

**Assumptions**
The application is using JSONPlaceholder as the backend API. Since it's a mock API, data will not persist after the application is closed or reloaded.
The form for editing and creating posts works on the assumption that all fields (title and body) are mandatory.
Deleting a post doesn't actually remove the post from the data source, as we're interacting with a mock API (JSONPlaceholder).

**Challenges Faced**
Server-Side Rendering (SSR): Initially faced difficulties with SSR when trying to fetch and render data from the API.

Handling API Responses: The DELETE operation was tricky to implement as JSONPlaceholder doesn't actually delete the post but returns a placeholder response. The UI was designed to reflect a successful deletion in the frontend.

pre-filled edit form : One of the challenges I faced was implementing the pre-filled edit form. Despite several attempts, I was unable to make the form fields (Title and Body) auto-populate with the data of the selected post when editing. This functionality would require more advanced handling of dynamic data and state management, which I wasn't able to fully implement within my current time.

TypeScript Issues: Ensuring that the types for API responses, including Post, were properly aligned between the client and server components required some adjustments, particularly with the type mismatch for post IDs.

Managing Routing: Using Next.js Link and dynamic routes (/posts/edit/[postid]) required careful attention to ensure the correct post data was passed to the Edit Form.

**Approximate Time Spent**
within 6 to 7 hours






