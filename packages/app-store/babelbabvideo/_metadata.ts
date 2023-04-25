import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Babelbab Video",
  description: _package.description,
  installed: true,
  type: "babelbab_video",
  imageSrc: "/api/app-store/babelbabvideo/icon.svg",
  variant: "conferencing",
  categories: ["video"],
  logo: "/api/app-store/babelbabvideo/icon.svg",
  publisher: "Babelbab.com",
  url: "https://babelbab.com/",
  verified: true,
  rating: 0, // TODO: placeholder for now, pull this from TrustPilot or G2
  reviews: 0, // TODO: placeholder for now, pull this from TrustPilot or G2
  slug: "babelbab",
  title: "Babelbab Meet",
  trending: true,
  isGlobal: false,
  email: "help@babelbab.com",
  appData: {
    location: {
      linkType: "dynamic",
      type: "integrations:babelbab",
      label: "Babelbab Video",
    },
  },
  dirName: "babelbabvideo",
} as AppMeta;

export default metadata;
