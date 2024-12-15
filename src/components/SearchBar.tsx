


import React from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import Form from 'next/form'
import ResetButton from './ResetButton';

function SearchBar({ query }: { query: string|undefined }) {
  console.log(query)
  return (
    <Form action="/"  className="flex items-center">
      <input
        type="text"
        placeholder="Search Startups..."
        className="input-form"
        name="query"
        defaultValue={query} // Pre-fill the input with the query value
      />
      {query && (
        <ResetButton />
      )}
      <Button
        variant="outline"
        className="text-black hover:bg-black hover:text-white w-6 p-6 rounded-full ml-2"
        type="submit"
      >
        <Search className="w-6 h-6" />
      </Button>
    </Form>
  );
}

export default SearchBar;
