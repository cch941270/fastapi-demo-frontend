import {
  type DiscussionThreadType,
  DiscussionThread,
} from "../components/DiscussionThread.tsx";
import Header from "../components/Header.tsx";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [discussionThreads, setDiscussionThreads] =
    useState<DiscussionThreadType[]>([]);
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  useEffect(() => {
    let ignore = false;
    async function startFetching() {
      const response = await fetch(`${baseApiUrl}/discussion_threads/`);
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
    <div>
      <Header />
      {discussionThreadElements}
    </div>
  );
}
