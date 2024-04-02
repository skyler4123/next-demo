import { Logo } from "@/utilities/logo"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="flex flex-row w-5/6 h-24 justify-between items-center">
      <div className="flex flex-row">
        <Logo></Logo>
        <div>
          <Link className="hover:text-blue-800 font-semibold text-xl" href="/">Blog</Link>

        </div>
        <div>
          <Link className="hover:text-blue-800 font-semibold text-xl" href="/">Store</Link>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <Link className="hover:text-blue-800 font-semibold text-xl" href="/">Blog</Link>
        <Link className="hover:text-blue-800 font-semibold text-xl" href="/">Blog</Link>
        <Link className="hover:text-blue-800 font-semibold text-xl" href="/">Blog</Link>
        <Link className="hover:text-blue-800 font-semibold text-xl" href="/">Blog</Link>
      </div>

    </footer>
  )
}