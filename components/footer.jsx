import { HeartIcon } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} M&apos;hamed Ait Hssaine. Tous droits réservés.
          </p>

          <p className="text-sm mt-2 md:mt-0">
            Conçu avec <HeartIcon className="inline-block h-4 w-4 text-red-500" /> en utilisant Next.js et Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
