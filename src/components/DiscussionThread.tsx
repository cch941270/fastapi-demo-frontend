export default function DiscussionThread() {
  return (
    <article className="grid grid-cols-10 grid-rows-4 p-[5px] my-[5px] bg-lime-50">
      <div className="col-span-3 row-span-4">I am pic</div>
      <div className="col-start-4 col-span-7 row-span-1">I am title</div>
      <div className="col-start-4 col-span-7 row-start-2 row-span-3">
        I am loooong content
      </div>
    </article>
  );
}
