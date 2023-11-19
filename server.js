import express from 'express';
import { createServer } from 'http';
import { handler } from './build-node/handler.js';
import { log } from 'console';
import { existsSync, mkdirSync } from 'fs';
import sharp from 'sharp';
import path from 'path';

const port = 3000;
const app = express();
const server = createServer(app);

// Convert file URL to path
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

if (!existsSync("uploads")) {
    mkdirSync("uploads");
}

// Middleware pour redimensionner les images
app.use('/uploads/:path/:filename/:width?/:height?', (req, res, next) => {
    const { path: imagePath, filename, width= 600, height =600 } = req.params;
  
    const fullImagePath = path.join(__dirname, 'uploads', imagePath, filename);

    sharp(fullImagePath)
        .resize(parseInt(width), parseInt(height))
        .toBuffer((err, data, info) => {
            if (err) {
                return next(err);
            }

            res.type('webp').send(data);
        });
});

app.use('/uploads', express.static('uploads'));

app.use(handler);
server.listen(port, () => {
    log("listening on port", port);
});