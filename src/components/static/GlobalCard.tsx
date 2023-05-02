// import { useState } from "react";
import { propCard } from "../../Types/Types";
import CardInputs from "./CardInputs";

import Globalbutton from "./Globalbutton";

const GlobalCard: React.FC<propCard> = ({ textButton }) => {
  return (
    <div
      className="w-full
    h-full
    flex
    justify-center
    items-center
    m-5
     "
    >
      <div
        className="
    w-72
    h-100
    bg-blue-100
    shadow
    flex-col
    justify-center
    items-center
    p-5
  "
      >
        <div>Signin</div>

        <CardInputs placeholder1="Name" placeholder2="Email" showing={true} />

        <div className="my-2.5">
          <Globalbutton buttonText={textButton} />
        </div>
        <p className="">
          Have an account? <span>Signin</span>
        </p>
      </div>
    </div>
  );
};

export default GlobalCard;
