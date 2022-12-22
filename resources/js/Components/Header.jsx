import { Head } from '@inertiajs/inertia-react';
import React from 'react';
import logo from '/public/img/tokopedialogo.png';

export default function Header() {
    return (
        <>
        <Head title='BeliBeli'>
            <link rel="icon" href={logo} className='max-w-md' />
        </Head>
        </>
    )
}