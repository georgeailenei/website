import React from "react";
import TopInformation from "./Top/TopInformation";
import Console from "./Console/Console";

export default function Header() {
  return (
    <header>
      <TopInformation />
      <Console />
    </header>
  );
}
