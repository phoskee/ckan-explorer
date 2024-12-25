import Link from "next/link"


import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { GithubIcon } from "lucide-react"


export function SiteHeader() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-12 items-center w-full">
          <MainNav />
          <MobileNav />
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <p>altro</p>
            </div>
            <nav className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
                <Link
                  href={"/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <ModeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
