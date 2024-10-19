import { notFound } from 'next/navigation'
import fs from 'fs/promises'
import path from 'path'
const { serialize } = await import('next-mdx-remote/serialize');
import TutorialContent from '@/components/Tutorial'

export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), 'content/tutorials'))
  return files.map(file => ({
    slug: file.replace('.mdx', '')
  }))
}

export default async function TutorialPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  let source

  try {
    const rawContent = await fs.readFile(path.join(process.cwd(), 'content/tutorials', `${slug}.mdx`), 'utf8')
    source = await serialize(rawContent, {
      parseFrontmatter: true,
      mdxOptions: {
        development: process.env.NODE_ENV === 'development',
      },
    })
  } catch (error) {
    console.error('Error reading or processing MDX file:', error)
    notFound()
  }

  if (!source) {
    notFound()
  }

  return <TutorialContent source={source} slug={slug} />
}