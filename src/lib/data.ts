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
        image: '/assets/orden.gif',
        imageHint: 'Orden siendo dada a un robot.'
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
        title: 'La Regla de Oro - ¡Seleccionar!',
        content: 'Antes que nada, recuerda: para cambiar cualquier parte de tu texto, primero debes seleccionarla. Simplemente deja el clic presionado y arrastra el mouse sobre las palabras que quieres transformar. ¡La computadora necesita saber a qué texto quieres aplicarle un comando!',
        image: '/assets/seleccion.gif',
        imageHint: 'Animación GIF mostrando cómo se selecciona un texto con el cursor del mouse en un documento.'
      },
      {
        title: 'Cambiale el tamaño',
        content: 'Con tu texto ya seleccionado, busca los botones. ¡Son universales y se ven muy parecidos en LibreOffice y Google Docs! Para el tamaño, busca el número (usualmente empieza en 12) y elige uno más grande.',
        image: '/assets/tamano.png',
        imageHint: 'Comparación lado a lado de las barras de herramientas de LibreOffice y Google Docs, destacando el boton de tamaño.'
      },
      {
        title: 'Colorealo',
        content: '¡Hora de pintar! Con el texto seleccionado, busca el botón con una letra "A" y una barra de color debajo. Al hacer clic, se abrirá una paleta mágica. ¡Elige el color que más te guste!',
        image: '/assets/color.png',
        imageHint: 'Comparación lado a lado de las barras de herramientas de LibreOffice y Google Docs, destacando el boton de color.'
      },
      {
        title: 'Dale estilo',
        content: '¿Quieres que tu texto se vea fuerte, inclinado o con una línea debajo? ¡Busca los botones especiales N, K y S! La "N" es para Negrita, la "K" para Cursiva y la "S" para Subrayado. Si usas Google Docs, la "B" es para Negrita, la "I" para Cursiva y la "U" para Subrayado.¡Puedes combinarlos para un look único!',
        image: '/assets/estilo.png',
        imageHint: 'Comparación lado a lado de las barras de herramientas de LibreOffice y Google Docs, destacando los botones de negrita, cursiva y subrayado.'
      },
      {
        title: 'Alinealo',
        content: '¿Dónde quieres que empiece tu texto? ¿A la izquierda, en el centro o a la derecha? ¡Los botones de alineación son tus amigos! Son unas barritas apiladas que te muestran cómo quedará el texto. ¡Elige la que mejor se vea para tu título o tu historia!',
        image: '/assets/alineacion.png',
        imageHint: 'Comparación lado a lado de las barras de herramientas de LibreOffice y Google Docs, destacando los botones de alineación izquierda, centrada y derecha.'
      },
      {
        title: 'Truco Extra: El Corrector Ortográfico',
        content: '¿Ves una línea roja ondulada debajo de una palabra? ¡Es una alerta secreta! La computadora te está avisando de un posible error. Haz clic derecho sobre la palabra y el programa te dará la sugerencia correcta. ¡Es como tener un diccionario mágico!',
        image: '/assets/corrector.png',
        imageHint: 'Imagen mostrando cómo el corrector ortográfico subraya una palabra mal escrita y ofrece la corrección al hacer clic derecho.'
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
        image: '/assets/insertar.gif',
        imageHint: 'Animación GIF que muestra el cursor yendo a "Insertar", luego a "Forma" y seleccionando una estrella para ponerla en el documento.',
      }
    ],
    quiz: [
      {
        question: '¿En qué menú principal encuentras la opción para añadir Formas e Imágenes?',
        options: ['Archivo', 'Editar', 'Ver', 'Insertar'],
        correctAnswer: 'Insertar',
        explanation: '¡Muy bien! El menú "Insertar" es el centro de comando para agregar casi cualquier cosa a tu documento, como formas, imágenes, y más.',
      },
      {
        question: '¿Qué puedes usar para decorar tus textos?',
        options: ['Solo texto negro', 'Al menos una forma como una estrella o un rayo', 'Solo letras mayúsculas', 'No se puede decorar'],
        correctAnswer: 'Al menos una forma como una estrella o un rayo',
        explanation: '¡Correcto! En tu misión se pide que insertes al menos una forma para decorar tus textos y hacerlos unicos.',
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
        content: 'Google Docs en tu teléfono es una aplicación que puedes descargar. Una vez instalada, tendrás un ícono en la pantalla de tu teléfono para empezar a crear cuando quieras, ¡ideal para cuando estás fuera de casa! Para la instalación, puedes pedir ayuda a tus papás o un adulto.',
        video: 'https://www.youtube.com/embed/Cy_c422B9ts?si=KnLvQPlPFY2OebCu',
      },
      {
        title: 'Manual de Acceso a LibreOffice Writer',
        content: 'Una vez que tus papás lo hayan instalado, solo debes buscar el ícono del programa en tu computadora y hacer doble clic (Es el icono documento azul). Para empezar a escribir, ve al menú de arriba, a "Archivo", luego a "Nuevo" y elige "Documento de texto". ¡Y listo! Tendrás tu lienzo en blanco para empezar a crear.',
        image: '/assets/documento_nuevo.gif',
        imageHint: 'Imagen del logo de Google Docs.'
      },
      {
        title: 'Herramienta 2: Google Docs (La Herramienta en la Nube)',
        content: 'Aunque Google Docs vive en internet (la nube), ¡también puedes tenerlo como una aplicación en tu teléfono! Así tienes acceso a tus documentos desde cualquier lugar. Funciona de forma muy parecida a la versión de computadora, ¡pero adaptada a la pantalla de tu teléfono! Siempre guarda tus cambios automáticamente. Se puede instalar desde la Play Store',
        image: '/assets/instalar_docs.png',
      },
      {
        title: 'Manual de Acceso a Google Docs',
        content: 'Para crear un documento nuevo, solo tienen que hacer clic en el botón de colores con el signo "+" que dice "En blanco". ¡Misma misión, diferente botón de inicio!',
        image: '/assets/documento_nuevo_docs.png',
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
