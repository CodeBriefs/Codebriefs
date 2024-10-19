import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    return NextResponse.json({ content: fileContent });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'Failed to read file' }, { status: 404 });
  }
}