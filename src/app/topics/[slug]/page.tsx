import { getTopic } from '@/lib/data';
import { notFound } from 'next/navigation';
import TopicClientPage from './TopicClientPage';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = getTopic(params.slug);

  if (!topic) {
    return {
      title: 'Tema no encontrado'
    }
  }

  return {
    title: `${topic.title} | Procesadores de Texto`,
    description: topic.description,
  }
}

export default function TopicPage({ params }: { params: { slug:string } }) {
  const topic = getTopic(params.slug);

  if (!topic) {
    notFound();
  }

  return <TopicClientPage topic={topic} />;
}
