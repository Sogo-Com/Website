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
app.use('/images/:path?/:filename', (req, res, next) => {
    const {width=600, height=600} = req.query;
    const { path: imagePath, filename } = req.params;
 
    // Construire le chemin complet de l'image
    const basePath = imagePath ? path.join('build-node/client/images', imagePath) : 'build-node/client/images';
    const fullImagePath = path.join( basePath, filename);

    sharp(fullImagePath)
    .resize({
        width: width ? parseInt(width) : undefined,
        height: height ? parseInt(height) : undefined,
        fit: 'inside', // 'inside' ensures that the image is not upscaled
        withoutEnlargement: true, // Prevent enlargement of smaller images
        // background: { r: 255, g: 255, b: 255, alpha: 0 } // Set a white background if the image is smaller
    })
    .toBuffer((err, data, info) => {
        if (err) {
            return next(err);
        }

        res.type('webp').send(data);
    });
});


// Middleware pour redimensionner les images
app.use('/uploads/:path?/:filename', (req, res, next) => {
    const { width=600 , height=600} = req.query;
    const { path: imagePath, filename } = req.params;
   

    // Construire le chemin complet de l'image
    const basePath = imagePath ? path.join('uploads', imagePath) : 'uploads';
    const fullImagePath = path.join( basePath, filename);

    sharp(fullImagePath)
    .resize({
        width: width ? parseInt(width) : undefined,
        height: height ? parseInt(height) : undefined,
        fit: 'inside', // 'inside' ensures that the image is not upscaled
        withoutEnlargement: true, // Prevent enlargement of smaller images
        // background: { r: 255, g: 255, b: 255, alpha: 0 } // Set a white background if the image is smaller
    })
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