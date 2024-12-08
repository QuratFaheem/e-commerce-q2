
import Image from "next/image"
export default function Flightbar(){
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
        <b>The Essentials</b>
        <div className="flex justify-between space-x-2 p-4 w-full">
          <div className="w-1/3 bg-gray-100 p-4 text-left">
            <Image src={'/c1.png'} alt="" width={400} height={500} />
          </div>
          <div className="w-1/3 bg-gray-100 p-4 text-left">
            <Image src={'/c2.png'} alt="" width={400} height={500} />
          </div>
          <div className="w-1/3 bg-gray-100 p-4 text-left">
            <Image src={'/c3.png'} alt="" width={400} height={500} />
          </div>
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