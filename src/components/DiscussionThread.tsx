import imagePicture from "../assets/image-picture.svg";

export type DiscussionThreadType = {
  id: number;
  title: string;
  content: string;
  author: string;
  imagePath: string | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export function DiscussionThread({
  discussionThread,
}: {
  discussionThread: DiscussionThreadType;
}) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const imageSrc = discussionThread.imagePath
    ? `${apiUrl}${discussionThread.imagePath}`
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
