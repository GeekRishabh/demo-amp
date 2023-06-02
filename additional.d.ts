// Allow AMP elements to be a property on JSX.IntrinsicElements

// Only the intrinsic elements defined here will be accepted, and only with the attributes defined here
declare namespace JSX {
  interface Product {
    image: string
    name: string
    description: string | number
    price: string | number
    id: | number
  }

  interface AmpImg {
    alt?: string
    src?: string
    width?: string | number
    height?: string | number
    layout?: string
    fallback?: string
    children?: React.ReactNode
  }
  interface IntrinsicElements {
    'amp-img': AmpImg
  }
}
