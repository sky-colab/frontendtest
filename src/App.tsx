/** @jsxImportSource @emotion/react */
import Image from "./Image";
import "./reset.css";

import { css } from "@emotion/react";

function App() {
  return (
    <div
      className="App"
      css={css`
        max-width: 1024px;
        margin: 0 auto;
        padding-top: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;          
      `}
    >
      <h1
        css={css`
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 2rem;
        `}
      >
        Image Gallery
      </h1>

      <Image src="https://apod.nasa.gov/apod/image/2206/Arp286-202203-CDK24-FLIPL9000-LRGB_NicolasROLLAND_signature_LD1024.jpg" />

      <Image src="https://apod.nasa.gov/apod/image/2206/CygWideHa-OIIIBiColorImage2_crop2_1024.jpg" />

      <Image src="https://apod.nasa.gov/apod/image/2206/Ngc6188_Robertson_2000.jpg" />

      <Image src="https://apod.nasa.gov/apod/image/2206/M31MwBang_NASA_1280.jpg" />

      <Image src="https://apod.nasa.gov/apod/image/2205/Needle_Galaxy_4-7-22.jpg" />

      <Image src="https://apod.nasa.gov/apod/image/2205/LagoonCenter_HubbleOzsarac_960.jpg" />

      <Image src="https://apod.nasa.gov/apod/image/2205/M31_HubbleSubaruGendler_960.jpg" />

      <Image src="https://apod.nasa.gov/apod/image/2205/DiamondMoonWSMALL1024.jpg" />

      <Image src="https://apod.nasa.gov/apod/image/2205/CatsPaw_Bemmerl_960.jpg" />

    </div>
  );
}

export default App;
