import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Linear Oak Workspace',
    brand: 'The Curator Co.',
    category: 'Office & Furniture',
    price: 1240,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYYKH1pcPD1klMcC14BaBvP7TqKDYonuir4e48seChElEo91wTtBr74-7SKdfsf_0Q4ardudbFBeWf7O20F1JtN5-T6K8N4jxmtB4QzqVEfl9vErxG_GPzYX5HAKIAmdHtZA2p1fbvyXik0yFtNo_ZZSdyY46GZadbaWLHqTCTA1NXSRetUQ59JvmlU5rBoV8oiBzIRpR8UHxzyInAuI23uQJ2lVe90inD-X2m22nS21fSKbXfCEAuaEYH69GycR-pBOdUEnJuqA',
    description: 'Luxury minimalist solid oak desk in a bright white room with soft natural window light.',
    isEditorPick: true,
    rating: 4.9,
    reviewsCount: 84,
    sku: 'OAK-WS-01',
    stock: 12,
    status: 'In Stock'
  },
  {
    id: '2',
    name: 'Mono Architectural Vessel',
    brand: 'Mono Design',
    category: 'Decor',
    price: 185,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPwwqIGWgOCFPXeKwRgMyogb8xjxCkYNULHg9UBmkaD6BWl8Dvwwopm0HcN7_CmByIpzONVKXpa1pH0MhDSyNS4Bbbnoenq4yybjwMBv4cOr-eUhHS2GVc3HP6Dvr3rTQUNKeeDSWaf2JVrGJV85OWrtDcMQtgO9Xk3fuffP_Z4PCOL3rhjJhrtJeISGSITjA0IfNoyWwZPFnfqFwDXxS3hc9BmGLMJAUj0-qkGKLmoh5OIfKf-0RVzdItm25tX5MyW1mwApuH2w',
    description: 'Matte black architectural ceramic vase on a stone plinth.',
    rating: 4.7,
    reviewsCount: 42,
    sku: 'VES-MN-02',
    stock: 8,
    status: 'In Stock'
  },
  {
    id: '3',
    name: 'Bouclé Lounge Chair',
    brand: 'Aesthetic Studio',
    category: 'Living',
    price: 890,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAov_tEUp8O_Yjvv3PN8-fTXz56UX1Yr8HG_VV176tzrtsGq8AQRFZUUmXLcCTyygKr3qjPNzm5DKvV9MrJWF_36Wt94m1nBG5wpjQyIsJg2YI476UEWnL87LwU1JvOw-G1qIVY396b_LxNtorQNHBDP5entz21OyRN_5I3hfVH4vYI7G_4djq2DCoNvsaKU_JfOFGiGHwFPpJP2812W1EnQjn7RXYS4ypukPoaMI7yL79o8NvZrHNnPItQw3Nfuv20XqXwtyNlTA',
    description: 'Minimalist sculptural lounge chair in cream boucle fabric.',
    rating: 4.8,
    reviewsCount: 156,
    sku: 'CHR-BC-03',
    stock: 5,
    status: 'Low Stock'
  },
  {
    id: '4',
    name: 'Vector Task Lamp',
    brand: 'The Curator Co.',
    category: 'Lighting',
    price: 320,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgXJQsIOX7PMGu9rtww-HGVNLMMVjd5urOMnZGg4xuz3UFBNnIC78LMH1nFJCJATUuCHMPNWWKTQWevgapPr_jY5taAxAyn0e3TPU02C3oGIIaw6v03Zv0mhHFsJZ8uuH6Gt0SExIXCzWIoJUvRlUM8jukz50YLYgAQkp68XmJiXIBFjMI3fTF8Wn-Z8Q83LrHhLlfJjNAjAWSTAJOQx4uS0MAxnY3414MIowHyj1mZWEVDohloECk1yyPpgfVzumgephT0Xq3JA',
    description: 'Brushed aluminum LED desk lamp with a sleek articulating arm.',
    rating: 4.6,
    reviewsCount: 28,
    sku: 'LMP-VC-04',
    stock: 21,
    status: 'In Stock'
  },
  {
    id: '5',
    name: 'Ether Wall Clock',
    brand: 'Mono Design',
    category: 'Timepieces',
    price: 215,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC51-0V4A5dwDB2MXt3ex9KX9xovtQkzln8X0zb20sxh2cYhZUna1OWnwbSYX7dbUYxInavOjkfwBUHAff4skhHnxnSStuoJkMvpw-f2ZF34_A8Re7uLLPXygl_RWtUuqz-je90F3XsVGIEEvnXLLwCuQ1ZvwcQ6trAdgsNPZ0QvJK75oaM9ywdhYudi3CHJy2NmW4ZYBqEuwhWX9YdWMLsE-qASDGmAmd0yDe4NzA170XFodIRA0po3tP0Gsw-DiGr7qPqpvbyug',
    description: 'Frameless glass and brass wall clock with slender needles.',
    isStaffChoice: true,
    rating: 4.9,
    reviewsCount: 64,
    sku: 'CLK-ET-05',
    stock: 15,
    status: 'In Stock'
  },
  {
    id: '6',
    name: 'Charcoal Desk Mat',
    brand: 'The Curator Co.',
    category: 'Tech',
    price: 75,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOQmFt7NukzfkcGSlgJ9Kv7EbeZylaPROcAf_ILlBd47C1XIiQHq3eYepnhKbKyeEUkA09KW5dCGqx8nTvNHj5o4iSqYflZpdKJIFUSxuxtl3HyFnx2IOqJDJ-m0nte81_vdrVCjVpaZBLz9ryk0XWx87iuAN8otu5ilKGTWPWoU2fvP-ZAohx9kQWapd8_sAWtczN65Tew60p2uMDR8kC1-4RPNc4yJJk0x0zHimo8zbzIh81WegCnz9WUClTz7nwl8QIJLCRUA',
    description: 'Premium vegan leather desk mat and tech organizer tray.',
    rating: 4.5,
    reviewsCount: 112,
    sku: 'MAT-CH-06',
    stock: 45,
    status: 'In Stock'
  },
  {
    id: '7',
    name: 'Sound Engineer Series X',
    brand: 'Artisan Audio Lab',
    category: 'Technology',
    price: 499,
    oldPrice: 599,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMzP71dXH_TECuLPnkG2f62zGyxg_lykcm7V-06eOO42Dp_41to6VDhvbUFrNhSS5FVfG8U-Vtb60SU-X1xMMgmZ9WLh9zrBriovcUJLdLuqnweBq740uv1EZHEbUP1MG09j3zGQLQw8XNVu7vikpl87fgAt1how0OhsbTSq6E16upj-qHxUEB1sJEIzJVQpoM9L0gDZhq1Xyrq_xfOsXKw45vJclGtQ4djuTsb2g7aasct95cfu54E6-D531bEQFKID8f3K8q_A',
    description: 'Precision-engineered for the modern audiophile. Featuring pure vacuum-tube emulation and military-grade noise cancellation.',
    isEditorPick: true,
    rating: 4.8,
    reviewsCount: 1240,
    sku: 'AUD-SE-X',
    stock: 10,
    status: 'In Stock'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Julian D.',
    initials: 'JD',
    date: 'Oct 12, 2024',
    rating: 5,
    title: 'Unparalleled Soundstage',
    content: "I've used dozens of high-end headphones, but these are in a league of their own. The spatial separation is incredible. It's like being in the room with the musicians.",
    isVerified: true
  },
  {
    id: 'r2',
    author: 'Sarah M.',
    initials: 'SM',
    date: 'Sep 28, 2024',
    rating: 5,
    title: 'Luxury comfort for long sessions',
    content: 'The leather quality is superb. I wear these for 8 hours a day in the studio and barely feel them. The noise cancellation is also surprisingly natural.',
    isVerified: true
  }
];

export const RELATED_FINDS = [
  { name: 'Woven Slate Throw', price: 125, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5PfoeErPxxO59Y1srkf87Xj6WCGN0CxTCLEpn-81Q7q3BtBV1-Gm0Mk4C5s3XrZDvohRlk2Kwc_HKAyZ52SF--t6KcFOvX6qWpD86TKf4BpMGSgeGDHdLkcMPr90cy0jxswc33XHUVZ5tkaPae_U2iBLsyzJAY9SH6nOpABIRBFETu5LxVC_mUyF00QzYwlqMYiSrfCQT85WfvXWCBM1ItEwH8zmGqdQJNDN9Id-cMHDFHNkXc8Bm0znIzSQ31xhy_oBGlxX_ew' },
  { name: 'Glass Brew Set', price: 85, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAybI-9h-GKZzyZGa_4lhe6UPekwEMS7VEiCy6yQ9NXr6XLc2E34RA0zugLnc3gZ9IfTyb1_thsqwSsZkI4qkcQBSX5C3A8qQxRvvQ1xTXbNrAb6AJP7AWUQ-lLyuMzC6ziMxPyjvZ1JE9bsPG3B-pylCgJCwRMQ-zZMmudX_ubKC1p6W2C0UQnl686vmTS7xBNjaJ9j6TMF1JnoX4J5yFnoc2iY8Mnh0fQ8gvdw3Pu4fZMTC3xstZb9yWVjgiu6GFb59YGtGriYQ' },
  { name: 'Concrete Planter', price: 65, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD76NnqTRZS0gF6vieBjac2nEbYIMt1dwHArceB34GRlT_4aHh4Ti2SL4fyu-CQxJjIUH8X-r10F-ouaudhZxpqnCY8RFHI6zbHxurJQ5S6a_2tHm3NvPdkdzMKUbep4_0XNgIjY81htRPrDw7TyFolADlP5wCkrPzG-JBoWgO951IRgejZHZ1mgwhG3gr99TABIXK9gU6N-hUvKeQ_2rNTd8ybA61h2h_jTXc9g-TuphK95bhWgdyGFtlKlosBiwPk-4-tH57r9g' },
  { name: 'Studio Bowl Set', price: 110, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzzJgP1vmGavBSsWYmXruBQT2C6OlkM3bVM0bNkZGHsuFt8EAvgeRWKnE1vn7OeDulw7QIZ1ISolrZVzRrY7Crq0iiCHB4R7wicqaHLfGL3R5uFrBhQ-ukRFl_hT6uQ55W_Q2YjlsP4QVnAY4ntZta_0jcfzXzISz0sxKKwyqKKUO3IKhkH_6If6fnsMZJoVcZz0OCpXbOc3OdifwZ8ngbV40Y_Hj_-remb_GVCuCFThvDZNqmA13ygCy4NATHGxDyZFsbVkNqYg' },
  { name: 'Linear Wall Clock', price: 140, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvBFUhEs5eUl7XvW1O9jrSBs66twYtcLKLSjw20DrhZUiBtQhsahRkwtX0aY6NC7Itfvb3NI0uwvuJen7eqvCnzi-wSc_n3E7yUKkhjgD_3FubMOx7PmL2Mzn_50vEiaCpbJE9QddqqigsziuTTP-8AVGzqDOTzuWwKDWGfR6EIECYMEX9xXxi-WLPSp4vr-KuvVuTwVRjs22ZzRajjm6Ye1tOcplMszKkAphpvqqF22f_zy7CG_qkWx_QaRIfG0tMnWfLV_D3sw' }
];
