
function Catagories() {

    const catgories = ["Latest", "Trending", "Tech", "Life-style", "Vlogs", "Daily Life"]
    return (
        <div className="h-12 flex flex-row justify-start gap-9 items-center">
            {
                catgories.map((item) => {
                    return <div className="bg-[#fff] px-4 py-2 rounded-3xl font-bold">{item}</div>
                })
            }
        </div>
    )
}

export default Catagories