import Header from '@/Components/Header';
import Navbar from '@/Components/Navbar';
import { Link } from '@inertiajs/inertia-react';

export default function Pesanan (props) {
    console.log('Pesanan props', props)
    return (
        <>
        <Header title={props.title}/> 
        <Navbar user={props.isUser}/>               
        <div className='lg:fixed bg-gray-300 pb-96 overflow-hidden lg:w-full'>               
            <div className="card lg:card-side bg-base-100 shadow-xl w-2/3 mx-auto my-28 lg:my-10 rounded-none">
                <img src="https://placeimg.com/700/780/arch" alt="" className='h-36 w-full lg:h-full lg:w-1/2'/>
                <div className="card-body">
                    <h2 className="card-title">
                        {props.data.nama_barang}
                        <br />
                        Harga: RP {props.data.harga}
                    
                    </h2>
                    <hr />
                    <p><strong>Keterangan: </strong>{props.data.keterangan}</p>
                    <div className="card-actions justify-end">
                        <span>
                            <button className="btn btn-xs md:btn-md bg-blue-400 btn-ghost hover:bg-blue-500 text-xs lg:mr-2">Masukkan Keranjang</button>
                            <Link href={route('home')} className="btn btn-xs md:btn-md bg-blue-400 btn-ghost hover:bg-blue-500 mt-2">Kembali</Link>
                        </span>
                    </div>
                </div>
            </div>        
        </div>
        </>
    )
}