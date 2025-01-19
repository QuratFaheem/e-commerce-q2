
import Image from "next/image"
import { GetAllProducts } from "@/sanity/sanity.query";
import Link from "next/link";


export default async function NewProductList() {
  const productsData = await GetAllProducts();
  const products = productsData || [];
  console.log('Fetched products:', products);

  interface ProductLog {
    _id: string;
    productName: string;
    description?: string;
    price: number;
    category: string;
    inventory: number;
    productUrl: string;
    imageUrl?: string;
  }   
   return(
      <div className="justify-center w-full text-center mt-8 mb-10">
      <p className="justify-center font-extrabold text-4xl text-center">
        FLIGHT ESSENTIALS
      </p>
      <p>Your built-to-last, all week wears -- but with style only Jordan Brand can deliver</p>
      
      <p className="flex justify-center space-x-4">
        <button className="bg-black text-white py-2 px-10 rounded-full mt-6">
          Shop
        </button>
      </p>
    
      <div>
        <b className="text-left">The Essentials</b>
        <div className="flex justify-between space-x-2 p-4 w-full">
        <main className="flex-1 bg-gray-100 p-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {products.length > 0 ? (
      products.slice(0, 3).map((product: ProductLog) => (
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
        </div>
      </div>
    
     {/* Responsive ICONS & SHOES Section */}
<div className="w-full bg-white px-4 text-black pt-4 flex flex-wrap md:flex-row md:justify-between max-w-[1440px] mx-40 pl-8">
  
  {/* Icons */}
  <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 text-left">
    <h4 className="text-lg font-bold mb-2">ICONS</h4>
    <ul className="space-y-2 text-sm text-gray-600 text-left">
      <li>Air Force 1</li>
      <li>Huarache</li>
      <li>Air Max 90</li>
      <li>Air Max 50</li>
    </ul>
  </div>

  {/* Icons List 2 */}
  <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 text-left">
    <h4 className="text-lg font-bold mb-2">SHOES</h4>
    <ul className="space-y-2 text-sm text-gray-600 text-left">
      <li>Air Force 1</li>
      <li>Huarache</li>
      <li>Air Max 90</li>
      <li>Air Max 50</li>
    </ul>
  </div>

  {/* Clothing */}
  <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 text-left">
    <h4 className="text-lg font-bold mb-2">CLOTHING</h4>
    <ul className="space-y-2 text-sm text-gray-600 text-left">
      <li>Air Force 1</li>
      <li>Huarache</li>
      <li>Air Max 90</li>
      <li>Air Max 50</li>
    </ul>
  </div>

  {/* Kids */}
  <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 text-left">
    <h4 className="text-lg font-bold mb-2">KIDS</h4>
    <ul className="space-y-2 text-sm text-gray-600 text-left">
      <li>Air Force 1</li>
      <li>Huarache</li>
      <li>Air Max 90</li>
      <li>Air Max 50</li>
    </ul>
  </div>
  
</div>

    </div>
    
    )
}