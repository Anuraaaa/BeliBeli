import Carousel from '@/Components/Carousel'
import Header from '@/Components/Header'
import Navbar from '@/Components/Navbar'
import AllProduct from '@/Components/Product/AllProduct'
import Paginate from '@/Components/Product/Paginate'
import React from 'react'

export default function Welcome(props) {
    console.log('welcome props:', props);
    return (
        <>
        <Header title={props.title}/>
        <Navbar user={props.isUser} nama={props.dataUser}/>
        <div className='bg-blue-300'>
            <div className='container mx-auto px-2 sm:px-4 md:px-16 lg:px-32 py-8'>
                <Carousel/>
            </div>
        </div>
        <div className='bg-gray-300 py-8'>
            <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4'>
                <AllProduct products={props.barangs.data} page={props.barangs}/>
            </div>
            <div className='flex justify-center items-center p-4'>
                <Paginate barangs={props.barangs}/>
            </div>
        </div>
        </>
    )
}