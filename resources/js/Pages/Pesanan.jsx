import Header from '@/Components/Header';
import Navbar from '@/Components/Navbar';
import { Link } from '@inertiajs/inertia-react';

const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  export default function Pesanan (props) {
    return (
        <>
        <Header title={props.title}/> 
        <Navbar user={props.auth.user} pesanan={props.pesananCount}/>               
        <div className='lg:fixed bg-gray-300 pb-96 overflow-hidden lg:w-full'>               
            <div className="card lg:card-side bg-base-100 shadow-xl w-2/3 mx-auto my-28 lg:my-10 rounded-none">
                <img src={'/storage/'+ props.data.image} alt="" className='h-36 w-full lg:h-full lg:w-1/2'/>
                <div className="card-body">
                    <h2 className="card-title text-2xl">
                        {props.namabarang}
                        <br />
                        Harga: {rupiah(props.data.harga)}
                    
                    </h2>
                    <hr />
                    <strong>Stok: </strong>{props.data.stock}
                    <br />
                    <strong>Keterangan: </strong>
                    <div className='text-justify'>
                        {props.data.keterangan}
                    </div>
                    <hr className='mt-2'/>
                    <strong>Jumlah Pesanan: </strong>  
                    <form action={'/page=' + props.currentPage + '/pesanan/' + props.data.nama_barang + '=' + props.data.id_barang} method='post'>
                        <input type="hidden" name="_token" value={props.token} />                            
                        <input type="text" name='jumlah_pesanan' className='input input-sm input-ghost w-28 text-center text-sm input-bordered rounded-md shadow-sm'/>
                        <div className="card-actions justify-end">
                            <span>
                                <button className="btn btn-xs md:btn-md bg-blue-400 btn-ghost hover:bg-blue-500 text-xs lg:mr-2">Masukkan Keranjang</button>
                                <Link href={'/?page=' + props.currentPage} className="btn btn-xs md:btn-md bg-blue-400 btn-ghost hover:bg-blue-500 mt-2">Kembali</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>        
        </div>
        </>
    )
}