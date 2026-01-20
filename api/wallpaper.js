import axios from 'axios';

// 替换成你的凯速图片直链（必须开直链）
const wallpapers = [
  "https://4650.kstore.space/2026/bz/1.jpg",
  "https://4650.kstore.space/2026/bz/2.jpg",
  "https://4650.kstore.space/2026/bz/3.jpg"
];

export default async function handler(req, res) {
  try {
    const randomUrl = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    const imgRes = await axios.get(randomUrl, { responseType: 'arraybuffer' });
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(Buffer.from(imgRes.data));
  } catch (err) {
    res.status(200).send('');
  }
}
