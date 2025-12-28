import {
  type DiscussionThreadType, DiscussionThread,
} from "./components/DiscussionThread.tsx";
import Header from "./components/Header.tsx";
import { useState, useEffect } from "react";

function App() {
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

export default App;
