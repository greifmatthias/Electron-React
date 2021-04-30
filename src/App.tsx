import React, { CSSProperties } from "react";

import react from "./assets/react.png";
import electron from "./assets/electron.png";
import typescript from "./assets/typescript.png";

export const App = () => {
  return (
    <div style={rootStyle}>
      <img src={react} alt="React Logo" width="200" height="200" />

      <p>+</p>

      <img src={electron} alt="Electron Logo" width="200" height="200" />

      <p>+</p>

      <img src={typescript} alt="TypeScript Logo" width="200" height="200" />
    </div>
  );
};

const rootStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  position: "absolute",
};
