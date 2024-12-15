// import React from 'react';
// import { BackgroundBeams } from '../components/ui/background-beams';
// import SearchBar from '../components/SearchBar';

// const page = async ({ searchParams }: { searchParams: { query?: string | undefined } }) => {
//   const query =  (await searchParams?.query) 

//   return (
//     <div className="relative flex items-center justify-center h-[50vh] bg-black text-white">
//       <BackgroundBeams className="absolute inset-0" />
//       <div className="z-10 flex flex-col items-center justify-center text-center">
//         <h1 className="text-4xl font-extrabold mb-4">Showcase Your Startup Ideas</h1>
//         <p className="text-lg mb-8 max-w-md">
//           Join our community of innovators and entrepreneurs. Submit your startup ideas and get discovered!
//         </p>
//         <SearchBar query={query} />
//       </div>
//     </div>
//   );
// };

// export default page;




import React from 'react';
import { BackgroundBeams } from '../components/ui/background-beams';
import SearchBar from '../components/SearchBar';

const Page = async ({ searchParams }: { searchParams: { query?: string | undefined } }) => {
  // Access `query` directly from `searchParams`
  const query = (await searchParams)?.query ;

  return (
    <>
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
    <section className='text-center pt-4  '>
      {query ? (
        <p className='text-2xl font-bold underline underline-offset-4'>Search results for: &quot;{query}&quot;</p>
      ) : (
        <p className='text-2xl font-bold underline underline-offset-4'>All Startups</p>
      )}
    </section>
    </>
  );
};

export default Page;
