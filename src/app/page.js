import Image from "next/image";
import "./page.scss";
import PriceList from "@/ui/price-list/PriceList";
import Header from "@/ui/header/Header";

export default function Home() {
  return (
    <main className=''>
      <Header />

      <PriceList />
    </main>
  );
}
