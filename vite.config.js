import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'pdf-download-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && (req.url === '/download-resume' || req.url.startsWith('/download-resume'))) {
            const filePath = path.resolve(__dirname, 'public/Yashvi_Shah_Resume.pdf');
            if (fs.existsSync(filePath)) {
              const stat = fs.statSync(filePath);
              res.writeHead(200, {
                'Content-Type': 'application/pdf',
                'Content-Length': stat.size,
                'Content-Disposition': 'attachment; filename="Yashvi_Shah_Resume.pdf"',
                'Cache-Control': 'no-cache',
              });
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          }
          next();
        });
      },
    },
  ],
})

