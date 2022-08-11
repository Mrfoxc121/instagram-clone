import React from 'react'

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <img className='h-16 w-16 rounded-full border p-[2px]' src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user-image" />
        <div className="flex-1 ml-4">
            <h2 className='font-bold'>Foxc121</h2>
            <h3 className='text-gray-400 text-sm'>Wecome to Instagram</h3>
        </div>
        <button className='text-blue-400 font-semibold text-sm'>Sign out</button>
    </div>
  )
}
