'use client'

// import React from 'react'
// import { Button } from './ui/button'
// import { CircleX } from 'lucide-react'
// import Link from 'next/link'


// function ResetButton() {
//     const reset = () => {
//         const form = document.querySelector('form') as HTMLFormElement
//         form?.reset()
//     }
//   return (
//     <div className='bg-red-600 relative'>
//       <Button variant='outline' className='  text-black hover:bg-black absolute hover:text-white w-4 p-4 rounded-full -top-4  right-2 ' type='reset' onClick={reset}><Link href='/'><CircleX className='w-4 h-4' /></Link></Button>
      
//     </div>
//   )
// }

// export default ResetButton


import React from 'react';
import { Button } from './ui/button';
import { CircleX } from 'lucide-react';
import Link from 'next/link';
export default function ResetButton() {
  const reset = () => {
    const form = document.querySelector('.input-form') as HTMLInputElement; // Select input element
    if (form) form.value = ''; // Clear the input value
  };

  return (
    <div className=' relative'>
<Button variant='outline' className='  text-black hover:bg-black absolute hover:text-white w-4 p-5 rounded-full -top-5  right-2 ' type='reset' onClick={reset}><Link href='/'><CircleX className='w-4 h-4' /></Link></Button>
          
   </div>
  );
}


