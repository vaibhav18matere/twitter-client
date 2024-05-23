import React from "react";
import AddTweet from "../../components/AddTweet";
import TweetCard from "../../components/TweetCard";

const Feed = () => {
  return (
    <div className="col-span-6 border-r-[0.5px] border-l-[0.5px] border-slate-700 pl-4">
      <AddTweet />
      <TweetCard />
    </div>
  );
};

export default Feed;
