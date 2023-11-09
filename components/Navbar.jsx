import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="flex-between max-container paddig-container relative z-30 p-5 bg-[#4D4D4D] ">
      <Link href="/">
        <h1 className="text-[#C5EE4F]">DAO WAKANDA</h1>
      </Link>
    </nav>
  )
}

export default Navbar