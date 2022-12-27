const isProduct = (products, user) => {
    console.log('isProduct props', products, user)
    
    if (user == "login") 
    {
        return products.map((data, i) => {
            return (
                <div key={i} className="card card-compact w-96 bg-base-100 shadow-xl p-4">
                <figure><img src="https://placeimg.com/400/225/arch" alt="" /></figure>
                <div className="card-body">
                    <h1 className="card-title">{data.nama_barang}</h1>
                    <h2>RP {data.harga}</h2>
                    <p>{data.keterangan}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>        
            )
        })
    }
    else
    {
        return products.map((data, i) => {
            return (
                <div key={i} className="card card-compact w-96 bg-base-100 shadow-xl p-4">
                <figure><img src="https://placeimg.com/400/225/arch" alt="" /></figure>
                <div className="card-body">
                    <h1 className="card-title">{data.nama_barang}</h1>
                    <h2>RP {data.harga}</h2>
                    <p>{data.keterangan}</p>
                </div>
                </div>
            )
        })
    }
}


const noProduct = () => {
    return (
        <>
        <div>Saat ini belum ada barang yang dijual</div>
        </>
    )
}


const AllProduct = ({products, user}) => {
    return !products? noProduct() : isProduct(products, user)
}

export default AllProduct