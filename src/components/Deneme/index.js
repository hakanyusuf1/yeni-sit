// import { useState } from "react"; // import state

// export default function Deneme() {
//   const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

//   return (
//     <div className="flex items-center justify-between border-b transition-all border-gray-400 py-8">
//       <a href="/">
//         <img src="https://designbygio.it/images/logo.png" alt="logo" />
//       </a>
//       <nav>
//         <section className="MOBILE-MENU  flex lg:hidden">
//           <div
//             className="HAMBURGER-ICON space-y-2 mr-8"
//             onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
//           >
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//           </div>

//           <div className="transition-all duration-1000">
//             <div className={`transition-all ${isNavOpen ? "h-full" : "h-0"}`}>
//               <div
//                 className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
//                 onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
//               >
//                 <svg width="32" height="32" viewBox="0 0 24 24">
//                   <path
//                     fill="currentColor"
//                     d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
//                   />
//                 </svg>
//               </div>
//               <ul className=" flex flex-col items-center justify-between min-h-[250px] ">
//                 <li className="border-b border-gray-400 my-8 uppercase">
//                   <a href="/about">About</a>
//                 </li>
//                 <li className="border-b border-gray-400 my-8 uppercase">
//                   <a href="/portfolio">Portfolio</a>
//                 </li>
//                 <li className="border-b border-gray-400 my-8 uppercase">
//                   <a href="/contact">Contact</a>
//                 </li>

//                 <div className="  md:flex  h-full  justify-center items-center ">
//                   <a
//                     className="w-20 text-sm rounded-2xl h-6 flex items-center justify-center text-white bg-sky-500"
//                     href="#contact"
//                   >
//                     Contact
//                   </a>
//                 </div>
//               </ul>
//             </div>
//           </div>
//         </section>

//         <ul className="DESKTOP-MENU hidden space-x-8 lg:flex flex justify-center items-center">
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#project">Portfolio</a>
//           </li>
//           <li>
//             <a href="#service">Contact</a>
//           </li>

//           <div className=" hidden md:flex  h-full flex justify-center items-center ">
//             <a
//               className="w-20 text-sm rounded-2xl h-6 flex items-center justify-center  bg-sky-500"
//               href="#contact"
//             >
//               Contact
//             </a>
//           </div>
//         </ul>
//       </nav>

//       <style>{`
//       .hideMenuNav {
//         display: none;
//       }
//       .showMenuNav {
//         display: block;
//         position: absolute;
//         width: 100%;
//         height: 100vh;
//         top: 0;
//         left: 0;
//         background: white;
//         z-index: 10;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-evenly;
//         align-items: center;
//       }
//     `}</style>
//     </div>
//   );
// }


// import { useState } from "react";

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="bg-gray-900  text-white w-full h-12 ">
//       <div className="container flex justify-between mx-auto h-full">
//         <div>logo</div>
//         <nav className="hidden md:block">
//           <a href="">hak</a>
//           <a href="">hak2</a>
//           <a href="">hak3</a>
//         </nav>
//         <div className="hidden md:block">iletişim</div>
//         <button
//           onClick={() => {
//             setOpen((old) => !old);
//           }}
//           className="block md:hidden"
//         >
//           bu buton
//         </button>
//       </div>
//       <div
//         className={` text-black overflow-hidden ${
//           open ? "h-[calc(100vh-3rem)] " : "h-0 "
//         }bg-red-400 w-full transition-all`}
//       >
//         <a href="">hak</a>
//         <a href="">hak2</a>
//         <a href="">hak3</a>
//       </div>
//     </div>
//   );
// }
