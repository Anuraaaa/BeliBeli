import Carousel from "@/Components/Carousel";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import AllProduct from "@/Components/Product/AllProduct";
import Paginate from "@/Components/Product/Paginate";
import { Link } from "@inertiajs/inertia-react";

const rupiah = (number)=>{
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number);
}

export default function Checkout(props) {
  console.log('Checkout props: ', props)
  return (
    <>
    <Header title={props.title}/>
    <Navbar user={props.auth.user} pesanan={props.pesananCount}/>
    <div className='bg-blue-300'>
            <div className='container mx-auto px-2 sm:px-4 md:px-16 lg:px-32 py-8'>
                <Carousel/>
            </div>
        </div>
        <div className='bg-gray-300 py-16'>
            <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4'>
                <AllProduct products={props.barangs.data} page={props.barangs}/>
            </div>
            <div className='flex justify-center items-center p-4'>
                <Paginate page={props.barangs} products={props.barangs.data}/>
            </div>
        </div>
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
    <div className="pointer-events-none fixed my-8 inset-y-16 sm:right-1/3 flex max-w-full bottom-8">
        <div className="pointer-events-auto w-screen max-w-md">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <div className="text-lg font-medium text-gray-900">Keranjang</div>
                <div className="ml-3 flex h-7 items-center">
                </div>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {props.pesanan_detail.map((pesanan) => (
                      <li key={pesanan.id_pesanan_detail} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h1>{pesanan.nama_barang}</h1>
                              <p className="ml-4">{rupiah(pesanan.jumlah_harga)}</p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">                              
                              <p >Harga Satuan:</p>
                              <div className="flex">
                                <p>{rupiah(pesanan.harga_satuan_barang)}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">Jumlah: {pesanan.jumlah_pesanan}</p>

                            <div className="flex">
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total Harga</p>
                <p>{rupiah(props.pesanan.jumlah_harga)}</p>
              </div>
              <div className="mt-6">
                <Link href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                  Checkout
                </Link>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <Link href="/" type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}