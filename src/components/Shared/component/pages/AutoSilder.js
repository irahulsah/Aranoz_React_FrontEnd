import React from "react";
import Slide from "../Crousel/slide";
// import { red, blue, green } from "@material-ui/core/colors";
import AutoRotatingCarousel from "../Crousel/AutoRotatingCrousel";

const AutoSlider = () => {
  return (
    <>
      <AutoRotatingCarousel label="Get started" open={true} hideArrows={true}>
        <Slide
          media={
            <img
              src="/assets/img/banner_img.png"
              alt=""
              style={{ marginTop: "112px", marginBottom: "30px" }}
            />
          }
          mediaBackgroundStyle={{ backgroundColor: "#99cfff" }}
          style={{ backgroundColor: "#99cfff" }}
          title="Cloth & Wood Sofa"
          subtitle=" Incididunt ut labore et dolore magna aliqua quis
          ipsum suspendisse ultrices gravida. Risus commodo
          viverra"
        />
        <Slide
          media={
            <img
              src="/assets/img/banner_img.png"
              alt=""
              style={{ marginTop: "112px", marginBottom: "30px" }}
            />
          }
          mediaBackgroundStyle={{ backgroundColor: "#99cfff" }}
          style={{ backgroundColor: "#99cfff" }}
          title="Ever wanted to be popular?"
          subtitle="Well just mix two colors and your are good to go!"
        />
        <Slide
          media={
            <img
              src="/assets/img/banner_img.png"
              alt=""
              style={{ marginTop: "112px", marginBottom: "30px" }}
            />
          }
          mediaBackgroundStyle={{ backgroundColor: "#99cfff" }}
          style={{ backgroundColor: "#99cfff" }}
          title="Ever wanted to be popular?"
          subtitle="Well just mix two colors and your are good to go!"
        />
      </AutoRotatingCarousel>
    </>
  );
};

export default AutoSlider;
