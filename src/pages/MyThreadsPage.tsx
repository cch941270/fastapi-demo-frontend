import { useState, useEffect } from "react";
import DiscussionThread from "../components/DiscussionThread.tsx";
import { type DiscussionThreadProps } from "../types/types.tsx";
import Header from "../components/Header";
import { getToken } from "../utils/utils.tsx";

export default function MyThreadsPage() {
  const [myDiscussionThreads, setMyDiscussionThreads] =
    useState<DiscussionThreadProps[]>([]);
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  useEffect(() => {
    const token = getToken();
    if (token) {
      let ignore = false;
      const startFetching = async () => {
        const response = await fetch(`${baseApiUrl}/user/discussion_threads/`, {
          headers: {
            Authorization: `${token.token_type} ${token.access_token}`,
          },
        });
        const data = await response.json();
        if (!ignore) {
          setMyDiscussionThreads(data);
        }
      }
      startFetching();
      return () => {
        ignore = true;
      };
    }
  }, []);

  const discussionThreadElements = myDiscussionThreads.map((d) => (
    <DiscussionThread key={d.id} discussionThread={d} isMyThread={true} />
  ));

  return (
    <>
      <Header />
      <h3 className="h-10 flex justify-center items-center mt-[5px] bg-lime-100">
        My Threads
      </h3>
      {discussionThreadElements}
    </>
  );
}
