import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";

import anwar from '/public/img/team/anwar.jpg';
import bela from '/public/img/team/bela.jpg';
import ica from '/public/img/team/ica.jpg';
import maryam from '/public/img/team/maryam.jpg';
import yusuf from '/public/img/team/ucup.jpg';
import rizki from '/public/img/team/rizki.jpg';
import babaw from '/public/img/team/babaw.jpg';
import logo from '/public/img/mainblibli.png';

export default function About(props) 
{
    return (
        <>
        <Header title={props.title}/>
        <Navbar user={props.auth.user} pesanan={props.pesananCount}/>
        <div className='bg-blue-300'>
            <div className='container mx-auto px-2 sm:px-4 md:px-16 lg:px-32 py-8'>
                <img src={logo} className='h-24 mx-auto' alt="" />
                <p className="my-4 text-center text-2xl">
                    <strong>BeliBeli</strong> merupakan sebuah platform yang disesuaikan untuk tiap wilayah dan menyediakan pengalaman berbelanja online yang mudah, aman, dan cepat.
                    Masyarakat dapat memanfaatkan platform e-Commerce BeliBeli untuk memenuhi kebutuhan sehari-hari dirumah. Selain memudahkan dalam memperoleh barang yang dibutuhkan, belanja online dapat dijadikan sebagai alternatif berbelanja yang aman dengan meminimalisir kontak fisik                    
                </p>
            </div>
        </div>
        <div className='bg-gray-300 py-16'>
            <h1 className="text-center text-4xl font-bold mb-8">Our Team</h1>
            <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
                <figure><img className="h-64" src={anwar} alt="" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-xl text-center">
                        Muhammad Anwar Fauzan
                        (110121032)
                    </h1>
                    <hr />
                    <h1 className='text-xl text-center'>Developer</h1>
                </div>
                </div>        

                <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
                <figure><img className="h-64" src={rizki} alt="" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-xl text-center">
                        Rizky Budiansyah
                        (1121211012)
                    </h1>
                    <hr />
                    <h1 className='text-xl text-center'>Database Analyst</h1>
                </div>
                </div>        

                <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
                <figure><img className="h-64" src={bela} alt="" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-xl text-center">
                        Bela Nofiyanti
                        (1102211008)
                    </h1>
                    <hr />
                    <h1 className='text-xl text-center'>Report and Paper Writer</h1>
                </div>
                </div>        

                <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
                <figure><img className="h-64" src={ica} alt="" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-xl text-center">
                        Aisyah Fatmawati
                        (1101211083)
                    </h1>
                    <hr />
                    <h1 className='text-xl text-center'>Report and Paper Writer</h1>
                </div>
                </div>        

                <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
                <figure><img className="h-64" src={maryam} alt="" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-xl text-center">
                        Siti Mariyam
                        (1102211005)
                    </h1>
                    <hr />
                    <h1 className='text-xl text-center'>Report and Paper Writer</h1>
                </div>
                </div>        

                <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
                <figure><img className="h-64" src={babaw} alt="" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-xl text-center">
                        Sofiyan Lutfi
                        (1102211015)
                    </h1>
                    <hr />
                    <h1 className='text-xl text-center'>Dokumenter</h1>
                </div>
                </div>        

                <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
                <figure><img className="h-64" src={yusuf} alt="" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-xl text-center">
                        Maulana Yusup
                        (1101211076)
                    </h1>
                    <hr />
                    <h1 className='text-xl text-center'>Dokumenter</h1>
                </div>
                </div>        
            </div>
        </div>
        </>
    )
}