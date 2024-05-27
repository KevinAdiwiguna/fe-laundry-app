import Image from "next/image"


interface ServicesCard {
  image: string,
  title: string,
  description: string,
  url: string
}

export const ServicesCard = ({ description, image, title, url }: ServicesCard) => {
  return (
    <div className="relative flex flex-col rounded-xl shadow-xl bg-white overflow-hidden">
      <Image src={image} alt={title} width={200} height={600} className="w-full object-cover" />
      <div className="flex flex-col justify-between flex-grow px-4 my-4">
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
        <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300">
          Pelajari Lebih Lanjut
        </button>
      </div>
    </div>
  )
}