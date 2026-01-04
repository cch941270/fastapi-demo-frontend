import imagePicture from "../assets/image-picture.svg";
import { type DiscussionThreadProps } from "../types/types";

export default function DiscussionThread({
  discussionThread,
}: {
  discussionThread: DiscussionThreadProps;
}) {
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const imageSrc = discussionThread.imagePath
    ? `${baseApiUrl}${discussionThread.imagePath}`
    : imagePicture;
  const createdAt = new Date(discussionThread.createdAt).toLocaleString();

  return (
    <article className="grid grid-cols-10 grid-rows-4 h-[152px] p-[5px] my-[5px] bg-lime-50">
      <div className="col-span-3 row-span-4">
        <img className="w-[142px]" src={imageSrc} />
      </div>
      <div className="col-start-4 col-span-7 row-span-1 flex justify-between">
        <span>{discussionThread.author}</span>
        <span>{createdAt}</span>
      </div>
      <div className="col-start-4 col-span-7 row-start-2 row-span-1">
        {discussionThread.title}
      </div>
      <div className="col-start-4 col-span-7 row-start-3 row-span-2 overflow-scroll">
        {discussionThread.content}
      </div>
    </article>
  );
}
