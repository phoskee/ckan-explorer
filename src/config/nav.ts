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
    title: "Risorse",
    href: "/risorse",
    items: [
      {
        title: "Template",
        href: "/risorse/template",
        description: "Template pronti all'uso",
      },
      {
        title: "Esempi",
        href: "/risorse/esempi",
        description: "Esempi di implementazione",
      },
      {
        title: "Best Practices",
        href: "/risorse/best-practices",
        description: "Linee guida e migliori pratiche",
      },
    ],
  },
  {
    title: "Strumenti",
    href: "/strumenti",
    items: [
      {
        title: "CLI",
        href: "/strumenti/cli",
        description: "Strumenti da riga di comando",
      },
      {
        title: "Playground",
        href: "/strumenti/playground",
        description: "Ambiente di test interattivo",
      },
      {
        title: "Debug",
        href: "/strumenti/debug",
        description: "Strumenti per il debugging",
      },
    ],
  },
  {
    title: "Community",
    href: "/community",
    items: [
      {
        title: "Forum",
        href: "/community/forum",
        description: "Discussioni e supporto della community",
      },
      {
        title: "Blog",
        href: "/community/blog",
        description: "Articoli e aggiornamenti",
      },
      {
        title: "Eventi",
        href: "/community/eventi",
        description: "Meetup e conferenze",
      },
    ],
  },
] 