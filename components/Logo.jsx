import Image from "next/image";

export default function Logo() {
  return (
    <div>
    <Image 
      src="/../public/images/ps5-logo.png"
      className="ps_logo"
      alt="ps logo"
      width={250}
      height={120}/>

    </div>
  )
}
