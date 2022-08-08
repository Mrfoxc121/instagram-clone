import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";

export default function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* post header */}

      <div className="flex items-center p-5">
        <img
          className="h-12 w-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img className="object-cover w-full" src={img} alt="" />

      {/* Post buttons */}
      <div className="flex justify-between p-4">
        <div className=" flex space-x-4 ">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          
        </div>
        <BookmarkIcon className="btn" />
      </div>
    </div>
  );
}
