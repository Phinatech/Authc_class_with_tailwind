// import React from 'react'
import { propButton } from "../../Types/Types";

const Globalbutton: React.FC<propButton> = ({ buttonText }) => {
  return (
    <div className="p-2.5 bg-amber-300 w-20 rounded-sm cursor-pointer text-red-100 font-semibold">
      {buttonText}
    </div>
  );
};

export default Globalbutton;
