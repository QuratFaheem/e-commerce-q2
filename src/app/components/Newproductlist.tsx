import Image from "next/image";
export default function DashboardLayout() {
    return (
      <div className="flex">
        
        {/* Side Navigation Bar */}
        <aside className="w-64 bg-white text-black h-screen p-4">
          <h2 className="text-lg font-semibold mb-6">New (500)</h2>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-gray-300">Shoes</li>
            <li className="hover:text-gray-300">Sports Bras</li>
            <li className="hover:text-gray-300">Tops and T-Shirts</li>
            <li className="hover:text-gray-300">Hoodies and Sweatshirts</li>
            <li className="hover:text-gray-300">Jackets</li>
            <li className="hover:text-gray-300">Trousers and tights</li>
            <li className="hover:text-gray-300">Shorts</li>
            <li className="hover:text-gray-300">Tracksuits</li>
            <li className="hover:text-gray-300">Jumpsuits and Rompers</li>
            <li className="hover:text-gray-300">Shirts and Dresses</li>
            <li className="hover:text-gray-300">Socks</li>
            <li className="hover:text-gray-300">Accessories and Equipments</li>
            <hr className="border-2 border-gray-300 my-4" />
            </ul>
            <div>
            <h2 className="font-bold mt-2" >Gender</h2>
            <li className="flex items-center hover:text-gray-300">
  <input
    type="checkbox"
    id="accessories"
    className="mr-2 accent-gray-800"
  />
  <label htmlFor="accessories" className="cursor-pointer">
    Men
  </label>
</li>

<li className="flex items-center hover:text-gray-300">
  <input
    type="checkbox"
    id="accessories"
    className="mr-2 accent-gray-800"
  />
  <label htmlFor="accessories" className="cursor-pointer">
    Women
  </label>
</li>

<li className="flex items-center hover:text-gray-300">
  <input
    type="checkbox"
    id="accessories"
    className="mr-2 accent-gray-800"
  />
  <label htmlFor="accessories" className="cursor-pointer">
    Unisex
  </label>
</li>
            </div>


            <div>
            <hr className="border-2 border-gray-300 my-4" />

            <h2 className="font-bold mt-2" >Kids</h2>
            <li className="flex items-center hover:text-gray-300">
  <input
    type="checkbox"
    id="accessories"
    className="mr-2 accent-gray-800"
  />
  <label htmlFor="accessories" className="cursor-pointer">
    Boys
  </label>
</li>

<li className="flex items-center hover:text-gray-300">
  <input
    type="checkbox"
    id="accessories"
    className="mr-2 accent-gray-800"
  />
  <label htmlFor="accessories" className="cursor-pointer">
    Girls
  </label>
</li>


            </div>
            
            <div>
            <hr className="border-2 border-gray-300 my-4" />

            <h2 className="font-bold mt-2" >Shop By Price</h2>
            <li className="flex items-center hover:text-gray-300">
  <input
    type="checkbox"
    id="accessories"
    className="mr-2 accent-gray-800"
  />
  <label htmlFor="accessories" className="cursor-pointer">
    Under $ 2 500.00
  </label>
</li>

<li className="flex items-center hover:text-gray-300">
  <input
    type="checkbox"
    id="accessories"
    className="mr-2 accent-gray-800"
  />
  <label htmlFor="accessories" className="cursor-pointer">
    $ 2 501.00 - $
  </label>
</li>
            </div>
            
        </aside>
  
        {/* Product List */}
        <main className="flex-1 bg-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j1.png'} alt="Air Max 1" width={400} height={400}/>
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            
  
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j2.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
  
            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j3.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j4.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j5.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j6.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j7.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j8.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j9.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j10.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j1.png'} alt="Air Max 1" width={400} height={400}/>
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            
  
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j2.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
  
            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j3.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j4.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j5.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j6.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j7.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j8.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j9.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j10.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
  
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j1.png'} alt="Air Max 1" width={400} height={400}/>
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            
  
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j2.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
  
            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j3.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j4.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j5.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j6.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j7.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j8.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j9.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image src={'/j10.png'} alt="Air Max 1" width={400} height={400} />
            <h2 className="text-red-600">Just In</h2>
            <h1 className="text-black font-bold">Nike Air Force 1 Mid 07</h1>
            <h2 className="text-gray-600">Mens Shoes</h2>
            <h1 className="text-black font-bold">MPR : $ 10 795.00</h1>
            </div>
            
            
  
          </div>
          <div><hr className="border-2 border-gray-300 my-4 gap-6" />
          <h1 className="font-bold text-2xl space-y-2">Related Categories</h1></div>
          <button className="border-gray-500 border-2 text-black text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-all">
  Best Selling Product
</button>
  {/* Button 1 */}
  <button className="border-gray-500 border-2 text-gray-700 text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-all">
    Best Shoes
  </button>

  {/* Button 2 */}
  <button className="border-gray-500 border-2 text-gray-700 text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-all">
    New Basketball Shoes
  </button>

  {/* Button 3 */}
  <button className="border-gray-500 border-2 text-gray-700 text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-all">
    New Football Shoes
  </button>

  {/* Button 4 */}
  <button className="border-gray-500 border-2 text-gray-700 text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-all">
    New Mens Shoes
  </button>

  {/* Button 5 */}
  <button className="border-gray-500 border-2 text-gray-700 text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-all">
    New Jordan Shoes
  </button>

  {/* Button 6 */}
  <button className="border-gray-500 border-2 text-gray-700 text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-all">
    Best Womens Shoes
  </button>

  {/* Button 7 */}
  <button className="border-gray-500 border-2 text-gray-700 text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-all">
    Best Training Gym
  </button>

  {/* Button 8 */}
  <button className="border-gray-500 border-2 text-gray-700 text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-all">
    New Casual Sneakers
  </button>

  {/* Button 9 */}
  <button className="border-gray-500 border-2 text-gray-700 text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-all">
    Men & Women Sportswear
  </button>



        </main>
      </div>
    );
  }
  