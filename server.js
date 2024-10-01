import { createServer } from 'https';
import { parse } from 'url';
import next from 'next';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // 파일 URL을 경로로 변환하기 위한 유틸리티
import dotenv from 'dotenv';

// .env 파일의 환경 변수를 로드
dotenv.config({ path: '.env.local' });

// ES 모듈에서는 __dirname이 없으므로 아래와 같이 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SSL 인증서와 키 파일 읽기
const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, process.env.SSL_KEY_PATH)),
  cert: fs.readFileSync(path.join(__dirname, process.env.SSL_CERT_PATH)),
};

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, 'localhost', (err) => {
    if (err) throw err;
    console.log('> Ready on https://localhost:3000');
  });
});
