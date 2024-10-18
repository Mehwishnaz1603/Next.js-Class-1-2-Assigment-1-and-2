import Image from "next/image";
import  image  from "https://wallpaperaccess.com/full/4865684.jpg";
export default function Home() {
  return (
    
    <div className="parentContainer">
      <div className="childContainer">
      <div className="h1"> <h1>Hello Everyone This Is Our Next.Js First Project <br /> Hello World</h1></div>
       Hey ,
       <br />
       My Name Is <span className="span"> MehwishNaz </span>
       <br /> 
       I am Next Js Developer
       <div className="intro">
       
       <p>
      Hello! I am Mehwish Naz, a passionate Next.js developer with a knack for creating dynamic, high-performance web applications. 
      With a strong foundation in JavaScript and React, I specialize in building scalable, user-friendly interfaces that enhance 
      user experiences. I love leveraging Next.js's powerful features like server-side rendering and static site generation to 
      optimize performance and SEO. 
      With 2 years of experience in web development, I have successfully delivered projects across various domains,collaborating 
      closely with designers and stakeholders to bring ideas to life. Whether it’s crafting responsive layouts or implementing complex 
      functionalities, 
      I thrive on solving challenges and staying up-to-date with the latest trends in the JavaScript ecosystem. 

      </p>
      <button className="btn"> About Me</button>
      <button className="btn"> Download Cv</button>
</div>
      </div>
      <div className="image">
        <img src="https://wallpaperaccess.com/full/4865684.jpg" alt="Error" />
      </div>
    </div>
  );
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex items-center justify-between h-screen bg-aquamarine p-6">
//       <div className="flex flex-col justify-center w-fit h-auto">
//         <h1 className="text-2xl font-medium text-blue-500 underline">
//           Hello Everyone This Is Our Next.js First Project <br /> Hello World
//         </h1>

//         <p className="mt-4">
//           Hey,
//           <br />
//           My Name Is <span className="text-orange-500">Mehwish Naz</span>
//           <br />
//           I am a Next.js Developer
//         </p>

//         <div className="intro mt-4 text-sm italic font-semibold underline">
//           <p>
//             Hello! I am Mehwish Naz, a passionate Next.js developer with a knack for creating dynamic, high-performance web applications.
//             With a strong foundation in JavaScript and React, I specialize in building scalable, user-friendly interfaces that enhance
//             user experiences. I love leveraging Next.js's powerful features like server-side rendering and static site generation to
//             optimize performance and SEO. With 2 years of experience in web development, I have successfully delivered projects across various domains,
//             collaborating closely with designers and stakeholders to bring ideas to life. Whether it’s crafting responsive layouts or implementing complex
//             functionalities, I thrive on solving challenges and staying up-to-date with the latest trends in the JavaScript ecosystem.
//           </p>
//           <button className="bg-palevioletred text-blue-500 py-2 px-4 rounded mt-4 mr-2 cursor-pointer transition hover:bg-blue-500 hover:text-white">
//             About Me
//           </button>
//           <button className="bg-palevioletred text-blue-500 py-2 px-4 rounded mt-4 cursor-pointer transition hover:bg-blue-500 hover:text-white">
//             Download CV
//           </button>
//         </div>
//       </div>
//       <div className="w-1/2 mt-14">
//         <Image
//           src="https://wallpaperaccess.com/full/4865684.jpg"
//           alt="Background"
//           layout="responsive"
//           width={700}
//           height={475}
//           className="rounded-md"
//         />
//       </div>
//     </div>
//   );
// }


