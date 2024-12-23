import React from "react";
import GradeCard from "./GradeCard";
import { Sunflower } from "next/font/google";
import SubjectCard from "./SubjectCard";

const GradeLevels = () => {
  const grades = [
    {
      grade: "Elementary",
      avatar: "./elementary.png",
    },
    {
      grade: "Middle School",
      avatar: "./Middleschool.png",
    },
    {
      grade: "High School",
      avatar: "./Highschool.png",
    },
    {
      grade: "College/Adult",
      avatar: "./College-Adult.png",
    },
  ];

  const subjects = [{
    subject: "Math",
    avatar: "./math.png"
  },{
    subject: "English",
    avatar: "./english.png"
  },{
    subject: "Science",
    avatar: "./science.png"
  },{
    subject: "History",
    avatar: "./history.png"
  },{
    subject: "Foreign Language",
    avatar: "./foreign-lng.png"
  },{
    subject: "Class Test",
    avatar: "./class-test.png"
  },{
    subject: "IB Classes",
    avatar: "./ib-classes.png"
  },{
    subject: "AP Classes",
    avatar: "./ap-classes.png"
  }]

  return (
    <>
      <div className="relative w-full flex flex-col justify-center text-center p-3 overflow-hidden">
        <h1 className="text-3xl font-semibold text-[#0199D3]">Grade Levels</h1>

        <img src="./Grade-Vector.png" alt="" className="absolute h-screen w-full z-10 top-12"/>

        {/* Grade Cards */}
        <div className="mt-10 mb-16 z-30 py-3 px-2 w-full flex flex-col justify-center text-center flex-wrap sm:flex-row gap-5 md:px-20">
           {grades.map((level,index)=>(
            <GradeCard level={level}/>
           ))}
        </div>


        
        <h1 className="text-3xl font-semibold text-[#0199D3]">Subjects</h1>
        <div className="w-full  flex flex-col gap-4 mt-10 sm:flex-row flex-wrap md:px-24">
            {subjects.map((sub,index)=>(
                <SubjectCard sub={sub} key={sub.subject}/>
            ))}
        </div>
      </div>
    </>
  );
};

export default GradeLevels;
