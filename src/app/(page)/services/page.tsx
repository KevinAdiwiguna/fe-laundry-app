// Constants
import { SERVICES } from "@/constants/services"

// Components
import { ServicesCard } from "@/components/molecules/services-card"

const ServicesPage = () => {
  return (
    <section className="py-[15vh]">
      <h3 className="font-semibold text-2xl text-center mb-6">Services Kami</h3>
      <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 px-4">

        {SERVICES.map((res) => {
          return (
            <ServicesCard description={res.description} image={res.image} title={res.title} url={res.url} key={res.title} button={false} />
          )
        })}
      </div>
    </section>
  )
}

export default ServicesPage