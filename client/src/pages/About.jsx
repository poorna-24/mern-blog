// import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="px-2 py-10 md:px-0">
      <div className="mx-auto max-w-4xl">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative h-48 w-48 flex-shrink-0 ">
            <img
              className="relative h-48 w-48 rounded-full object-cover hover:pointer-cursor"
              src="https://firebasestorage.googleapis.com/v0/b/mern-estate-fc99f.appspot.com/o/chandu1.jpg?alt=media&token=bb6772dc-82f8-40c1-8c51-c2bba42b986d"
              alt=""
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote>
              <p className="text-xl text-black">
                Experienced MERN Stack Developer with over 4 years of expertise, seamlessly navigating both frontend and backend development. Proficient in leveraging the MERN stack (MongoDB, Express.js, React, Node.js)
                to create dynamic and scalable applications. Adept at incorporating AI tools for accelerated development, ensuring efficiency and innovation in project delivery.
              </p>
            </blockquote>
            <p className="mt-7 text-lg font-semibold text-black">Poorna Chander Terala</p>

            <p className="mt-1 text-base text-gray-600">MERN Stack Developer | Full Stack Developer | ReactJs Developer at Tata Consultancy Services</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

// export default function About() {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="max-w-2xl mx-auto p-3 text-center">
//         <div className=" h-48 w-48 justify-center ">
//           <img
//             className="relative h-48 w-48 rounded-full object-cover hover:pointer-cursor"
//             src="https://firebasestorage.googleapis.com/v0/b/mern-estate-fc99f.appspot.com/o/chandu1.jpg?alt=media&token=bb6772dc-82f8-40c1-8c51-c2bba42b986d"
//             alt=""
//           />
//         </div>
//         <div>
//           <h1 className="text-3xl font font-semibold text-center my-7">About chandu's Blog</h1>
//           <div className="text-md text-gray-500 flex flex-col gap-6">
//             <p>
//               Versatile and results-driven MERN Stack Developer with over 4 years of proven expertise in architecting and developing cutting-edge web applications. Demonstrated excellence in leveraging the MERN (MongoDB,
//               Express.js, React, Node.js) stack to create robust and scalable solutions. Adept at utilizing AI tools to streamline development workflows, ensuring rapid and innovative project execution.
//             </p>

//             <p>
//               On this blog, you'll find weekly articles and tutorials on topics such as web development, software engineering, and programming languages. Chandu is always learning and exploring new technologies, so be
//               sure to check back often for new content!
//             </p>

//             {/* <p>
//               We encourage you to leave comments on our posts and engage with other readers. You can like other people's comments and reply to them as well. We believe that a community of learners can help each other
//               grow and improve.
//             </p> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
