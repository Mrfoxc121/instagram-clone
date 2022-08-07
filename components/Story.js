import React from 'react'

export default function Story({ img, username}) {
  return (
    <div >
        <img src={img} alt={username} className="rounded-full" />
        <p>{username}</p>
    </div>
  )
}
