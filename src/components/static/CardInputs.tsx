// import React from 'react'

import { propsInput } from "../../Types/Types";

const CardInputs: React.FC<propsInput> = ({
  placeholder1,
  placeholder2,
  showing,
}) => {
  return (
    <div>
      {showing ? (
        <input
          className=" w-[100%] my-2.5  p-4 rounded outline-none bg-white shadow-md"
          placeholder={placeholder1}
          type="email"
        />
      ) : null}
      <input
        className=" w-[100%] my-2.5  p-4 rounded outline-none bg-white shadow-md"
        placeholder={placeholder2}
        type="password"
      />
    </div>
  );
};

export default CardInputs;
