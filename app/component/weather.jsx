// import Image from "next/image";
// import React from "react";

// const Weather = ({ data }) => {
//   console.log(data);
//   return (
//     <div className="text-white flex flex-col text-center max-w[500px] w-full h-[90vh] m-auto p-4 ">
//       <div className="w-full flex justify-around pt-3 ">
//         <div>
//           <div>
//         <Image
              
//           src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
//           alt="/"
//           width="100"
//           height="100"
//         /> 
//       </div>
//       <div className="text-2xl">{data.weather[0].main}</div>
//       <div className="text-6xl">
//         <div className="bg-black/50 relative p-8 roundwd-md">
  

//           <p className="text-2xl text-center pb-6"> Weather in {data.name}</p>
//           <div className="flex justify-between text-center">

//           </div>
//         </div>
//         {data.main.temp.toFixed(0)}
//         &#176; 
//       </div>
//       <div>
//         <p className="text-xl">Feels Like</p>
//         <p className="font-bold text-2xl">{data.main.feels_like.toFixed(0)}&#176;</p>
//       </div>
//       <div>
//         <p className="text-xl">Feels Like</p>
//         <p className="text-xl">Humidity</p>
//         <p claassName="font-bold text-2xl">{data.main.humidity}%</p>
//       </div>
//       <div>
//         <p className="text-xl"Wind speed</p>
//         <p className="font-bold text-2xl">{data.wind.speed.toFixed(0)} MPH</p>
//       </div>
//     </div>
//     </div>
  
  
//   );
// };



// import Image from "next/image";
// import React from "react";

// const Weather = ({ data }) => {
//   console.log(data);
//   return (
//     <div className="text-white flex flex-col text-center max-w-[500px] w-full h-[90vh] m-auto p-4 ">
//       <div className="w-full flex justify-around pt-3 ">
//         <div>
//           <div>
//             <Image
//               src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
//               alt="Weather Icon"
//               width={100}
//               height={100}
//             /> 
//           </div>
//           <div className="text-2xl">{data.weather[0].main}</div>
//           <div className="text-6xl">
//             <div className="bg-black/50 relative p-8 rounded-md">
//               <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
//               <div className="flex justify-between text-center">
//                 {/* Additional weather details here */}
//               </div>
//             </div>
//             {data.main.temp.toFixed(0)}
//             &#176; 
//           </div>
//           <div>
//           <div className="bg-black/50 relative p-8 rounded-md">
//             <p className="text-xl">Feels Like</p>
//             <p className="font-bold text-2xl">{data.main.feels_like.toFixed(0)}&#176;</p>
//           </div>
//           <div>
//           <div className="bg-black/50 relative p-8 rounded-md">
//             <p className="text-xl">Humidity</p>
//             <p className="font-bold text-2xl">{data.main.humidity}%</p>
//           </div>
//           <div>
//           <div className="bg-black/50 relative p-8 rounded-md">
//             <p className="text-xl">Wind speed</p>
//             <p className="font-bold text-2xl">{data.wind.speed.toFixed(0)} MPH</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Weather;


// import Image from "next/image";
// import React from "react";

// const Weather = ({ data }) => {
//   console.log(data);
//   return (
//     <div className="text-white flex flex-col text-center max-w-[500px] w-full h-[90vh] m-auto p-4 ">
//       <div className="w-full flex justify-around pt-3 ">
//         <div>
//           <div>
//             <Image
//               src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
//               alt="Weather Icon"
//               width={100}
//               height={100}
//             /> 
//           </div>
//           <div className="text-2xl"> {data.weather[0].main}</div>
//           <div className="text-6xl top-2.5">
//             <div className="bg-black/50 relative p-8 rounded-md">
//               <p className="text-2xl text-center pb-6">The temperature in {data.name}</p>
//               <div className="flex justify-between text-center">
//                 {/* Additional weather details here */}
//               </div>
//             </div>
//             {data.main.temp.toFixed(0)}
//             &#176; 
//           </div>
//           <div className="bg-black/50 relative p-8 rounded-md">
//             <div>
//               <p className="text-xl">Feels Like</p>
//               <p className="font-bold text-2xl">{data.main.feels_like.toFixed(0)}&#176;</p>
//             </div>
//             <div>
//               <p className="text-xl">Humidity</p>
//               <p className="font-bold text-2xl">{data.main.humidity}%</p>
//             </div>
//             <div>
//               <p className="text-xl">Wind speed</p>
//               <p className="font-bold text-2xl">{data.wind.speed.toFixed(0)} MPH</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Weather;


import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="text-white flex flex-col text-center max-w-[500px] w-full h-[90vh] m-auto p-4 ">
      <div className="w-full flex justify-around pt-3 ">
        <div className="flex flex-col items-center"> {/* Center content */}
          <div>
            <Image
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              width={100}
              height={100}
            /> 
          </div>
          <div className="text-2xl"> {data.weather[0].main}</div>
          <div className="text-6xl top-2.5">
            <div className="bg-black/50 relative p-8 rounded-md">
              <p className="text-2xl text-center pb-6">The temperature in {data.name}</p>
              <div className="flex justify-between text-center">
                {/* Additional weather details here */}
              </div>
            </div>
            {data.main.temp.toFixed(0)}
            &#176; 
          </div>
          <div className="bg-black/50 relative p-8 rounded-md">
            <div>
              <p className="text-xl">Feels Like</p>
              <p className="font-bold text-2xl">{data.main.feels_like.toFixed(0)}&#176;</p>
            </div>
            <div>
              <p className="text-xl">Humidity</p>
              <p className="font-bold text-2xl">{data.main.humidity}%</p>
            </div>
            <div>
              <p className="text-xl">Wind speed</p>
              <p className="font-bold text-2xl">{data.wind.speed.toFixed(0)} MPH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
