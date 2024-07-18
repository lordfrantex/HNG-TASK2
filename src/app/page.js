import Image from "next/image";
import "./page.scss";
import PriceList from "@/ui/price-list/PriceList";
import Header from "@/ui/header/Header";



const fetchChairs = async (page, size) => {

  const URL = `${process.env.ROOT_URL}/products?page=${page}&size=${size}&organization_id=${process.env.ORGANIZATION_ID}&Appid=${process.env.APP_ID}&Apikey=${process.env.API_KEY}&reverse_sort=false`


  const data = await fetch(URL, {
    cache: 'no-store'
  })
  return data.json()
}
export default async function Home({ searchParams }) {
  const page = searchParams?.page || 1;
  const size = searchParams?.size || 10;


  const chairList = await fetchChairs(page, size)
  return (
    <main className=''>
      <Header />

      <PriceList chairList={chairList} totalPages={chairList.total} size={size} currentPage={page} />
    </main>
  );
}
