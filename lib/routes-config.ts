// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: boolean;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: 'Getting Started',
    href: '/getting-started',
    noLink: true,
    items: [
      { title: 'Introduction', href: '/introduction' },
      {
        title: 'Installation',
        href: '/installation',
      },
      {
        title: 'Basic Setup',
        href: '/basic-setup',
      },
    ],
  },
  {
    title: 'Paywalls',
    href: '/paywalls',
    noLink: false,
    items: [
      { title: 'Istanbul Paywall', href: '/istanbul' },
      { title: 'London Paywall', href: '/london' },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();