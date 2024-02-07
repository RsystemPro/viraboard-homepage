
import Navbar from "./ui/navbar/page";
import { headers } from "next/headers";
import Introductions from "./ui/pages/introduction/page";
import Features from "./ui/pages/features/page";
import Prices from "./ui/pages/prices/page";
import Overview from "./ui/pages/overview/page";
import Team from "./ui/pages/team/page";
import About from "./ui/pages/about/page";
import End from "./ui/pages/end/page";

export default async function HomePage() {

  const lang = headers().get('lang') as language      //came from middleware

  return (
    <>
      <Navbar language={lang} />
      <Introductions language={lang} />
      <Features language={lang} />
      <Overview language={lang} />
      <Prices language={lang} />
      <Team language={lang} />
      <About language={lang} />
      <End language={lang} />
    </>
  );
}


