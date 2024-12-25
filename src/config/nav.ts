export interface NavItem {
  title: string;
  href: string;
  description?: string;
  items?: NavItem[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    title: "Test",
    href: "/test",
    items: [
      {
        title: "Test 1",
        href: "/test/test1",
        description: "Test 1",
      },
      {
        title: "Test 2",
        href: "/test/test2",
        description: "Test 2",
      },
      {
        title: "Test 3",
        href: "/test/test3",
        description: "Test 3",
      },
    ],
  },
  {
    title: "Gruppi",
    href: "/group",
    items: [
      {
        title: "Esplora Gruppi",
        href: "/group",
        description: "Esplora i gruppi disponibili",
      },
    ],
  },
  {
    title: "Organizzazioni",
    href: "/organization",
    items: [
      {
        title: "Esplora Organizzazioni",
        href: "/organization",
        description: "Sfoglia le organizzazioni",
      },
    ],
  },
  {
    title: "Pacchetti",
    href: "/package",
    items: [
      {
        title: "Esplora Pacchetti",
        href: "/package",
        description: "Esplora i pacchetti disponibili",
      },
    ],
  },
  {
        title: "Tag",
    href: "/tag",
    items: [
      {
        title: "Esplora Tag",
        href: "/tag",
        description: "Esplora i tag disponibili",
      },
    ],
  },
  {
    title: "Risorse",
    href: "/resource",
    items: [
      {
        title: "Esplora Risorse",
        href: "/resource",
        description: "Esplora le risorse disponibili",
      },
    ],
  },
]; 