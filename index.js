// Write your code here!

// Async function to fetch posts from the API
async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return posts;
}

// Function to display posts in the DOM
function displayPosts(posts) {
  const postList = document.getElementById('post-list');
  
  // Loop through the posts array
  posts.forEach(post => {
    // Create li element
    const li = document.createElement('li');
    
    // Create h1 element and set title
    const h1 = document.createElement('h1');
    h1.textContent = post.title;
    
    // Create p element and set body
    const p = document.createElement('p');
    p.textContent = post.body;
    
    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);
    
    // Append li to the ul
    postList.appendChild(li);
  });
}

// Call the async function and display posts
fetchPosts().then(posts => {
  displayPosts(posts);
});
