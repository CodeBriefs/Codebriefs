import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DynamicTutorialContent = dynamic(() => import('./TutorialContent'), {
  loading: () => <p>Loading...</p>,
})

export default function Tutorial({ source, slug }: { source: any; slug: string }) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DynamicTutorialContent source={source} slug={slug} />
    </Suspense>
  )
}