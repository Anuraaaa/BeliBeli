import cart from '/public/img/cart2.png'

const isProduct = (products) => {
    console.log('isProduct props', products)
    
    return products.map((data, i) => {
        return (
            <div key={i} className="card card-compact w-96 bg-base-100 shadow-xl p-4">
            <figure><img src="https://placeimg.com/400/225/arch" alt="" /></figure>
            <div className="card-body">
                <h1 className="card-title">{data.nama_barang}</h1>
                <h1 className="card-title">RP {data.harga}</h1>
                <p>{data.keterangan}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-md btn-ghost bg-blue-400 hover:bg-blue-600 focus:bg-blue-400">
                    <img src={cart} alt="" className='h-6 mr-2'/>
                    Pesan
                    </button>
                </div>
            </div>
            </div>        
        )
    })
}


const noProduct = () => {
    return (
        <>
        <div>Saat ini belum ada barang yang dijual</div>
        </>
    )
}


const AllProduct = ({products}) => {
    return !products? noProduct() : isProduct(products)
}

export default AllProduct