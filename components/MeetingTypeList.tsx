"use client";

import { homeLinks } from "@/constants";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "./Card";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState("");
  const router = useRouter();
  const createMeeting = () => {};

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
