import React from "react";

export const TechIcons = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return <>
  <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
  <svg className="size-0 absolute">
    <linearGradient id="tech-icon-gradient">
        <stop offset="0%" stopColor="#FDE2C8 "/>
        <stop offset="100%" stopColor="#F7BDAA"/>
    </linearGradient>
  </svg>
  </>
  
};