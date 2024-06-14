import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  useEffect(() => {}, []);
  return <StreamVideo client={videoClient}></StreamVideo>;
};
export default StreamVideoProvider;
