import Head from 'next/head'
import { useAmp } from 'next/amp'
import Layout from '../components/Layout'
import Product from '../components/Product'

export const config = {
  amp: true,
}

export default function IndexPage() {
  const isAmp = useAmp()

  const products = [
    {
        "id": "1",
        "name": "Touareg",
        "image": "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37",
        "cost": "60000",
        "description": "testing description 1233"
    },
    {
        "id": "2",
        "name": "DeVille",
        "image": "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37",
        "cost": "3000",
        "description": "testing description 312312"
    },
    {
        "id": "3",
        "name": "F250",
        "image": "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37",
        "cost": "2000",
        "description": "testing description 2142134"
    },
    {
        "id": "4",
        "name": "Corvette",
        "image": "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37",
        "cost": "4000",
        "description": "testing description 12421"
    },
    {
        "id": "5",
        "name": "MKX",
        "image": "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37",
        "cost": "3000",
        "description": "testing description 2141234"
    },
    {
        "id": "6",
        "name": "Accord",
        "image": "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37",
        "cost": "65000",
        "description": "testing description 21421341299"
    }
]
  return (
    <Layout>
      <Head>
        <title>Product</title>
      </Head>
      <h1>Product (AMP-first Page)</h1>
      <p className="caption">Product</p>
      <amp-img
        alt="Mountains"
        width="550"
        height="368"
        layout="responsive"
        src="https://amp.dev/static/inline-examples/images/mountains.webp"
      >
        <amp-img
          alt="Mountains"
          fallback=""
          width="550"
          height="368"
          layout="responsive"
          src="https://amp.dev/static/inline-examples/images/mountains.jpg"
        ></amp-img>
      </amp-img>
      <p>
        Cart <a href={isAmp ? '/cart?amp=1' : '/dog'}>hybrid AMP</a>,
        </p>
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
      {(
          products?.map(product => (
            <Product
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.cost}
              image={product.image}
              id={product.id}
            />
          ))
        )}
      </div>
      <style jsx>{`
        h1 {
          margin-bottom: 5px;
        }
        p {
          font-size: 18px;
          line-height: 30px;
          margin-top: 30px;
        }
        .caption {
          color: #ccc;
          margin-top: 0;
          font-size: 14px;
          text-align: center;
        }
      `}</style>
    </Layout>
  )
}
