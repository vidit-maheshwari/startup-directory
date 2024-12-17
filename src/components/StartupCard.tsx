// import Image from 'next/image'
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
// import { AspectRatio } from "@/components/ui/aspect-ratio"
// import { Badge } from "@/components/ui/badge"
// import { CalendarDays, Eye, Link } from 'lucide-react'

// interface StartupCardProps {
//   _createdAt: string
//   _id: string
//   views: number
//   author: { _id: number }
//   title: string
//   description: string
//   image: string
//   category: string
//   slug: string
// }

// export function StartupCard({
//   _createdAt,
//   views,
//   title,
//   description,
//   image,
//   category,
//   slug,
// }: StartupCardProps) {
//   return (
//     <>
//       <Card className="overflow-hidden transition-all hover:shadow-lg">
//       <CardHeader className="p-0">
//         <AspectRatio ratio={16 / 9}>
//           <Image
//             src={image}
//             alt={title}
//             fill
//             className="object-cover"
//             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//           />
//         </AspectRatio>
//       </CardHeader>
//       <CardContent className="p-4">
//         <div className="flex items-center justify-between mb-2">
//           <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs">
//             {category}
//           </Badge>
//           <div className="flex items-center text-xs text-muted-foreground">
//             <Eye className="w-3 h-3 mr-1" />
//             {views}
//           </div>
//         </div>
//         <h3 className="text-lg font-semibold mb-1 line-clamp-1">{title}</h3>
//         <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
//       </CardContent>
//       <CardFooter className="p-4 pt-0">
//         <div className="flex items-center text-xs text-muted-foreground">
//           <CalendarDays className="w-3 h-3 mr-1" />
//           {new Date(_createdAt).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//           })}
//         </div>
//       </CardFooter>
//     </Card>
//     </>
//   )
// }


import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Eye } from 'lucide-react';

interface StartupCardProps {
  _createdAt: string;
  _id: string;
  views: number;
  author: { _id: number };
  title: string;
  description: string;
  image: string;
  category: string;
  slug: string;
}

export function StartupCard({
  _createdAt,
  views,
  title,
  description,
  image,
  category,

}: StartupCardProps) {
  return (
    <Card
      className="overflow-hidden bg-gradient-to-br from-blue-50 to-white shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-blue-200 hover:ring-offset-2 rounded-lg group"
    >
      <CardHeader className="p-0 relative">
        <AspectRatio ratio={16 / 9} className="overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 bg-black/50 text-white text-xs py-1 px-2 rounded-tr-lg">
            Featured
          </div>
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <Badge
            variant="secondary"
            className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white hover:from-indigo-500 hover:to-purple-600 text-xs py-1 px-2 rounded-md animate-pulse"
          >
            {category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Eye className="w-4 h-4 mr-1 text-blue-500" />
            {views}
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-1 line-clamp-1 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 group-hover:text-gray-800 transition-colors duration-300">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center text-xs text-muted-foreground">
          <CalendarDays className="w-4 h-4 mr-1 text-gray-400" />
          {new Date(_createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <button className="text-sm font-medium text-blue-600 hover:underline transition-transform duration-200 hover:scale-105">
          Read More
        </button>
      </CardFooter>
    </Card>
  );
}
