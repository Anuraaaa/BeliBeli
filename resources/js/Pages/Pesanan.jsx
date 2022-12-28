import Header from '@/Components/Header';
import Navbar from '@/Components/Navbar';

export default function Pesanan (props) {
    console.log('Pesanan props', props)
    return (
        <>
        <Header title={props.title}/> 
        <Navbar user={props.isUser}/>               
        </>
    )
}