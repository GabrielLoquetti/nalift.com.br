import Link from "next/link"
import Image from "next/image"
import { getDictionary } from "@/app/[lang]/dictionaries"

export default async function Header({ lang }: { lang: string }) {
  const dict = await getDictionary(lang as "pt-BR")

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center">
            <div className="w-40 h-12 relative">
              <Image
                src="/placeholder.svg?height=60&width=200&text=NALIFT"
                alt="NALIFT Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href={`/${lang}`} className="text-gray-700 hover:text-blue-700 font-medium">
              {dict.navigation.home}
            </Link>
            <Link href={`/${lang}/sobre`} className="text-gray-700 hover:text-blue-700 font-medium">
              {dict.navigation.about}
            </Link>
            <Link href={`/${lang}/produtos`} className="text-gray-700 hover:text-blue-700 font-medium">
              {dict.navigation.products}
            </Link>
            <Link href={`/${lang}/contato`} className="text-gray-700 hover:text-blue-700 font-medium">
              {dict.navigation.contact}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="hidden md:hidden bg-white w-full py-4 px-4 shadow-md">
        <nav className="flex flex-col space-y-4">
          <Link href={`/${lang}`} className="text-gray-700 hover:text-blue-700 font-medium py-2">
            {dict.navigation.home}
          </Link>
          <Link href={`/${lang}/sobre`} className="text-gray-700 hover:text-blue-700 font-medium py-2">
            {dict.navigation.about}
          </Link>
          <Link href={`/${lang}/produtos`} className="text-gray-700 hover:text-blue-700 font-medium py-2">
            {dict.navigation.products}
          </Link>
          <Link href={`/${lang}/contato`} className="text-gray-700 hover:text-blue-700 font-medium py-2">
            {dict.navigation.contact}
          </Link>
        </nav>
      </div>
    </header>
  )
}
