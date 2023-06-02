import Head from 'next/head'
import { useAmp } from 'next/amp'
import Byline from '../components/Byline'

export const config = {
  amp: 'hybrid',
}

export default function DogPage() {
  const isAmp = useAmp()

  return (
    <div>
      <Head>
        <title>The Cart</title>
      </Head>
      <h1>The Cart (Hybrid AMP Page)</h1>
      <Byline author="Rishabh" />
      <p>
        <a href={isAmp ? '/cart' : '/cart?amp=1'}>
          {isAmp ? 'View Non-AMP' : 'View AMP'} Version
        </a>
      </p>
      <p className="caption">Woooooooooooof</p>
      <p>
        Cart data to be shown hereaa{' '}
        <a href={isAmp ? '/?amp=1' : '/'}>checking AMP</a> test data herrea
        
      </p>
    </div>
  )
}
