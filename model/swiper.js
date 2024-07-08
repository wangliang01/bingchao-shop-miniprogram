import db from '../utils/db'
// const images = [
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner1.png',
//     text: '1',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner2.png',
//     text: '2',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner3.png',
//     text: '3',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner4.png',
//     text: '4',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner5.png',
//     text: '5',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png',
//     text: '6',
//   },
// ];

const images = [
  'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner1.png',
  'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner2.png',
  'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner3.png',
  'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner4.png',
  'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner5.png',
  'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png',
];

export async function genSwiperImageList() {
  const res = await db.collection('swiper').doc('RmZdQxPSPZ6Ypyv2').get()
  return res.data.images
  return images;
}