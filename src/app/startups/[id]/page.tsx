

import React from 'react';
import { notFound } from 'next/navigation';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY, VIEWS_BY_ID } from "@/sanity/lib/queries";
import { writeClient } from '@/sanity/lib/write-client';

async function StartupDetails({ params }: { params: Promise<{ id: string }>}) {
  const id = (await params)?.id;
  if (!id) return notFound();

  const startup = await client.fetch(STARTUP_BY_ID_QUERY, { id });
  const totalViews = await client.fetch(VIEWS_BY_ID, {  id });
  await writeClient.patch(id).set({ views: totalViews.views + 1 }).commit();

  return (
    <div className="w-full h-screen bg-gray-50">
      {/* Header Section */}
      <div className="w-full h-1/3 bg-cover bg-center relative" style={{ backgroundImage: `url(${startup.image})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8 space-y-4">
          <h1 className="text-4xl font-bold">{startup.title}</h1>
          <p className="text-xl">{startup.category.toUpperCase()}</p>
          <div className="flex justify-center items-center space-x-3">
            <Avatar>
              <AvatarImage src={startup.author.image} alt={startup.author.name} />
              <AvatarFallback>{startup.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-xl font-semibold">{startup.author.name}</p>
              <p className="text-sm">{startup.author.bio}</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-lg">{startup.views} Views</span>
            <span className="ml-4 text-sm text-gray-200">{new Date(startup._createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Startup Pitch Section */}
      <div className="w-full h-2/3 p-8 overflow-y-auto bg-white">
        <h2 className="text-3xl font-semibold mb-4">Startup Pitch</h2>
        <p className="text-lg text-gray-700">{startup.description}</p>
      </div>
    </div>
  );
};

export default StartupDetails;
