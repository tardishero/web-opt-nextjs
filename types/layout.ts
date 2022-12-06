export interface Route {
  title: string;
  path: string;
}

export interface FooterColumn {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
}

export interface Footer {
  columns: FooterColumn[];
}
