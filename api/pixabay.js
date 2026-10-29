// Vercel 서버리스 함수: 환경변수 PIXABAY_KEY 를 서버에서만 사용합니다.
export default async function handler(req, res) {
  const key = process.env.PIXABAY_KEY;
  if (!key) return res.status(500).json({ error: 'PIXABAY_KEY 환경변수가 설정되지 않았습니다.' });

  const q = String(req.query.q || '').trim();
  const page = Math.max(1, parseInt(req.query.page, 10) || 1);
  if (!q) return res.status(400).json({ error: '검색어를 입력하세요.' });

  const url = `https://pixabay.com/api/?key=${encodeURIComponent(key)}&q=${encodeURIComponent(q)}&lang=ko&image_type=photo&per_page=10&page=${page}`;
  try {
    const r = await fetch(url);
    if (!r.ok) return res.status(r.status).json({ error: `Pixabay 오류 ${r.status}` });
    const data = await r.json();
    res.status(200).json({ totalHits: data.totalHits, hits: data.hits });
  } catch (e) {
    res.status(502).json({ error: 'Pixabay 요청에 실패했습니다.' });
  }
}
