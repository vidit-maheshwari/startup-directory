// import React from 'react';
// import { BackgroundBeams } from './ui/background-beams';
// import Link from 'next/link';
// import { Button } from './ui/button';
// import SearchBar from './SearchBar';

// const  HeroSection = async({searchParams}: {searchParams: Promise<{ query?: string | undefined }>}) => {

//   const query = (await searchParams)?.query; // Use optional chaining

//   return (
//     <div className="relative flex items-center justify-center h-[50vh] bg-black text-white">
//       <BackgroundBeams className="absolute inset-0" />
//       <div className="z-10 flex flex-col items-center justify-center text-center">
//         <h1 className="text-4xl font-extrabold mb-4">Showcase Your Startup Ideas</h1>
//         <p className="text-lg mb-8 max-w-md">
//           Join our community of innovators and entrepreneurs. Submit your startup ideas and get discovered!
//         </p>
//         {/* <Link 
//           href="/create" 
//         >
//           <Button variant='outline' className='text-black hover:bg-black hover:text-white'>Submit Your Idea</Button>
        
//         </Link> */}
//         <SearchBar query={query} />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import React from 'react';
import { BackgroundBeams } from './ui/background-beams';
import SearchBar from './SearchBar';

const HeroSection = ({ query }: { query: string }) => {
  return (
    <div className="relative flex items-center justify-center h-[50vh] bg-black text-white">
      <BackgroundBeams className="absolute inset-0" />
      <div className="z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-extrabold mb-4">Showcase Your Startup Ideas</h1>
        <p className="text-lg mb-8 max-w-md">
          Join our community of innovators and entrepreneurs. Submit your startup ideas and get discovered!
        </p>
        <SearchBar query={query} />
      </div>
    </div>
  );
};

export default HeroSection;
