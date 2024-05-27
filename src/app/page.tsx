import Image from "next/image";

// Icons
import { LeftIcon } from "@/components/assets/icons/left-icon";
import { ShopBagIcon } from "@/components/assets/icons/shop-bag-icon";

// Components
import { Button } from "@/components/atoms/button";
import { ServicesCard } from "@/components/molecules/services-card";

// Constants
import { SERVICES } from '@/constants/services'
import { SERVICES_STEP_HORIZONTAL, SERVICES_STEP_VERTICAL } from '@/constants/services-steps'
import { ServicesSteps } from "@/components/molecules/services-steps";
import { FAQC } from "@/components/organisms/faq";

export default function Home() {
  return (
    <>
      <section style={{ background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('bg1.webp')" }} className="h-screen !bg-fixed flex justify-center items-center text-white !bg-no-repeat !bg-cover">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold">Bersantai dalam Kenyamanan Murni.</h1>
          <p className="text-base text-neutral-300">We Care for Your Clothes, So You Can Care for Your Life.</p>

          <div className="flex gap-4 justify-center flex-wrap md:flex-nowrap px-4">
            <Button variant="white" icon={<LeftIcon />}>
              Services kami
            </Button>

            <Button variant="purple" icon={<ShopBagIcon />}>
              Pesan sekarang
            </Button>
          </div>
        </div>
      </section>

      <section className="flex py-[10vh] justify-center items-center">
        <div className="lg:max-w-[85%]">
          <h2 className="font-bold text-2xl text-center px-6 mb-6">Laundry mudah dan cepat</h2>
          <div className="grid grid-cols-1 gap-y-4 px-6 sm:grid-cols-2 md:grid-cols-4 container mx-auto">
            {SERVICES_STEP_HORIZONTAL.map((res) => {
              return (
                <ServicesSteps variant="horizontal" title={res.title} description={res.description} icon={res.icon} key={res.title} />
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-[10vh]">
        <h3 className="font-semibold text-2xl text-center mb-6">Services Kami</h3>
        <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 px-4">

          {SERVICES.slice(0, 3).map((res) => {
            return (
              <ServicesCard description={res.description} image={res.image} title={res.title} url={res.url} key={res.title} />
            )
          })}
        </div>
      </section>

      <section className="py-[10vh] container mx-auto w-[85%]">
        <div className="flex flex-col md:flex-row gap-4">

          <div className="flex-1">
            <div className="sticky top-20 p-4 ">
              <h2 className="text-xl font-bold">Kenapa memilih ZenFresh?</h2>
              <p>Di ZenFresh, kami bangga menjadi layanan laundry pilihan Anda karena berbagai alasan. Laundry kami menghadirkan pengalaman yang berkesan, memastikan pakaian Anda menerima perawatan terbaik. Kami memahami pentingnya kenyamanan dalam hidup Anda, itulah sebabnya kami menawarkan pilihan penjadwalan dan pengiriman yang mudah.</p>
              <button className="mt-4 bg-purple-700 rounded-lg text-white py-2 px-4 flex items-center gap-x-2">
                <span>Pesan sekarang</span>
                <ShopBagIcon />
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            {SERVICES_STEP_VERTICAL.map((res) => {
              return (
                <ServicesSteps title={res.title} description={res.description} icon={res.icon} variant="vertical" key={res.title} />
              )
            })}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('bg1.webp')" }} className="!bg-fixed !bg-cover flex justify-center items-center text-white !bg-no-repeat h-fit py-[20vh]">
        <FAQC />
      </section>

    </>
  );
}
