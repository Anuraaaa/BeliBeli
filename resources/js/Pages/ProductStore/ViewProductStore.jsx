import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import { Link } from "@inertiajs/inertia-react";
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm';
import Shop from '@/Pages/Profile/Partials/StoreInformation';
import jquery from "jquery";
import swal from 'sweetalert';

const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }
  
  export default function ViewProductStore (props) {
    console.log('ProductStore props: ', props);

    jquery('#checkoutbyid').ready(function () {
        jquery('#checkoutbyid').click(function() {
          if (props.pesananCount != 0) {
    
            props.pesanan_detail.map((pesanan) => {
                swal({
                title: `Apakah kamu yakin mau menghapus ${pesanan.nama_barang} ?`,
                text: "Klik OK untuk lanjutkan",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              }).then((result) => {
                if (result) {
                  swal({
                    title: "Sukses",
                    icon: "success",
                    text: `Kamu berhasil menghapus ${pesanan.nama_barang} di keranjang`
                  }).then((result) => {        
                    if (result) {
                      jquery.ajax({
                        method: 'POST',
                        url: "/checkout=" + pesanan.id_pesanan_detail,
                        data: {
                          _token: props.token,
                        },
                        success: function() {
                            window.location = '/checkout';
                        }
                      })
                    }
                  });
                }
              })
            })
          }
        })
      })
          
      return (
        <>
        <Header title={props.title}/>
        <Navbar user={props.auth.user} pesanan={props.pesananCount}/>
        <div className="bg-blue-300 py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdateProfileInformationForm className="max-w-xl"/>
                </div>

                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdatePasswordForm className="max-w-xl" />
                </div>

                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <Shop store={props.store} className="max-w-xl" />
                </div>

                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <DeleteUserForm className="max-w-xl" />
                </div>
            </div>
        </div>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
        <div className="pointer-events-none fixed my-8 inset-y-16 sm:right-1/3 flex max-w-full bottom-8">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col bg-white shadow-xl">
              <div className="border-b border-gray-200 py-4 px-4 sm:px-6">
                <div className="text-lg font-medium text-gray-900">Product Store</div>
              </div>
                <div className="flex-1 overflow-y-auto py-0 px-4 sm:px-6">
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {props.barangs.map((product) => (
                          <li key={product.id_barang} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={'/storage/' + product.image}
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
    
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium font-bold">
                                  <h1>{product.nama_barang}</h1>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm font-bold">                              
                                  <p>Harga:</p>
                                  <div className="flex">
                                    <p>{rupiah(product.harga)}</p>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm font-bold">
                                  <p>Stock:</p>
                                  <div className="flex">
                                    <p> {product.stock}</p>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm font-bold">
                                  <p>Keterangan:</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm font-bold">
                                  <p> {product.keterangan}</p>
                                </div>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
    
                                <div className="flex">
    
                                  <button id="checkoutbyid"  className="font-medium text-indigo-600 hover:text-indigo-500">
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
                <Link href={route('store.product.view')} className="flex text-center items-center justify-center w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                    Add Product
                </Link>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <Link href="/profile" type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Back to Profile
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