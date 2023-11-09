import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="w-[100%] h-[120px] px-[72px] bg-neutral-600 bg-opacity-30 backdrop-blur-[30px] justify-between items-center inline-flex">
    <Link className="flex" href="/">
      <h1  className="text-lime-300 text-[25px] font-bold font-['Space Grotesk'] leading-[52px]">
        DAO WAKANDA
      </h1>
      <ul className="hidden h-full gap-12 lg:flex px-20">
        <li className="text-white text-2xl font-bold font-['Space Grotesk'] leading-loose">Stake</li>
        <li className="text-neutral-400 text-2xl font-bold font-['Space Grotesk'] leading-loose">Vote</li>
        <li className="text-neutral-400 text-2xl font-bold font-['Space Grotesk'] leading-loose">Resources</li>
        <li className="text-neutral-400 text-2xl font-bold font-['Space Grotesk'] leading-loose">About</li>
    </ul>
      </Link>
    
    <div className="px-8 py-4 bg-zinc-800 rounded-[50px] border border-white justify-start items-center gap-2 flex">
        <Image src="/wallet.svg" className="w-6 h-6 relative" alt="wallet" width={50} height={10}/>
        <button className="text-white text-2xl font-bold font-['Space Grotesk'] leading-loose">Connect Wallet</button>
    </div>
</nav>
  )
}

export default Navbar