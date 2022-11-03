import React from "react";

const Error = ({ show, error }) => {
  //   let content = null;
  //   if (show) {
  //     content = (
  //       <div
  //         style={{
  //           position: "fixed",
  //           backgroundColor: "white",
  //           left: "50%",
  //           transform: " translateX(-50%)",

  //           bottom: "2rem",
  //           width: "25rem",
  //           height: "5rem",
  //           color: "black",
  //           borderRadius: "50px",
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <div>{error}</div>
  //       </div>
  //     );
  //   }
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "white",
        left: "50%",
        transform: " translateX(-50%)",

        bottom: "2rem",
        width: "25rem",
        height: "5rem",
        color: "black",
        borderRadius: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>{error}</div>
    </div>
  );
};

export default Error;
