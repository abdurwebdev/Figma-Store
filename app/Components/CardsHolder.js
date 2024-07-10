"use client"
import React from 'react'
import Card from './Card'

const CardsHolder = () => {
  const data=[
  {
    path: '/Chunky',
    images: 'https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5610_c9877510-0a28-4bed-a3f9-94aa779e2e26_1000x.jpg?v=1719491313',
    hoverimage: 'https://imgur.com/JqkGTXv.jpg', // Updated URL
    taggHead: 'New!',
    tagRuppees: 'Rs 7,100',
    tagHead: 'Chunky Glyph Tee'
  },
  {
    path:'/Smile',
    images:'https://store.figma.com/cdn/shop/files/20240619_Figma_Store_4764_be63c001-0c88-468c-9a18-59aff3703031_600x.jpg?v=1719507934',
    hoverimage:'https://imgur.com/omthXEt.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 5,100',
    tagHead:'All Smiles Nalgene'
  },
  {
    path:'/Corner',
    images:'https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5087_1200x.jpg?v=1719341467',
    hoverimage:'https://imgur.com/MiHSjA9.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 7,100',
    tagHead:'Independent Corners Tee'
  },
  {
    path:'/Hello',
    images:'https://store.figma.com/cdn/shop/files/InkblotTee_1200x.png?v=1719342423',
    hoverimage:'https://imgur.com/W0fPd5I.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 7,100',
    tagHead:'Doodle Tee',
    imagecheck:true,
  },
  {
    path:'/Socks',
    images:'https://store.figma.com/cdn/shop/files/20240619_Figma_Store_4924_1000x.jpg?v=1719490511',
    hoverimage:'https://imgur.com/S6oadyK.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 3,400',
    tagHead:'Figma Doodle Socks',
    imagecheck:true,
  },
  {
    path:'/Hoodie',
    images:'https://store.figma.com/cdn/shop/files/Hero_-_Tote_1000x.png?v=1719492109',
    hoverimage:'https://imgur.com/S6oadyK.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 12,800',
    tagHead:'Wildflower Hoodie',
    imagecheck:true,
  },
  {
    path:'/Cap',
    images:'https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5493_9c899828-f71f-48ae-8781-d1b04f68ce5b_1000x.jpg?v=1719490488',
    hoverimage:'https://imgur.com/xTCuaum.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 7,100',
    tagHead:'Inkblot Tee',
    imagecheck:true,
  },
  {
    path:'/Local',
    images:'https://store.figma.com/cdn/shop/files/20240619_Figma_Store_4699_315ebfd9-ee39-4870-bbf5-4600a9eab645_1000x.jpg?v=1719492610',
    hoverimage:'https://imgur.com/W0fPd5I.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 5,700',
    tagHead:'Chunky Glyph Cap',
    imagecheck:true,
  },
  {
    path:'/Tee',
    images:'https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5760_1000x.jpg?v=1719489438',
    hoverimage:'https://imgur.com/E8JrOB9.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 11,400',
    tagHead:'Local Styles Crewneck',
    imagecheck:true,
  },
  {
    path:'/Longs',
    images:'https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5150_a861e3ae-5ec4-48a7-9f17-9ec34d2ba787_1000x.jpg?v=1719492761',
    hoverimage:'https://imgur.com/x1jbwLx.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 7,100',
    tagHead:'All Smiles Tee',
    imagecheck:true,
  },
  {
    path:'/Doodlehoodie',
    images:'https://store.figma.com/cdn/shop/files/20240619_Figma_Store_4957_ae56be5f-d5dc-40a8-908c-76d789422cca_1000x.jpg?v=1719493521',
    hoverimage:'https://imgur.com/HwyVzeg.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 8,500',
    tagHead:'Gestures Longsleeve',
    imagecheck:true,
  },
  {
    path:'/ChunkyGlyph',
    images:'https://store.figma.com/cdn/shop/products/figma-store_shape-up-tee_013_600x.png?v=1678114580',
    hoverimage:'https://imgur.com/ef88vli.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 12,800',
    tagHead:'Doodle Hoodie',
    imagecheck:true,
  },
  {
    path:'/Butterfly',
    images:'https://store.figma.com/cdn/shop/products/figma-store_framework-tee_01_600x.jpg?v=1670515454',
    hoverimage:'https://imgur.com/cKUIA9O.jpeg',
    taggHead:'New!',
    tagRuppees:'Rs 8,500',
    tagHead:'Chunky Glyph Longsleeve',
    imagecheck:true,
  },
  {
    path:'/Marker',
    images:'https://store.figma.com/cdn/shop/products/IMG_9207_600x.png?v=1651177999',
    hoverimage:'https://imgur.com/JqkGTXv.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 7,100',
    tagHead:'Butterfly Tote',
    imagecheck:true,
  },
  {
    path:'/Notebook',
    images:'https://store.figma.com/cdn/shop/products/Figma-Store-366_600x.jpg?v=1636598498',
    hoverimage:'https://imgur.com/O2unRTw.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 6,300',
    tagHead:'Make your Mark(er) Pack',
    imagecheck:true,
  },
  {
    path:'/Dad',
    images:'https://store.figma.com/cdn/shop/products/Figma-Store-2091_600x.jpg?v=1636598619',
    hoverimage:'https://imgur.com/W0fPd5I.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 2,900',
    tagHead:'Round Corners Graph Notebook',
    imagecheck:true,
  },
  {
    path:'/Crew',
    images:'https://store.figma.com/cdn/shop/products/Figma-Store-1096_600x.jpg?v=1636599836',
    hoverimage:'https://imgur.com/JqkGTXv.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 11,400',
    tagHead:'Tidy Up Crewneck',
    imagecheck:true,
  },
  {
    path:'/Shapes',
    images:'https://store.figma.com/cdn/shop/products/Figma-Store-1469_600x.jpg?v=1636598538',
    hoverimage:'https://imgur.com/O2unRTw.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 5,700',
    tagHead:'All Smiles Dad Hat',
    imagecheck:true,
  },
  {
    path:'/Keyboard',
    images:'https://store.figma.com/cdn/shop/products/Figma-Store-1224_600x.jpg?v=1636599461',
    hoverimage:'https://imgur.com/W0fPd5I.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 3,400',
    tagHead:'Garden Crew Socks',
    imagecheck:true,
  },
  {
    path:'/Tool',
    images:'https://store.figma.com/cdn/shop/products/Figma-Store-2953_600x.jpg?v=1636598421',
    hoverimage:'https://imgur.com/HwyVzeg.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 600',
    tagHead:'Shapes pin',
    imagecheck:true,
  },
  {
    path:'/Bud',
    images:'https://store.figma.com/cdn/shop/products/Figma-Store-3215_600x.jpg?v=1636598458',
    hoverimage:'https://imgur.com/ef88vli.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 45,000',
    tagHead:'Figma Creator Micro Keyboard',
    imagecheck:true,
  },
  {
    path:'/Meet',
    images:'https://store.figma.com/cdn/shop/products/Figma-Store-3600-Edit_600x.jpg?v=1636599551',
    hoverimage:'https://imgur.com/cKUIA9O.jpeg',
    taggHead:'New!',
    tagRuppees:'Rs 600',
    tagHead:'Toolkit pin',
    imagecheck:true,
  },
  {
    path:'/Power',
    images:'https://store.figma.com/cdn/shop/products/Figma-Store-3751-Edit_600x.jpg?v=1636599807',
    hoverimage:'https://imgur.com/JqkGTXv.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 600',
    tagHead:'Best bud pin',
    imagecheck:true,
  },
  {
    path:'/Tape',
    images:'https://store.figma.com/cdn/shop/products/Figma-Store-3814_600x.jpg?v=1636599369',
    hoverimage:'https://imgur.com/O2unRTw.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 600',
    tagHead:'Meet greet pin',
    imagecheck:true,
  },
  {
    path:'/Jacket',
    images:'https://store.figma.com/cdn/shop/products/Figma-Store-4050-Edit_600x.jpg?v=1636598157',
    hoverimage:'https://imgur.com/W0fPd5I.jpg',
    taggHead:'New!',
    tagRuppees:'Rs 7,100',
    tagHead:'Chunky Glyph Tee',
    imagecheck:true,
  },
];
  return (
    <div className='p-5 grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4   mb-40 gap-5 xl:gap-y-28  items-center justify-center'>
    {data.map((item, index) => (
      <div key={index} className="flex justify-center items-center">
        <Card data={item} />
      </div>
    ))}
  </div>
  
  )
}

export default CardsHolder