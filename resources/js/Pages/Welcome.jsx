import Carousel from '@/Components/Carousel'
import Header from '@/Components/Header'
import Navbar from '@/Components/Navbar'
import React from 'react'

export default function Welcome(props) {

    return (
        <>
        <Header title={props.title}/>
        <Navbar/>
        <div className='bg-blue-300'>
            <div className='container mx-auto px-2 sm:px-4 md:px-16 lg:px-32 py-8'>
                <Carousel/>
            </div>
        </div>
        </>
    )
}