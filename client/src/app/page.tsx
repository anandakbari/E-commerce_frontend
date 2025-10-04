import ProductList from "@/components/ProductList"
import Image from "next/image"

const Homepage = async ({searchParams}:{searchParams:Promise<{category:string}>}) => {

  const category =(await searchParams).category;
  return (
    <div className=''>
      <div className="relative aspect-[2/1] mb-12 overflow-hidden rounded-2xl shadow-lg">
  <Image
    src="/featured.png"
    alt="Featured"
    fill
    className="object-cover object-center"
    priority
  />
</div>

      <ProductList category={category} params="homepage"/>
    </div>
  )
}

export default Homepage