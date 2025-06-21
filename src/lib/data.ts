import type { LucideIcon } from 'lucide-react';
import { FileText, Paintbrush, Image as ImageIcon, Pencil, Film, HelpCircle } from 'lucide-react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface TopicSection {
  title: string;
  content: string;
  image?: string;
  imageHint?: string;
  video?: string;
}

export interface Topic {
  slug: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  sections: TopicSection[];
  quiz: QuizQuestion[];
}

export const topics: Topic[] = [
  {
    slug: 'que-es-un-procesador-de-texto',
    title: '¿Qué es un Procesador de Texto?',
    description: 'Descubre qué son estas herramientas mágicas y para qué sirven.',
    Icon: FileText,
    sections: [
      {
        title: 'Tu Hoja en Blanco Digital',
        content: 'Imagina que tienes una hoja de papel que nunca se acaba y una pluma mágica que puede borrar y reescribir sin dejar mancha. ¡Eso es un procesador de texto! Es un programa en tu computadora, tablet o teléfono que te deja escribir cartas, cuentos, tareas y todo lo que imagines.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'child writing',
      },
      {
        title: '¿Qué puedes hacer?',
        content: 'Con un procesador de texto puedes: Escribir texto, cambiar su color y tamaño, agregar fotos y dibujos, revisar la ortografía para no tener errores, ¡y mucho más! Es como tener superpoderes para tus palabras.',
      },
    ],
    quiz: [
      {
        question: '¿Qué es un procesador de texto?',
        options: ['Un juego de carreras', 'Un programa para dibujar', 'Una hoja de papel digital para escribir', 'Un video'],
        correctAnswer: 'Una hoja de papel digital para escribir',
        explanation: '¡Correcto! Es como una hoja de papel mágica en tu computadora donde puedes escribir y editar tus ideas.',
      },
      {
        question: '¿Qué cosa NO puedes hacer usualmente con un procesador de texto?',
        options: ['Escribir un cuento', 'Cocinar una pizza', 'Cambiar el color del texto', 'Agregar una foto'],
        correctAnswer: 'Cocinar una pizza',
        explanation: '¡Exacto! Un procesador de texto es para trabajar con palabras e imágenes, no para cocinar comida de verdad.',
      },
    ],
  },
  {
    slug: 'dar-formato-al-texto',
    title: 'Dando Estilo al Texto',
    description: 'Aprende a hacer que tus textos se vean geniales y llamativos.',
    Icon: Paintbrush,
    sections: [
      {
        title: '¡Ponle Color a tus Palabras!',
        content: '¿Aburrido del texto negro? ¡Puedes cambiar el color de tus letras! Usa rojo para algo importante, azul para algo tranquilo o ¡tu color favorito para todo! También puedes hacer las letras más grandes para los títulos y más pequeñas para el resto del texto.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'crayons rainbow',
      },
      {
        title: 'Negrita, Cursiva y Subrayado',
        content: 'Hay tres botones mágicos: la **Negrita** hace las letras más gruesas para que resalten. la *Cursiva* las inclina un poco, como si estuvieran corriendo. Y el _Subrayado_ pone una línea debajo, ¡perfecto para señalar algo!',
      },
      {
        title: 'Un Video Divertido',
        content: 'Mira este video para ver cómo cambiar el estilo de tu texto. ¡Es muy fácil!',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
      },
    ],
    quiz: [
      {
        question: '¿Para qué sirve la "Negrita"?',
        options: ['Para hacer las letras más delgadas', 'Para hacer las letras más gruesas y que resalten', 'Para borrar el texto', 'Para inclinar las letras'],
        correctAnswer: 'Para hacer las letras más gruesas y que resalten',
        explanation: '¡Muy bien! La negrita hace que el texto destaque, como un título o una palabra importante.',
      },
      {
        question: 'Si quieres cambiar el tamaño de las letras, ¿qué herramienta usas?',
        options: ['El color de fuente', 'El tamaño de fuente', 'La goma de borrar', 'El botón de guardar'],
        correctAnswer: 'El tamaño de fuente',
        explanation: '¡Genial! El tamaño de fuente te permite hacer las letras más grandes o más pequeñas.',
      },
    ],
  },
  {
    slug: 'insertar-imagenes',
    title: 'Insertar Imágenes',
    description: '¡Una imagen vale más que mil palabras! Añade fotos a tus documentos.',
    Icon: ImageIcon,
    sections: [
      {
        title: 'Decora con Fotos',
        content: 'Tus cuentos y tareas pueden ser mucho más divertidos con imágenes. Puedes agregar fotos de tus vacaciones, dibujos que hayas hecho o imágenes de internet para que tu texto se vea increíble.',
        image: 'https://placehold.co/600x400.png',
        imageHint: 'photo album',
      },
      {
        title: '¿Dónde encontrar imágenes?',
        content: 'Puedes usar fotos que tengas guardadas en la computadora o buscar en la galería que a veces incluyen los procesadores de texto. ¡Siempre pide permiso a un adulto antes de usar fotos de internet!',
      },
    ],
    quiz: [
      {
        question: '¿Qué puedes insertar en tu documento para hacerlo más visual?',
        options: ['Solo texto', 'Sonidos de animales', 'Imágenes y fotos', 'Olores'],
        correctAnswer: 'Imágenes y fotos',
        explanation: '¡Correcto! Las imágenes ayudan a que tus historias y trabajos sean mucho más interesantes.',
      },
      {
        question: '¿Es importante pedir permiso a un adulto antes de usar fotos de internet?',
        options: ['No, puedo usar cualquiera', 'Sí, siempre debo preguntar', 'Solo si la foto es fea', 'No, si es para una tarea'],
        correctAnswer: 'Sí, siempre debo preguntar',
        explanation: '¡Exacto! Es muy importante para tu seguridad y para respetar el trabajo de los demás.',
      },
    ],
  },
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}
