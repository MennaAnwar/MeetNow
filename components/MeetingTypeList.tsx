"use client";

import { homeLinks } from "@/constants";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "./Card";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from './ui/use-toast';


const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState("");
  const router = useRouter();
  const user = useUser();
  const client = useStreamVideoClient();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: '',
    link: '',
  });
  const [callDetail, setCallDetail] = useState<Call>();
  const {toast} = useToast();


  const createMeeting = async () => {
    if (!client || !user) return;
    try{
      
      if (!values.dateTime) {
        toast({ title: 'Please select a date and time' });
        return;
      }

      const id = crypto.randomUUID();
      const call = client.call('default', id);
      if (!call) throw new Error('Meeting Creation Failed !');
      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || 'Instant Meeting';

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetail(call);
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast({
        title: 'Meeting Created Successfully',
      });

    } catch(error){
      console.log(error);
      toast({
        title: 'Failed to create meeting',
      });
    }
  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {homeLinks.map((link, index) => (
        <Card
          img={link.img}
          className={link.className}
          key={`card-${index}`}
          title={link.title}
          description={link.description}
          handleClick={() =>
            link.handleClick === "/recordings"
              ? router.push("/recordings")
              : setMeetingState(link.handleClick)
          }
        />
      ))}

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState("")}
        className="text-center"
        buttonText="Start Meeting"
        title="Start Instant Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
