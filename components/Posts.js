import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id: "1",
            username: "foxc121",
            userImg: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img: "https://images.pexels.com/photos/12641777/pexels-photo-12641777.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            caption: "Wonderfull scene"
        },
        {
            id: "2",
            username: "Bobfish",
            userImg: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img: "https://images.pexels.com/photos/13125805/pexels-photo-13125805.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            caption: "Enjoying life in the city"
        }
    ]
  return (
    <div>
        {posts.map(post => (
            <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
        ))}
    </div>
  )
}
