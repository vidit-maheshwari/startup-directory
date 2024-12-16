import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Eye } from 'lucide-react'

interface StartupCardProps {
  _createdAt: string
  _id: string
  views: number
  author: { _id: number }
  title: string
  description: string
  image: string
  category: string
}

export function StartupCard({
  _createdAt,
  views,
  title,
  description,
  image,
  category
}: StartupCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs">
            {category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Eye className="w-3 h-3 mr-1" />
            {views}
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-1 line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center text-xs text-muted-foreground">
          <CalendarDays className="w-3 h-3 mr-1" />
          {_createdAt}
        </div>
      </CardFooter>
    </Card>
  )
}

