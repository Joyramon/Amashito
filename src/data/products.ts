export type ProductCategory = 'chicharron' | 'pasta' | 'tela';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  size: string;
  sizeDetail: string;
  image: string;
  badge?: string;
  spiceLevel?: 1 | 2 | 3;
}

export const PRODUCTS: Product[] = [
  {
    id: 'chicharron-jalapeno',
    name: 'Chicharrón de Chile Jalapeño',
    category: 'chicharron',
    description:
      'Crujiente chicharrón con el sabor intenso del jalapeño. Picor medio, sabor inolvidable. Perfecto para botanear solo o acompañar tus platillos favoritos.',
    price: 90,
    size: '55 g',
    sizeDetail: 'Bolsa de 55 gramos',
    image:
      'https://images.pexels.com/photos/15357925/pexels-photo-15357925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Picor Medio',
    spiceLevel: 2,
  },
  {
    id: 'chicharron-serrano',
    name: 'Chicharrón de Chile Serrano',
    category: 'chicharron',
    description:
      'El toque fresco y picante del serrano en cada bocado. Para los que disfranan un picor con personalidad y carácter.',
    price: 90,
    size: '55 g',
    sizeDetail: 'Bolsa de 55 gramos',
    image:
      'https://images.pexels.com/photos/1472866/pexels-photo-1472866.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Picor Fuerte',
    spiceLevel: 3,
  },
  {
    id: 'chicharron-habanero',
    name: 'Chicharrón de Chile Habanero',
    category: 'chicharron',
    description:
      'El chicharrón más intenso. Habanero naranja, picor ardiente y un sabor cítrico que te va a atrapar. Solo para valientes.',
    price: 90,
    size: '55 g',
    sizeDetail: 'Bolsa de 55 gramos',
    image:
      'https://images.pexels.com/photos/37538585/pexels-photo-37538585.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Picor Extremo',
    spiceLevel: 3,
  },
  {
    id: 'pasta-ajo',
    name: 'Pasta de Ajo Artesanal',
    category: 'pasta',
    description:
      'Ajo seleccionado y molido a mano, con aceite libre de grasas trans. Lista para untar, cocinar o marinar. Sabor intenso y aromático en cada cucharada.',
    price: 90,
    size: '220 g',
    sizeDetail: 'Frasco de 220 gramos',
    image:
      'https://images.pexels.com/photos/750948/pexels-photo-750948.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Hecho a mano',
  },
  {
    id: 'tela-10x10',
    name: 'Tela Encerada 10×10 cm',
    category: 'tela',
    description:
      'Tela encerada reutilizable para conservar alimentos. Ideal para cubrir frutas, verduras y snacks pequeños. Ecológica y duradera.',
    price: 90,
    size: '10×10 cm',
    sizeDetail: 'Tela de 10×10 centímetros',
    image:
      'https://images.pexels.com/photos/4805485/pexels-photo-4805485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Ecológico',
  },
  {
    id: 'tela-20x20',
    name: 'Tela Encerada 20×20 cm',
    category: 'tela',
    description:
      'Tamaño mediano para cubrir tazones, sándwiches y sobras de comida. Mantén tus alimentos frescos sin plástico.',
    price: 90,
    size: '20×20 cm',
    sizeDetail: 'Tela de 20×20 centímetros',
    image:
      'https://images.pexels.com/photos/4805485/pexels-photo-4805485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Ecológico',
  },
  {
    id: 'tela-40x30',
    name: 'Tela Encerada 40×30 cm',
    category: 'tela',
    description:
      'Tamaño grande para envolver pan, queso, o cubrir recipientes amplios. La alternativa sostenible al plástico de cocina.',
    price: 90,
    size: '40×30 cm',
    sizeDetail: 'Tela de 40×30 centímetros',
    image:
      'https://images.pexels.com/photos/4805485/pexels-photo-4805485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Ecológico',
  },
];

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  chicharron: 'Chicharrones de Chile',
  pasta: 'Pasta de Ajo',
  tela: 'Telas Enceradas',
};
