const productInfo = {
  id: 1,
  name: 'Mouse x200',
  category: 'Gaming Series',
  description: 'Mouse compacto inalámbrico de alto rendimiento',
  price: '125000',
  colors: [
    { id: 1, color: 'black', name: 'Negro' },
    { id: 2, color: 'gray', name: 'Gris' },
    { id: 3, color: 'blue', name: 'Azul' },
  ],
  images: [
    'https://s3.pagegear.co/4/articulos/61389/43541_700x933.jpg',
    'https://http2.mlstatic.com/D_Q_NP_660119-MLA45377366023_032021-F.webp',
    'https://http2.mlstatic.com/D_NQ_NP_796028-MLA31025050853_062019-O.webp',
  ],
  specifications: 'Dimensiones Altura: 100,5 mm Ancho: 65 mm Profundidad: 34,4 mm Peso: 99 g',
  inTheBox: 'Mouse Cable de carga USB-C (USB-A a USB-C) Documentación del usuario',
};

export default function fetchProduct() {
  return new Promise((resolve) => { setTimeout(() => resolve({ data: productInfo }), 500); });
}
