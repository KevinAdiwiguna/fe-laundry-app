import Image from 'next/image'
import React from 'react'

// Components
import { WashingMachine2Icon } from '@/components/assets/icons/washing-machine-icon'
import { ServicesSteps } from '@/components/molecules/services-steps'

const AboutPage = () => {
  return (
    <div className='container mx-auto max-w-[80%]'>
      <Image src={'/aboutus.jpg'} alt='' width={3000} height={1000} className='mx-auto mb-12' />
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='space-y-4'>
          <h3 className='font-semibold text-xl'>Siapa kami</h3>
          <p>Kami lebih dari sekedar layanan laundry. Kami adalah tim profesional berdedikasi yang bersemangat memberikan perawatan yang luar biasa. Perjalanan kami dimulai dengan visi untuk memberikan pengalaman laundry yang memadukan kenyamanan, kualitas, dan keberlanjutan ekonomi. Dengan keahlian bertahun-tahun di industri laundry, kami telah berkembang menjadi nama yang terpercaya. Kami bangga atas komitmen kami terhadap kepuasan pelanggan dan praktik sadar lingkungan. Kenali wajah-wajah di balik Zenfresh dan temukan layanan laundry yang peduli.</p>
        </div>
        <div className='space-y-4'>
          <h3 className='font-semibold text-xl'>Apa yang kami kerjakan</h3>
          <p>Misi inti kami sederhana: membuat hidup Anda lebih mudah dan pakaian Anda lebih segar. Kami menawarkan layanan komprehensif yang mencakup pencucian, pengeringan, pelipatan, dan bahkan perawatan khusus untuk kain halus. Opsi penjemputan dan pengantaran kami yang efisien dirancang agar sesuai dengan jadwal Anda, memberikan Anda kenyamanan yang layak Anda dapatkan. Selain kebersihan, kami memprioritaskan umur panjang pakaian Anda dan kesejahteraan bumi kita. Melalui praktik ramah lingkungan dan keahlian laundry terbaik, kami bertujuan untuk mendefinisikan kembali pengalaman laundry Anda.</p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 py-12'>
        <div>
          <Image src={'/aboutus2.jpg'} alt='Gambar Tentang Kami' width={750} height={1000} />
        </div>
        <div className='max-w-md'>
          <h3 className='font-semibold text-2xl mb-6'>Bersantai dalam Kenyamanan Murni</h3>
          <div className='space-y-4'>
            <ServicesSteps variant="vertical" title="125" description="Mesin Cuci" icon={<WashingMachine2Icon fontSize={25} />} />
            <ServicesSteps variant="vertical" title="5" description="Cabang" icon={<WashingMachine2Icon fontSize={25} />} />
            <ServicesSteps variant="vertical" title="35" description="Karyawan" icon={<WashingMachine2Icon fontSize={25} />} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage 