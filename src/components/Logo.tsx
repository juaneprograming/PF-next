import Link from "next/link";
import Image from "next/image";



const Logo = () => {
  return  <Link href='/'>
    <Image src='/' width={54} height={54} priority alt="" />
  </Link>
}

export default Logo