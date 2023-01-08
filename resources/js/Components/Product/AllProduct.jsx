import { Link } from '@inertiajs/inertia-react'
import cart from '/public/img/cart2.png'

const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }
  
  
  const isProduct = (products, page) => {
    console.log('isProduct props', products, page.current_page)
    
    return products.map((data, i) => {
        return (
            <div key={i} className="card card-compact w-96 bg-base-100 shadow-xl p-4">
            <figure><img src={'storage/' + data.image} alt="" /></figure>
            <div className="card-body">
                <h1 className="card-title text-2xl">
                    {data.nama_barang}
                    <br />
                    {rupiah(data.harga)}
                </h1>
                <hr />
                <p><strong>Keterangan:</strong></p>
                <p className='text-justify'>{data.keterangan}</p>
                <div className="card-actions justify-end">
                <Link href={'/page=' + (page.current_page) + '/pesanan/' + data.nama_barang + '=' + (data.id_barang)} className="btn btn-md btn-ghost bg-blue-400 hover:bg-blue-600 focus:bg-blue-400">
                    <img src={cart} alt="" className='h-6 mr-2'/>
                    Pesan
                    </Link>
                </div>
            </div>
            </div>        
        )
    })
}

const noProduct = () => {
    return (
        <>
        <div className="alert alert-error mb-16 mx-96 justify-center text-sm lg:text-lg">
            INFO: Saat ini belum ada barang yang dijual
        </div>
        </>
    )
}


const AllProduct = ({products, page}) => {

    if (products.length == 0){
        return noProduct();
    }
    else {
        return isProduct(products, page);
    }
}

export default AllProduct