import { DarkmodeButton } from "@/utilities/darkmode_button"
import { Logo } from "@/utilities/logo"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="flex flex-row w-full h-24 justify-around items-center border-b-2 border-gray-900">
      <Logo></Logo>
      <div className="flex flex-row gap-10">
        <Link className="hover:text-blue-800 font-semibold text-xl" href="/">Home</Link>
        <Link className="hover:text-blue-800 font-semibold text-xl" href="/users">Users</Link>
        <Link className="hover:text-blue-800 font-semibold text-xl" href="/about">About Us</Link>
      </div>
      <div>
        Navigation
      </div>

    </header>
  )
}