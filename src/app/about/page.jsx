const fetchFunc = async () => {

    const fetchData = await fetch('https://api.timbu.cloud/products?organization_id=cc3a77b7f6e34fefae2bc0e27575091c&Appid=9X5AX18KTL1C6FF&Apikey=c1f8512ad1ed475c830ce979077212f220240712140831027506')
    return fetchData.json()
}
const page = async ({ params, searchParams }) => {
    console.log(params, searchParams);

    const data = await fetchFunc()

    const mapData = data.items.map(item => {
        const mainPhoto = item.photos[0].url
        const price = item.current_price[0].GBP[0]
        return (
            <div className="" key={item.unique_id}>
                <p>

                    {item.name}
                </p>
                <p>

                    {item.description}
                </p>
                <p>

                    {mainPhoto}
                </p>
                <p>

                    {price}
                </p>
                <hr />
                {/* <img src={} alt="" /> */}
            </div>
        )
    })

    return (
        <div>
            {mapData}
        </div>
    )
}

export default page

