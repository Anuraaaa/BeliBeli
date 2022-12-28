import { Head } from '@inertiajs/inertia-react';
import React from 'react';
import logo from '/public/img/mainblibli.png';

export default function Header({title}) {
    return (
        <>
        <Head>
            <title>{"BeliBeli | " + title}</title>
            <link rel="icon" href={logo} className='max-w-md' />
        </Head>
        </>
    )
}