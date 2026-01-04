import DiscussionThread from "../components/DiscussionThread.tsx";
import { type AccessToken, type DiscussionThreadProps } from "../types/types.tsx";
import Header from "../components/Header";
import { useState, useEffect } from "react";

export default function MyThreadsPage() {
  const [myDiscussionThreads, setMyDiscussionThreads] =
    useState<DiscussionThreadProps[]>([]);
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const tokenData = localStorage.getItem("accessToken");

  useEffect(() => {
    if (tokenData) {
      const token: AccessToken = JSON.parse(tokenData);
      let ignore = false;
      async function startFetching() {
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
