import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  const data = await request.formData();
  const file: File | null = data.get('file') as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false, message: 'No file uploaded' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filename = `${Date.now()}_${file.name}`;
  const filepath = path.join(process.cwd(), 'public', 'uploads', filename);

  await writeFile(filepath, buffer);

  return new Promise((resolve) => {
    exec(`python3 -c "from PIL import Image; import pytesseract; print(pytesseract.image_to_string(Image.open('${filepath}')))"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        resolve(NextResponse.json({ success: false, message: 'OCR processing failed' }, { status: 500 }));
        return;
      }
      resolve(NextResponse.json({ success: true, text: stdout.trim() }));
    });
  });
}
