import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import type { Topic } from '@/lib/data';

export default function TopicCard({ topic }: { topic: Topic }) {
  return (
    <Card className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-primary">
      <CardHeader className="flex-row items-center gap-4">
        <div className="bg-primary/20 p-3 rounded-lg">
          <topic.Icon className="h-8 w-8 text-primary" />
        </div>
        <div className="flex-1">
          <CardTitle className="font-headline text-2xl">{topic.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{topic.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link href={`/topics/${topic.slug}`}>
            ¡Vamos a aprender! <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
