import { useState, useEffect, useRef } from "react";

import "./style.scss";
import { useWindowResize } from "../../Hook/useWindowResize";

import {
  clientAudiophileIcon,
  clientDatabizIcon,
  clientMakerIcon,
  clientMeetIcon,
  imageHeroDesktop,
  imageHeroMobile,
} from "../../../assets";
const Main = () => {
  const [height, width] = useWindowResize();
  return (
    <>
      <div className="main">
        <div className="meta">
          <h2>Make</h2>
          <h2>Remote Work</h2>

          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <button>Learn More</button>

          <div className="client">
            <img src={clientDatabizIcon} alt="" />
            <img src={clientAudiophileIcon} alt="" />
            <img src={clientMeetIcon} alt="" />
            <img src={clientMakerIcon} alt="" />
          </div>
        </div>
        <div className="poster">
          <img src={width > 600 ? imageHeroDesktop : imageHeroMobile} alt="" />
        </div>
      </div>
    </>
  );
};

export default Main;
