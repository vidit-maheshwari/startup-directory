


// import React from 'react';
// import { Button } from './ui/button';
// import { Search } from 'lucide-react';
// import Form from 'next/form'
// import ResetButton from './ResetButton';

// function SearchBar({ query }: { query: string|undefined }) {
//   console.log(query)
//   return (
//     <Form action="/"  className="flex items-center">
//       <input
//         type="text"
//         placeholder="Search Startups..."
//         className="input-form"
//         name="query"
//         defaultValue={query} // Pre-fill the input with the query value
//       />
//       {query && (
//         <ResetButton />
//       )}
//       <Button
//         variant="outline"
//         className="text-black hover:bg-black hover:text-white w-6 p-6 rounded-full ml-2"
//         type="submit"
//       >
//         <Search className="w-6 h-6" />
//       </Button>
//     </Form>
//   );
// }

// export default SearchBar;


import React from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import Form from 'next/form';
import ResetButton from './ResetButton';

function SearchBar({ query }: { query: string | undefined }) {
  return (
    <Form
      action="/"
      className="flex items-center bg-white shadow-md rounded-full overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-teal-400 transition-all duration-300"
    >
      <input
        type="text"
        placeholder="Search Startups..."
        name="query"
        defaultValue={query} // Pre-fill the input with the query value
        className="w-full px-4 py-2 text-sm outline-none text-gray-700 placeholder-gray-400"
      />
      {query && (
        <ResetButton />
      )}
      <Button
        variant="outline"
        type="submit"
        className="bg-black text-white hover:bg-white hover:text-black w-12 h-12 flex items-center justify-center rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
      >
        <Search className="w-6 h-6" />
      </Button>
    </Form>
  );
}

export default SearchBar;
