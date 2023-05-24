import React from "react";
/** @jsxImportSource theme-ui */


import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <p
          sx={{ color: "textTertiary" }}
          style={{
            fontSize: 14,
            fontWeight: 800,
            marginTop: 80
          }}>{progress.toFixed(2)}%</p>
      </span>
    </Html>
  )
}

export default Loader