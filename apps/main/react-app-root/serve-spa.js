#!/usr/bin/env node
/**
 * Simple SPA server for serving static files with fallback to index.html
 */
import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, 'dist');
const port = 5174;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = createServer(async (req, res) => {
  try {
    let filePath = join(distDir, req.url === '/' ? 'index.html' : req.url);
    
    // Try to read the requested file
    let content;
    try {
      content = await readFile(filePath);
    } catch {
      // If file not found, serve index.html (SPA fallback)
      filePath = join(distDir, 'index.html');
      content = await readFile(filePath);
    }

    // Set content type
    const ext = extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (error) {
    res.writeHead(500);
    res.end('Internal Server Error');
    console.error(error);
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`\n  ➜  Local:   http://localhost:${port}/`);
  console.log(`  ➜  Network: http://10.1.12.61:${port}/`);
  console.log(`\n  Press Ctrl+C to stop\n`);
});

