// // import React from 'react';
// // import { BackgroundBeams } from '../components/ui/background-beams';
// // import SearchBar from '../components/SearchBar';

// // const page = async ({ searchParams }: { searchParams: { query?: string | undefined } }) => {
// //   const query =  (await searchParams?.query) 

// //   return (
// //     <div className="relative flex items-center justify-center h-[50vh] bg-black text-white">
// //       <BackgroundBeams className="absolute inset-0" />
// //       <div className="z-10 flex flex-col items-center justify-center text-center">
// //         <h1 className="text-4xl font-extrabold mb-4">Showcase Your Startup Ideas</h1>
// //         <p className="text-lg mb-8 max-w-md">
// //           Join our community of innovators and entrepreneurs. Submit your startup ideas and get discovered!
// //         </p>
// //         <SearchBar query={query} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default page;




// import React from 'react';
// import { BackgroundBeams } from '../components/ui/background-beams';
// import SearchBar from '../components/SearchBar';
// import { client } from '@/sanity/lib/client';
// import { STARTUPS_QUERY } from '@/sanity/lib/queries';
// import { StartupCard } from '@/components/StartupCard';
// import Link from 'next/link';

// const Page = async ({ searchParams }: { searchParams: { query?: string | undefined } }) => {
//   // Access `query` directly from `searchParams`
//   const query = (await searchParams)?.query || null;
//   const data = await client.fetch(STARTUPS_QUERY, { search: query });


//   return (
//     <>
//       <div className="relative flex items-center justify-center h-[50vh] bg-black text-white">
//       <BackgroundBeams className="absolute inset-0" />
//       <div className="z-10 flex flex-col items-center justify-center text-center">
//         <h1 className="text-4xl font-extrabold mb-4">Showcase Your Startup Ideas</h1>
//         <p className="text-lg mb-8 max-w-md">
//           Join our community of innovators and entrepreneurs. Submit your startup ideas and get discovered!
//         </p>
//         <SearchBar query={query} />
//       </div>
//     </div>
//     <section className='text-center pt-4  '>
//       {query ? (
//         <p className='text-2xl font-bold underline underline-offset-4'>Search results for: &quot;{query}&quot;</p>
//       ) : (
//         <p className='text-2xl font-bold underline underline-offset-4'>All Startups</p>
//       )}
//     </section>
//     <div className='grid grid-cols-1 md:grid-cols-3 gap-2 p-4'>
//           {data.map((startup: any) => (
//             <div key={startup._id}>
//               <Link href={`/startups/${startup.slug.current}`}>
//               <StartupCard
//                   _createdAt={startup._createdAt}
//                   views={startup.views}
//                   title={startup.title}
//                   description={startup.description}
//                   image={startup.image}
//                   category={startup.category}
//                   slug={startup.slug.current} 
//                   />
//               </Link>
//             </div>
//           ))}
//     </div>
//     </>
//   );
// };

// export default Page;



import React from 'react';
import { BackgroundBeams } from '../components/ui/background-beams';
import SearchBar from '../components/SearchBar';
import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY, VIEWS_BY_ID } from '@/sanity/lib/queries';
import { StartupCard } from '@/components/StartupCard';
import Link from 'next/link';

const Page = async ({ searchParams }: { searchParams: { query?: string | undefined } }) => {
  // Access `query` directly from `searchParams`
  const query = (await searchParams)?.query || null;
  const data = await client.fetch(STARTUPS_QUERY, { search: query });
  // const totalViews = await client.fetch(VIEWS_BY_ID, { search: data._id });

  // console.log(data);

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-[50vh] bg-gradient-to-br from-black via-gray-800 to-black text-white overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="z-10 flex flex-col items-center justify-center text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white ">
            Showcase Your Startup Ideas
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-lg text-gray-300 animate-slide-up">
            Join our community of innovators and entrepreneurs. Submit your startup ideas and get discovered!
          </p>
          <SearchBar query={query} />
        </div>
      </div>

      {/* Section Header */}
      <section className="text-center pt-10 pb-4">
        <p className="text-2xl md:text-3xl font-bold text-gray-800 underline underline-offset-8 ">
          {query ? `Search results for: "${query}"` : 'All Startups'}
        </p>
      </section>

      {/* Startup Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8 bg-gradient-to-b from-gray-100 via-white to-gray-50">
        {data.map((startup: any) => (
          <div
            key={startup._id}
            className="group transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <Link href={`/startups/${startup._id}`}>
              <StartupCard
                _createdAt={startup._createdAt}
                views={startup.views}
                title={startup.title}
                description={startup.description}
                image={startup.image}
                category={startup.category}
                slug={startup.slug.current}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
