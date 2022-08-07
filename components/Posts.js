import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id: "1",
            username: "foxc121",
            userImg: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img: "https://www.pexels.com/photo/rainbow-in-the-twilight-sky-12513998/",
            caption: "Wonderfull scene"
        },
        {
            id: "2",
            username: "Bobfish",
            userImg: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img: "https://www.pexels.com/photo/smiling-man-sitting-on-leather-couch-laughing-12598765/",
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
