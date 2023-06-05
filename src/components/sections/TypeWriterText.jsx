import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
`;

const TypeWriterText = () => {
  return (
    <Title>
      Discover a new era of cool
      <Typewriter
        options={{ autoStart: true, loop: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString("<span class='text-1'>NFTS.</span>")
            .pauseFor(2000)
            .deleteAll()
            .typeString("<span class='text-1'>Collectible Items.</span>")
            .pauseFor(2000)
            .deleteAll()
            .typeString("<span class='text-1'>Ape Killers!</span>")
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </Title>
  );
};

export default TypeWriterText;
