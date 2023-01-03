import { Link } from "@inertiajs/inertia-react";


const isPaginate = (page) => {
    console.log('paginate props', page)
    const prev = page.links[0].url;
    const next = page.links[page.links.length - 1].url;
    const current = page.current_page;
    
    return (
        <>
        <div className="btn-group">
        {prev && <Link href={prev} className="btn">«</Link>}
    
        <Link className="btn">{current}</Link>
    
        {next && <Link href={next} className="btn">»</Link>}
        </div>
        </>
    )
}


export default function Paginate({page, products}) {

    if (products.length != 0) {
        return isPaginate(page);
    }
}