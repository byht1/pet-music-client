import { Footer } from "components/modules/Footer";
import { Again } from "components/modules/home/Again";
import { Hero } from "components/modules/home/Hero";
import { TheyAreListeningNow } from "components/modules/home/TheyAreListeningNow";
import { YouWillLike } from "components/modules/home/YouWillLike";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <YouWillLike />
        <TheyAreListeningNow />
        <Again />
      </main>
      <Footer />
    </>
  );
}
