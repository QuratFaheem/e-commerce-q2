import Image from "next/image";

export default function Heropage() {
  return (
    <div className="mb-5">
      {/* Best of Air Max Section */}
      <b>Best of Air Max</b>
      <div className="flex flex-wrap justify-between p-4 w-full space-x-3">
        <div className="w-1/4 min-w-[150px] bg-gray-100 p-4 text-center">
          <Image src={'/sh1.png'} alt="Air Max 1" width={400} height={400} />
        </div>

        <div className="w-1/4 min-w-[150px] bg-gray-100 p-4 text-center">
          <Image src={'/shh2.png'} alt="Air Max 2" width={400} height={400} />
        </div>
        
        <div className="w-1/4 min-w-[150px] bg-gray-100 p-4 text-center">
          <Image src={'/sh2.png'} alt="Air Max 3" width={400} height={400} />
        </div>
      </div>

      {/* Featured Section */}
      <div className="mt-6">
        <b>Featured</b>
        <div className="relative w-full">
          {/* Fullscreen Background Image */}
          <Image
            className="z-0"
            src="/man.png"
            alt="Landing Background"
            objectFit="cover"
            width={1344}
            height={700}
          />
        </div>
      </div>

      {/* Gear Up Section */}
      <b>Gear Up</b>
      <div className="flex justify-between space-x-4 p-4 w-full">
        <div className="w-1/4 bg-gray-100 p-4 text-left">
          <Image src={'/m1.png'} alt="Gear 1" width={250} height={400} />
          <p className="font-bold text-sm mt-2">Nike Dri-FIT ADV TechKnit Ultra $3 895</p>
          <p className="text-gray-600">Men&apos;s Short-Sleeve</p>
          <p className="text-gray-600">Running Top</p>
        </div>
        
        <div className="w-1/4 bg-gray-100 p-4 text-left">
          <Image src={'/m2.png'} alt="Gear 2" width={250} height={400} />
          <p className="font-bold text-sm mt-2">Nike Dri-FIT Challenger $3 895</p>
          <p className="text-gray-600">Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts</p>
        </div>
        
        <div className="w-1/4 bg-gray-100 p-4 text-left">
          <Image src={'/m3.png'} alt="Gear 3" width={250} height={400} />
          <p className="font-bold text-sm mt-2">Nike Dri-FIT ADV Run Division $3 895</p>
          <p className="text-gray-600">Women&apos;s Long-Sleeve</p>
          <p className="text-gray-600">Running Top</p>
        </div>
        
        <div className="w-1/4 bg-gray-100 p-4 text-left">
          <Image src={'/m4.png'} alt="Gear 4" width={250} height={400} />
          <p className="font-bold text-sm mt-2">Nike Fast $3 895</p>
          <p className="text-gray-600">Women&apos;s Mid-Rise 7/8 Running</p>
          <p className="text-gray-600">Leggings with Pockets</p>
        </div>
      </div>

      {/* Don't Miss Section */}
      <div className="mt-6 bg-gray-100">
        <b>Don&apos;t Miss</b>
        <div className="relative w-full">
          {/* Fullscreen Background Image */}
          <Image
            className="z-0"
            src="/badman.png"
            alt="Landing Background"
            objectFit="cover"
            width={1344}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}
