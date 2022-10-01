// import { useState } from "react";
// import { useParams } from "react-router-dom";

// export default function Projects() {
//   const projects = [
//     {
//       projectName: "İos Calculator",
//       prodjectDefiniton:
//         "Calculator is a basic calculator application made by Apple Inc. and bundled with its macOS, iOS, and watchOS operating systems. It has three modes: basic, scientific, and programmer. The basic mode includes a number pad, buttons for adding, subtracting, multiplying, and dividing, as well as memory keys.",
//       projectLink: "https://hakanyusuf1.github.io/IOS-CALCULATOR/",
//       projectGithubLink: "https://github.com/hakanyusuf1/IOS-CALCULATOR",

//       projectGroup: "Javascript",
//     },
//     {
//       projectName: "The Leap Year",
//       prodjectDefiniton:
//         "A leap year is a calendar year that contains an additional day added to keep the calendar year synchronized with the astronomical year or seasonal year.",
//       projectLink: "https://hakanyusuf1.github.io/leap_year_project/",
//       projectGithubLink: "https://github.com/hakanyusuf1/leap_year_project",
//       projectGroup: "Javascript",
//     },
//     {
//       projectName: "Netflix Sign In",
//       prodjectDefiniton: "I cloned Netflix sign in page.",
//       projectLink: "https://hakanyusuf1.github.io/Netflix_clone_project_1/",
//       projectGithubLink:
//         "https://github.com/hakanyusuf1/Netflix_clone_project_1",
//       projectGroup: "html-css",
//     },
//     {
//       projectName: "İos Calculator",
//       prodjectDefiniton: "This website for contact save and filter.",
//       projectLink:
//         "https://app.netlify.com/sites/contact-app-with-react/overview",
//       projectGithubLink: "https://github.com/hakanyusuf1/Contact-With-React",
//       projectGroup: "react",
//     },
//     {
//       projectName: "Getir",
//       prodjectDefiniton: "I cloned Getir website with React.js",
//       projectLink: "https://app.netlify.com/sites/gotur/overview",
//       projectGithubLink: null,
//       projectGroup: "react",
//     },
//   ];
//   const { toPath } = useParams();

//   console.log(toPath);

//   return (
//     <div>
//       {projects.map((project, index) => (
//         <div key={index}>{project.projectGroup}</div>
//       ))}
//     </div>
//   );
// }
