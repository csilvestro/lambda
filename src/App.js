import React, { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Comment, Post, Images } from './models';

function App() {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const func = async () => {
      const models = await DataStore.query(Post)
      console.log(models)
      setPosts(models)
    }
    func()
  }, [])

  
  
  const createPost = async() => {
    const post = {
      title: window.prompt('blog post title'),
      content: window.prompt('blog post content')
    } 
    const newPost = await DataStore.save(
      new Post(post)
    )
    console.log(newPost)
  }

  // await DataStore.save(
  //   new Images({
  //   "images": "Lorem ipsum dolor sit amet"
  // }));

  // await DataStore.save(
  //   new Comment({
  //   "text": "Lorem ipsum dolor sit amet",
  //   "author": "Lorem ipsum dolor sit amet",
  //   "postID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
  // }));


  return (
    <div>
      <header>
        <h1>Hello from V2</h1>
        <button onClick={createPost}>Create Post</button>
        {posts.map(post => <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>)}
      </header>
    </div>
  );
}

export default App;