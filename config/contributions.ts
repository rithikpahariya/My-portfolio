export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "novu",
    contibutionDescription:
      "Refactored the workflow engine components, reducing bundle size and improving developer experience with clearer type definitions and error handling.",
    repoOwner: "Novu (Open Source)",
    link: "https://github.com/novuhq/novu/pull/ZZZZ",
  },
  {
    repo: "novu",
    contibutionDescription:
      "Added comprehensive test coverage for critical event-triggering flows, increasing stability and catching multiple regression points before release.",
    repoOwner: "Novu (Open Source)",
    link: "https://github.com/novuhq/novu/pull/AAAA",
  },
  {
    repo: "novu",
    contibutionDescription:
      "Fixed a major issue in the subscriber preference module that caused incorrect channel fallback behavior—improved reliability.",
    repoOwner: "Novu (Open Source)",
    link: "https://github.com/novuhq/novu/pull/BBBB",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
