import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const MeetingSetup = ({setIsSetupComplete,}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const call = useCall();

  useEffect(() => {
    // camera setup
    if (isCameraOn) call?.camera.enable();
    else call?.camera.disable();

    // mic setup
    if (isMicOn) call?.microphone.enable();
    else call?.microphone.disable();
  }, [isMicOn, isCameraOn, call?.camera, call?.microphone]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-center text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-5">
        <Image
          onClick={() => setIsMicOn((isMicOn) => !isMicOn)}
          src={isMicOn ? "/icons/mic.svg" : "/icons/mic-off.svg"}
          alt="Mic"
          width={24}
          height={24}
        />
        <Image
          onClick={() => setIsCameraOn((isCameraOn) => !isCameraOn)}
          src={isCameraOn ? "/icons/cam.svg" : "/icons/cam-off.svg"}
          alt="Mic"
          width={24}
          height={24}
        />
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-pink-1 px-4 py-2.5"
        onClick={() => {
          call?.join();
          setIsSetupComplete(true);
        }}
      >
        Join meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
