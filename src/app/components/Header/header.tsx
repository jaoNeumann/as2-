import Image from "next/image";
import "./header.css"
export function Header(){
  return(
      <div className="header">

      <h2>Front-end Developer</h2>
      <h1>Hi, I'm João! 👋</h1>
      <Image
        src="/me.jpeg"
        alt="hi, this is me"
        width={325}
        height={300}
        priority
      />
    </div>    
  )
}

export default Header;