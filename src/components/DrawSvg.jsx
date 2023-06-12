import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Vector from "../Icons/Vector";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const DrawSvg = () => {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;

    let svg = document.getElementsByClassName("svg-path")[0];

    const length = svg.getTotalLength();
    console.log(length);

    // Start positioning of svg drawing
    svg.style.strokeDasharray = length;

    // Hide svg before scrolling starts
    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (self) => {
          const draw = length * self.progress;
          // console.log(self);

          // Also reverse the drawing when scroll goes up
          svg.style.strokeDashoffset = length - draw;
        },
      },
    });

    return () => {};
  }, []);
  return (
    <VectorContainer ref={ref}>
      <Vector />
    </VectorContainer>
  );
};

export default DrawSvg;
