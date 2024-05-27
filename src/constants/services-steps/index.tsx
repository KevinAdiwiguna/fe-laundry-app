import React from "react";

// Icons
import { BottleIcon } from "@/components/assets/icons/bottle-icon";
import { HandShakeIcon } from "@/components/assets/icons/hand-shake-icon";
import { StopwatchIcon } from "@/components/assets/icons/stopwatch-icon";
import { TruckIcon } from "@/components/assets/icons/truck-icon";
import { LeafIcon } from "@/components/assets/icons/leaf";

export const SERVICES_STEP_HORIZONTAL = [
  {
    icon: <StopwatchIcon fontSize={60} color="#6c35de" />,
    title: "Pilih Waktu untuk Pemesanan",
    description: "Pilih waktu pengiriman yang sesuai dengan jadwal Anda."
  },
  {
    icon: <BottleIcon fontSize={60} color="#6c35de" />,
    title: "Kami Mencuci dan Mengeringkan Cucian Kotor",
    description: "Tim kami menangani pencucian dan pengeringan pakaian kotor Anda dengan presisi."
  },
  {
    icon: <TruckIcon fontSize={60} color="#6c35de" />,
    title: "Kami Mengembalikan Cucian Bersih Anda",
    description: "Kami akan segera mengembalikan cucian Anda dalam keadaan segar, bersih, dan siap pakai."
  },
  {
    icon: <HandShakeIcon fontSize={60} color="#6c35de" />,
    title: "Bersantai dan Nikmati Pakaian Bersih Anda",
    description: "Duduk, bersantai, dan nikmati kemewahan pakaian bersih dan rapi tanpa repot."
  },
]
export const SERVICES_STEP_VERTICAL = [
  {
    icon: <HandShakeIcon fontSize={60} color="#6c35de" />,
    title: "Tim laundry yang expert",
    description: "Tim laundry kami memiliki pengalaman bertahun-tahun dalam memberikan layanan laundry terbaik. Dari penghilangan noda hingga perawatan kain, kami unggul dalam setiap aspek pembersihan pakaian. Percayakan kepada kami untuk menghidupkan kembali pakaian Anda dan menjaganya tetap dalam kondisi murni."
  },
  {
    icon: <TruckIcon fontSize={60} color="#6c35de" />,
    title: "Kenyamanan sampai ujung jari Anda",
    description: "Kami memahami gaya hidup Anda yang sibuk, itulah sebabnya kami menawarkan opsi penjadwalan dan pengiriman tanpa kerumitan. Dengan ZeFfresh, Anda dapat menikmati kenyamanan pakaian yang bersih dan segar tanpa mengganggu rutinitas harian Anda."
  },
  {
    icon: <LeafIcon fontSize={60} color="#6c35de" />,
    title: "Komitmen dalam Ekosistem",
    description: "Di ZenFresh, kami peduli terhadap lingkungan. Laundry kami ramah lingkungan, menggunakan mesin yang efisien dan deterjen yang dapat terurai secara hayati. Bergabunglah dengan kami dalam komitmen kami terhadap kehidupan berkelanjutan sambil menikmati pakaian yang bersih dan harum."
  },
]