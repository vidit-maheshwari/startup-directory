// import React from 'react';
// import { auth, signIn, signOut } from '@/auth';
// import Link from 'next/link';
// import Image from 'next/image';

// async function Navbar() {
//   const session = await auth();

//   return (
//     <div className="flex flex-wrap items-center justify-between bg-white text-black px-4 py-3 md:px-8 shadow-md">
//       {/* Logo Section */}
//       <div className="flex items-center ">
//         <h1 className="text-lg font-bold">Logo</h1>
//       </div>

//       {session && session?.user ? (
//         <div className="flex flex-wrap items-center gap-6">
//             <Image src={session.user.image!} alt="User" width={40} height={40}></Image>

//           <div className="text-sm font-medium hidden sm:block">
//             {session.user.name}
//           </div>

//           <div>
//             <Link
//               href="/create"
//               className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
//             >
//               Create
//             </Link>
//           </div>

//           <form
//             action={async () => {
//               'use server';
//               await signOut();
//             }}
//           >
//             <button
//               type="submit"
//               className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-100 transition"
//             >
//               Logout
//             </button>
//           </form>
//         </div>
//       ) : (
//         <div className="flex items-center gap-6">

//           <form
//             action={async () => {
//               'use server';
//               await signIn('google');
//             }}
//           >
//             <button
//               type="submit"
//               className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;


import React from 'react';
import { auth, signIn, signOut } from '@/auth';
import Link from 'next/link';
import Image from 'next/image';

async function Navbar() {
  const session = await auth();

  return (
    <div className="flex items-center justify-between bg-[#1A1A19] text-white px-6 py-4 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold">
          L
        </div>
        <h1 className="text-xl font-extrabold tracking-wide">StartupHub</h1>
      </div>

      {session && session?.user ? (
        <div className="flex items-center gap-4">
          {/* User Image */}
          <Image
            src={session.user.image!}
            alt="User"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
          {/* User Name */}
          <span className="hidden sm:block text-sm font-medium text-gray-300">
            {session.user.name}
          </span>
          {/* Create Button */}
          <Link
            href="/create"
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition font-medium"
          >
            Create
          </Link>
          {/* Logout Button */}
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button
              type="submit"
              className="border border-white text-white px-4 py-2 rounded-full hover:bg-gray-800 transition font-medium"
            >
              Logout
            </button>
          </form>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          {/* Login Button */}
          <form
            action={async () => {
              'use server';
              await signIn('google');
            }}
          >
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition font-medium"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Navbar;
