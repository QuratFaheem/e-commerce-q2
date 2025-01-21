

import Image from "next/image";
import { GetAllProducts } from "@/sanity/sanity.query";
import Link from "next/link";
import { GetMenShoes } from "@/sanity/sanity.query";


export default async function NewProductList() {
  const productsData = await GetAllProducts();
  const menproduct= await GetMenShoes();
  const Mproduct =menproduct || [];
  const products = productsData || [];
  console.log('Fetched products:', products);

  interface ProductLog {
    _id: string;
    productName: string;
    description: string;
    price: number;
    category: string;
    inventory: number;
    productUrl: string;
    imageUrl?: string;
  }

  return (
    <div className="mb-5">
      {/* Best of Air Max Section */}
      <b>Best of Air Max</b>

 {/* Product List */}
 <main className="flex-1 bg-gray-100 p-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {Mproduct.length > 0 ? (
      Mproduct.slice(0, 3).map((menproduct: ProductLog) => (
        <div key={menproduct._id} className="bg-white shadow-md rounded-lg p-4">
          <Link href={`/${menproduct.productUrl}`}>
            {menproduct.imageUrl ? (
              <Image
                src={menproduct.imageUrl}
                alt={menproduct.productName}
                width={400}
                height={400}
                className="rounded"
              />
            ) : (
              <div className="bg-gray-200 w-full h-96 flex items-center justify-center rounded">
                <p>No Image Available</p>
              </div>
            )}
          </Link>

          <div className="flex justify-between">
            <h2 className="text-black font-bold">{menproduct.productName}</h2>
            <h2 className="text-black font-bold">MPR: {menproduct.price}</h2>
          </div>
        </div>
      ))
    ) : (
      <p>No products found.</p>
    )}
  </div>
</main>



      {/* Featured Section */}
      <div className="mt-6">
        <b>Featured</b>
        <div className="relative w-full h-auto">
          <Image
            className="z-0"
            src="/man.png"
            alt="Landing Background"
            objectFit="cover"
            layout="responsive"
            width={1344}
            height={700}
          />
        </div>
      </div>

      {/* Gear Up Section */}
      <b>Gear Up</b>
      <main className="flex-1 bg-gray-100 p-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {products.length > 0 ? (
      products.slice(0, 4).map((product: ProductLog) => (
        <div key={product._id} className="bg-white shadow-md rounded-lg p-4">
          <Link href={`/${product.productUrl}`}>
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={400}
                height={400}
                className="rounded"
              />
            ) : (
              <div className="bg-gray-200 w-full h-96 flex items-center justify-center rounded">
                <p>No Image Available</p>
              </div>
            )}
          </Link>

          <div className="flex justify-between">
            <h2 className="text-black font-bold">{product.productName}</h2>
            <h2 className="text-black font-bold">MPR: {product.price}</h2>
          </div>
        </div>
      ))
    ) : (
      <p>No products found.</p>
    )}
  </div>
</main>

      {/* Don't Miss Section */}
      <div className="mt-6 bg-gray-100">
        <b>Don&apos;t Miss</b>
        <div className="relative w-full h-auto">
          <Image
            className="z-0"
            src="/badman.png"
            alt="Landing Background"
            objectFit="cover"
            layout="responsive"
            width={1344}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}
