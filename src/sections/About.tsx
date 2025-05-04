"use client"

import { SectionHeader } from "@/components/sectionsheader";
import { Card } from "@/components/card";
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CSSIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import GithubIcon from "@/assets/icons/github.svg"
import NextIcon from "@/assets/icons/next2.svg"
import VueIcon from "@/assets/icons/vue.svg.svg"
import NuxtIcon from "@/assets/icons/nuxt.svg.svg"
import TailwindIcon from "@/assets/icons/tailwind.svg.svg"
import PythonIcon from "@/assets/icons/python2.svg"

import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolBoxItems";
import {motion}  from "framer-motion"
import { useRef } from "react";

const toolboxItems =[
  {
    title:"javascript",
    iconType: JavascriptIcon ,
  },
  {
    title:"HTML5",
    iconType: HTMLIcon,
  },
  {
    title:"CSS3",
    iconType: CSSIcon ,
  },
  {
    title:"React",
    iconType: ReactIcon ,
  },
  {
    title:"Github",
    iconType: GithubIcon ,
  },
  {
    title:"Next.js",
    iconType: NextIcon,
  },
  {
    title:"Vue3",
    iconType: VueIcon ,
  },
  {
    title:"Nuxt",
    iconType: NuxtIcon ,
  },
  {
    title:"Tailwind",
    iconType:TailwindIcon ,
  },
  {
    title:"Python",
    iconType: PythonIcon,
  },
];

const hobbies =[
  {
    title:"Gaming",
    emoji:"",
    left: "5%",
    top:"5%",
  },
  {
    title:"Reading",
    emoji:"",
    left: "50%",
    top:"5%",
  },
  {
    title:"Playing Bass",
    emoji:"",
    left: "10%",
    top:"35%",
  },
  {
    title:"Climbing",
    emoji:"",
    left: "35%",
    top:"40%",
  },
  {
    title:"Designing",
    emoji:"",
    left: "70%",
    top:"45%",
  },
  {
    title:"Tinkering",
    emoji:"",
    left: "5%",
    top:"65%",
  },
  {
    title:"Computors",
    emoji:"",
    left: "45%",
    top:"70%",
  },
]
const hobbies2 =[
  {
    title:"Three.js",
    emoji:"",
    left: "5%",
    top:"5%",
  },
  {
    title:"Spline",
    emoji:"",
    left: "60%",
    top:"5%",
  },
  {
    title:"Python QA",
    emoji:"",
    left: "10%",
    top:"35%",
  },
  {
    title:"Raspberry Pie",
    emoji:"",
    left: "35%",
    top:"60%",
  },
]


export const AboutSection = () => {
  const constraintRef = useRef(null);
  const constraintRef2 = useRef(null);
  return (
    <div className="">
      <div className="container">
      <SectionHeader eyebrow="About me" 
      title="A glimpse into my world" 
      description="Hobbies & Technologies"
       />
       <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="Tech I'm Exploring" description="" />
            <div
              className="relative w-full h-[180px] md:h-[165px] lg:h-[165px]"
              ref={constraintRef2}
            >
              {hobbies2.map((hobby2) => (
                <motion.div
                  key={hobby2.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-[#FDE2C8] to-[#F7BDAA] rounded-full py-1.5 absolute"
                  style={{
                    left: hobby2.left,
                    top: hobby2.top,
                  }}
                  drag
                  dragConstraints={constraintRef2}
                >
                  <span className="font-medium text-[#5C4033]">{hobby2.title}</span>
                  <span>{hobby2.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader title="My toolbox" 
            description="Tools I use"
            className=""
            /> 
            <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
            <ToolboxItems 
             items={toolboxItems}
             className="mt-6"
             itemsWrapperClassName="animate-move-right [animation-duration:15s]"
             />
                  
          </Card>
          </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader className="px-6 py-6" title="Beyond the code" description="Explore my intrests (Move the boxes!)"/>
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map(hobby => (
                <motion.div key={hobby.title} 
                className="inline-flex items-center gap-2 px-6 
                bg-gradient-to-r from-[#FDE2C8] to-[#F7BDAA] rounded-full py-1.5 absolute "
                 style={{
                  left: hobby.left,
                  top:hobby.top,
                 }}
                 drag
                 dragConstraints={constraintRef}
                 >
                  <span className="font-medium text-[#5C4033]">{hobby.title}</span>
                  <span>{hobby.emoji}</span>

                </motion.div>
              ))}
          </div>
          </Card>

         <Card className="h-[320px]  relative md:col-span-2 lg:col-span-1">
      {/*         <Image src={mapImage} alt="map image"  className="h-full w-full object-cover object-left-top"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full
              bg-gradient-to-r from-emerald-300 to-sky-400 
              after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 
              after:rounded-full after:outline-gray-950/30 ">
                <Image src={smileMemoji} alt="smile emojui" className="size-20"/>
              </div> */}
              <CardHeader className="px-6 py-6" title="Me" description="I started in design and product development, but over the past 4 years, my passion for computers led me toward frontend development where creativity meets code"/>
              
          </Card>
        </div>
       </div>
      </div>
    </div>
  )
  
};
