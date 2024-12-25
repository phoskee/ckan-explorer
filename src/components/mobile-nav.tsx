"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { mainNav } from "@/config/nav";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import Link from "next/link";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  const onOpenChange = React.useCallback((open: boolean) => {
    setOpen(open);
  }, []);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="!size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[60svh] p-0">
        <DrawerHeader className="hidden">
          <DrawerTitle>Menu di Navigazione</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-2">
            {mainNav.map((item) => (
              <div key={item.href} className="space-y-2">
                <MobileLink href={item.href} onOpenChange={setOpen}>
                  {item.title}
                </MobileLink>
                {item.items && (
                  <div className="ml-2 flex flex-col space-y-2">
                    {item.items.map((subItem) => (
                      <MobileLink
                        key={subItem.href}
                        href={subItem.href}
                        onOpenChange={setOpen}
                        className="text-muted-foreground"
                      >
                        {subItem.title}
                      </MobileLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface MobileLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn("text-base", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
