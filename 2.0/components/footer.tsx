import Link from "next/link"
import { getDictionary } from "@/app/[lang]/dictionaries"

export default async function Footer({ lang }: { lang: string }) {
  const dict = await getDictionary(lang as "pt-BR")

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{dict.footer.company.title}</h3>
            <p className="mb-4">{dict.footer.company.description}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{dict.footer.quickLinks.title}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}`} className="hover:text-blue-400">
                  {dict.navigation.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/sobre`} className="hover:text-blue-400">
                  {dict.navigation.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/produtos`} className="hover:text-blue-400">
                  {dict.navigation.products}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contato`} className="hover:text-blue-400">
                  {dict.navigation.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">{dict.footer.products.title}</h3>
            <ul className="space-y-2">
              {dict.products.categories.items.map((category, index) => (
                <li key={index}>
                  <Link href={`/${lang}/produtos`} className="hover:text-blue-400">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{dict.footer.contact.title}</h3>
            <address className="not-italic">
              <p className="mb-2">{dict.contact.info.address.line1}</p>
              <p className="mb-2">{dict.contact.info.address.line2}</p>
              <p className="mb-2">
                <strong>{dict.contact.info.phone.title}:</strong> {dict.contact.info.phone.number}
              </p>
              <p className="mb-2">
                <strong>{dict.contact.info.email.title}:</strong> {dict.contact.info.email.address}
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} NALIFT. {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
