import React, { useEffect } from "react";
import Image from "next/image";
import PlaceholderImage from "../public/placeholder.png";
import Card from "../public/card.png";
import { DetailModal } from "./DetailModal";
import { ExerciseModal } from "./ExerciseModal";
import { SendNotificationModal } from "./SendNotificationModal";
import SeePaymentModal from "./SeePaymentModal";
import { useState } from "react";
import PageLoader from "./PageLoader";

export default function Membercard({
  user,
  activity,
  editMemberHandler,
  addNotification,
  payment,
}) {
  const [image, setImage] = useState(PlaceholderImage);

  return (
    <div className="relative w-[400px] h-[500px] mx-auto mt-[30px]">
      <Image src={Card} alt="Card" className="w-full h-full" />
      <div className="absolute top-[1.5vw] left-[2vw] right-[2vw]">
        <Image
          src={image}
          width={1000}
          height={1000}
          alt="image fitnes"
          className="w-[300px] h-[300px] mx-auto py-2"
        />
        <hr className=" w-[280px] h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent mt-[5px]" />
        <div className="relative flex-col justify-center items-center text-center">
          <div className="my-5">
            <div className="flex-col justify-center items">
              <p className="font-bold mb-2">{user.username}</p>
            </div>
            <DetailModal user={user} />
            <ExerciseModal user={user} activity= {activity} />
            {/* <SeePaymentModal user={user} />
            <SendNotificationModal
              item={user}
              onAddNotification={addNotification}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
