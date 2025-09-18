// Reference: https://github.com/mozilla/pdf.js/blob/master/examples/node/pdf2png/pdf2png.mjs

import fs from 'fs';
import { fileURLToPath } from 'node:url';
import path from 'path';

import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePreview() {
  const pdfPath = path.join(__dirname, './public/pdf/Yurii_Vasylchuk_CV.pdf');
  const outputPath = path.join(__dirname, './public/Yurii_Vasylchuk_CV.png');

  if (!fs.existsSync(pdfPath)) {
    console.error('PDF not found:', pdfPath);
    return;
  }

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = getDocument({ data });
  const pdf = await loadingTask.promise;

  const page = await pdf.getPage(1);

  const scale = 2.0;
  const viewport = page.getViewport({ scale });

  const { canvasFactory } = pdf;
  const canvasAndContext = canvasFactory.create(
    viewport.width,
    viewport.height,
  );
  const renderContext = {
    canvasContext: canvasAndContext.context,
    viewport,
  };

  const renderTask = page.render(renderContext);
  await renderTask.promise;
  const buffer = canvasAndContext.canvas.toBuffer('image/png');

  fs.writeFileSync(outputPath, buffer);

  console.log('CV preview generated:', outputPath);
}

generatePreview().catch(console.error);
