import {
  type DiscussionThreadType, DiscussionThread,
} from "./DiscussionThread.tsx";
import Header from "./Header.tsx";
import { useState, useEffect } from "react";

export default function Home() {
  const [discussionThreads, setDiscussionThreads] = useState<
    DiscussionThreadType[]
  >([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    let ignore = false;
    async function startFetching() {
      const response = await fetch(`${apiUrl}/discussion_threads/`);
      const data = await response.json();
      if (!ignore) {
        setDiscussionThreads(data);
      }
    }
    startFetching();
    return () => {
      ignore = true;
    };
  }, []);

  const discussionThreadElements = discussionThreads.map((d) => (
    <DiscussionThread key={d.id} discussionThread={d} />
  ));

  return (
    <div className="max-w-[500px] mx-auto">
      <Header />
      {discussionThreadElements}
    </div>
  );
}
