"use client";

import HomePopIn from "@/components/home/pop-in";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledHome>
      <section>
        <HomePopIn />
      </section>
    </StyledHome>
  );
}

const StyledHome = styled.main``;
