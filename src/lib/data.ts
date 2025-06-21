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
        title: 'Tu Hoja de Papel Mágica',
        content: 'Piensa en un procesador de texto como una hoja de papel en tu computadora donde puedes escribir, borrar y decorar tus textos cuando quieras y de la forma que quieras. ¡Es como tener una hoja que nunca se acaba y un lápiz mágico que borra sin dejar mancha!',
        image: '/assets/procesador.gif',
        imageHint: 'Procesador de texto',
      },
      {
        title: 'Dando Órdenes al Programa',
        content: 'El programa es como un robot muy obediente. Nosotros le damos una orden, ¡y él la cumple al instante! Estas órdenes, que llamamos "comandos", nos permiten cambiar la apariencia de nuestras palabras. Pero recuerda la regla de oro #1: antes de dar cualquier orden, ¡primero debes SELECCIONAR el texto! Seleccionar es como apuntar con el dedo y decirle al robot: "¡Quiero que le hagas algo a *estas* palabras!".',
        image: '/assets/seleccion.gif',
        imageHint: 'Animación GIF mostrando cómo se selecciona un texto con el cursor del mouse en un documento.'
      },
      {
        title: 'Los Comandos Básicos',
        content: 'Una vez que seleccionas, puedes darle órdenes como estas: Tamaño: Para hacer la letra más GRANDE o más pequeña. Color: ¡Es como tener una caja de colores infinita para pintar las palabras! Estilo: Para darle personalidad al texto, como la Negrita (letras gruesas), Cursiva (letras inclinadas) o Subrayado (línea debajo). Alineación: Decide si el texto va a la izquierda, en el centro o a la derecha.',
        image: '/assets/ordenes.gif',
        imageHint: 'Una paleta de herramientas de un procesador de texto mostrando los íconos de tamaño, color, negrita, cursiva, subrayado y alineación.'
      },
    ],
    quiz: [
      {
        question: '¿Cuál es la regla de oro #1 antes de aplicar cualquier "orden" o comando a un texto?',
        options: ['Gritarle a la computadora', 'Reiniciar el programa', 'Seleccionar el texto', 'Escribir más rápido'],
        correctAnswer: 'Seleccionar el texto',
        explanation: '¡Correcto! La computadora no puede adivinar a qué parte del texto quieres aplicarle un comando, por eso siempre debes seleccionarlo primero.',
      },
      {
        question: '¿Qué comando usarías para hacer que un título se vea más grueso y oscuro?',
        options: ['Cursiva', 'Subrayado', 'Negrita', 'Alineación'],
        correctAnswer: 'Negrita',
        explanation: '¡Exacto! La Negrita es como usar un marcador para que las palabras se vean más gruesas y resalten.',
      },
    ],
  },
  {
    slug: 'como-decorar-un-texto',
    title: 'Cómo Decorar un Texto',
    description: 'Aprende el paso a paso para usar los comandos y darle vida a tus ideas.',
    Icon: Paintbrush,
    sections: [
      {
        title: 'Paso 1: La Regla de Oro - ¡Seleccionar!',
        content: 'Antes que nada, recuerda: para cambiar cualquier parte de tu texto, primero debes seleccionarla. Simplemente deja el clic presionado y arrastra el mouse sobre las palabras que quieres transformar. ¡La computadora necesita saber a qué texto quieres aplicarle un comando!',
        image: 'https://i.imgur.com/dJmVf1A.gif',
        imageHint: 'Animación GIF mostrando cómo se selecciona un texto con el cursor del mouse en un documento.',
      },
      {
        title: 'Paso 2: Aplicando Comandos (Los Botones Mágicos)',
        content: 'Con tu texto ya seleccionado, busca estos botones. ¡Son universales y se ven muy parecidos en LibreOffice y Google Docs!\n\n* Tamaño: Busca el número (usualmente empieza en 12) y elige uno más grande.\n* Color: Busca el ícono de la letra "A" con una barra de color debajo.\n* Estilo: Los tres botones más famosos: la N para Negrita, la K o C para Cursiva, y la S para Subrayado.\n* Alineación: Busca los botones con las rayitas para mover tu texto a la izquierda, al CENTRO o a la derecha.',
        image: 'https://i.imgur.com/cQ3b3sD.png',
        imageHint: 'Comparación lado a lado de las barras de herramientas de LibreOffice y Google Docs, destacando los botones de formato.'
      },
      {
        title: 'Poder Extra: El Corrector Ortográfico',
        content: '¿Ves una línea roja ondulada debajo de una palabra? ¡Es una alerta secreta! La computadora te está avisando de un posible error. Haz clic derecho sobre la palabra y el programa te dará la sugerencia correcta. ¡Es como tener un diccionario mágico!',
        image: 'https://i.imgur.com/9v4o3rF.gif',
        imageHint: 'Animación GIF mostrando cómo el corrector ortográfico subraya una palabra mal escrita y ofrece la corrección al hacer clic derecho.'
      }
    ],
    quiz: [
      {
        question: 'El botón con una letra "A" y una barra de color debajo sirve para...',
        options: ['Cambiar el Tamaño', 'Poner Cursiva', 'Cambiar el Color', 'Alinear el texto'],
        correctAnswer: 'Cambiar el Color',
        explanation: '¡Correcto! Ese es el comando universal para el COLOR tanto en LibreOffice como en Google Docs.',
      },
      {
        question: '¿Qué significa la línea roja ondulada debajo de una palabra?',
        options: ['Que la palabra es muy importante', 'Que la computadora no le gusta esa palabra', 'Que hay un posible error de ortografía', 'Que debes ponerla en negrita'],
        correctAnswer: 'Que hay un posible error de ortografía',
        explanation: '¡Así es! Es una alerta secreta del corrector ortográfico para ayudarte a escribir sin errores.',
      },
    ],
  },
  {
    slug: 'insertar-formas-y-imagenes',
    title: 'Insertar Formas e Imágenes',
    description: '¡Una imagen vale más que mil palabras! Aprende a decorar tus documentos.',
    Icon: ImageIcon,
    sections: [
      {
        title: 'Añade Decoraciones Especiales',
        content: 'Tus documentos no tienen por qué ser solo texto. ¡Puedes decorarlos! Para añadir un toque especial, como una estrella ⭐, un rayo ⚡ o un corazón, puedes usar la herramienta de Formas.',
      },
      {
        title: 'Manual para Insertar Formas',
        content: 'Tanto en LibreOffice como en Google Docs, el proceso es muy similar. Ve al menú de arriba y busca la opción "Insertar". Dentro de ese menú, busca la opción "Forma". ¡Ahí encontrarás un montón de figuras para decorar tu trabajo!',
        image: 'https://i.imgur.com/7i2r1gN.gif',
        imageHint: 'Animación GIF que muestra el cursor yendo a "Insertar", luego a "Forma" y seleccionando una estrella para ponerla en el documento.',
      },
      {
        title: 'Manual para Insertar Imágenes',
        content: 'De la misma forma que con las formas, para añadir una foto desde tu computadora debes ir al menú "Insertar" y esta vez buscar la opción "Imagen". Se abrirá una ventana para que busques en tus carpetas la foto que quieres usar. ¡Recuerda que una imagen puede hacer tu historia mucho más divertida!',
        image: 'https://i.imgur.com/yO8v5Yg.gif',
        imageHint: 'Animación GIF que muestra el cursor yendo a "Insertar", luego a "Imagen", y seleccionando una foto de una carpeta.'
      },
    ],
    quiz: [
      {
        question: '¿En qué menú principal encuentras la opción para añadir Formas e Imágenes?',
        options: ['Archivo', 'Editar', 'Ver', 'Insertar'],
        correctAnswer: 'Insertar',
        explanation: '¡Muy bien! El menú "Insertar" es el centro de comando para agregar casi cualquier cosa a tu documento, como formas, imágenes, y más.',
      },
      {
        question: '¿Qué puedes usar para decorar un "Perfil de Súper-Creador"?',
        options: ['Solo texto negro', 'Al menos una forma como una estrella o un rayo', 'Solo letras mayúsculas', 'No se puede decorar'],
        correctAnswer: 'Al menos una forma como una estrella o un rayo',
        explanation: '¡Correcto! En tu misión se pide que insertes al menos una forma para decorar tu perfil y hacerlo único.',
      },
    ],
  },
  {
    slug: 'como-instalar-un-procesador-de-texto',
    title: 'Accediendo a las Herramientas',
    description: 'Aprende cómo tener los programas listos para crear: uno en tu computadora y otro en internet.',
    Icon: Pencil,
    sections: [
      {
        title: 'Herramienta 1: LibreOffice Writer (El Programa Instalado)',
        content: 'LibreOffice es una herramienta que se instala directamente en la computadora. Esto significa que, una vez instalado, tendrás un ícono en tu computadora para empezar a crear cuando quieras, ¡sin necesidad de internet! Para la instalación, es mejor que pidas ayuda a tus papás.',
        image: 'https://i.imgur.com/sVFyYjG.png',
        imageHint: 'Imagen del ícono de la aplicación de LibreOffice Writer.'
      },
      {
        title: 'Manual de Acceso a LibreOffice Writer',
        content: 'Una vez que tus papás lo hayan instalado, solo debes buscar el ícono del programa en tu computadora y hacer doble clic. Para empezar a escribir, ve al menú de arriba, a "Archivo", luego a "Nuevo" y elige "Documento de texto". ¡Y listo! Tendrás tu lienzo en blanco para empezar a crear.',
      },
      {
        title: 'Herramienta 2: Google Docs (La Herramienta en la Nube)',
        content: '¡Esta opción es diferente! Google Docs no se instala en tu computadora, ¡vive en internet! Esto es genial porque no ocupa espacio y guarda todo lo que haces automáticamente. ¡Nunca más te preocuparás por perder tu trabajo si se va la luz!',
        image: 'https://i.imgur.com/mO3hS1W.png',
        imageHint: 'Imagen del logo de Google Docs.'
      },
      {
        title: 'Manual de Acceso a Google Docs',
        content: 'Para usar Google Docs, necesitas la ayuda de tus papás para usar su cuenta de Google. Solo deben ir a la página docs.google.com. Una vez allí, para crear un documento nuevo, solo tienen que hacer clic en el botón de colores con el signo "+" que dice "En blanco". ¡Misma misión, diferente botón de inicio!',
        image: 'https://i.imgur.com/L1n8gJ8.gif',
        imageHint: 'Animación GIF mostrando cómo se abre un navegador, se va a docs.google.com y se hace clic en el botón "+" para crear un nuevo documento.'
      }
    ],
    quiz: [
      {
        question: '¿Cuál de estas herramientas se instala en la computadora?',
        options: ['Google Docs', 'WhatsApp', 'LibreOffice Writer', 'YouTube'],
        correctAnswer: 'LibreOffice Writer',
        explanation: '¡Muy bien! LibreOffice Writer es un programa que se instala para que puedas usarlo directamente desde tu computadora.',
      },
      {
        question: '¿Cuál es la gran ventaja de Google Docs sobre LibreOffice?',
        options: ['Necesita un disquete para guardar', 'Guarda todo automáticamente en internet', 'Solo funciona si se va la luz', 'No se puede usar para escribir'],
        correctAnswer: 'Guarda todo automáticamente en internet',
        explanation: '¡Genial! Google Docs es como un guardián invisible que guarda cada cambio que haces automáticamente. ¡No necesitas hacer clic en "Guardar"!',
      },
    ],
  },
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}
