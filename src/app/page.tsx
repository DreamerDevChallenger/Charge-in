"use client";

import HomePopIn from "@/components/home/pop-in";
import styled from "styled-components";

export default function Home() {
  return (
    <main>
      <section>
        <HomePopIn />
      </section>
    </main>
  );
}

const StyledHome = styled.main``;
