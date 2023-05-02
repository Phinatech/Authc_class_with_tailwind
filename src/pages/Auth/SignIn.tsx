// import React from 'react'

import GlobalCard from "../../components/static/GlobalCard";

const SignIn = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <GlobalCard
        placeholder1="Username"
        placeholder2="Email"
        textButton="Sign in"
      />
    </div>
  );
};

export default SignIn;
