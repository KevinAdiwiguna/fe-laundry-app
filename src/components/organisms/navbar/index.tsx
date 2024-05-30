import Link from "next/link";

// Icons
import { WashingMachineIcon } from "@/components/assets/icons/washing-machine";
import { Button } from "@/components/atoms/button";

export const Navbar = () => {
  return (
    <div className="py-5 fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between px-4 md:justify-around items-center ">
        <div>
          <WashingMachineIcon fontSize={30} />
        </div>
        <div className="space-x-8 hidden sm:flex">
          <Link href={'/'} >Home</Link>
          <Link href={'/about'} >About</Link>
          <Link href={'/services'} >Services</Link>
          <Link href={'/order'} >Order</Link>
        </div>
        <div>
          <Link href={'/auth/login'}>
            <Button variant="purple">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}