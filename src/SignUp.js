import React from "react";
import SignUpForm from "./component/SignupForm";

const SignUp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   border: "1px solid green",
          boxSizing: "border-box",
          Height: "100vh",
          width: "100%",
        }}
      >
        <SignUpForm />
      </div>
      <div
        style={{
          //   border: "1px solid red",
          boxSizing: "border-box",
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#2f2f2f",
        }}
      >
        <img src="https://www.action.com/contentassets/313cba827b9a4b1e904f816fea344c24/microsoftteams-image.png?preset=pageImageExtraLargeHD" />
      </div>
    </div>
  );
};

export default SignUp;
