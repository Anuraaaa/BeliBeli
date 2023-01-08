import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm';
import Shop from '@/Pages/Profile/Partials/StoreInformation';
import { Link } from "@inertiajs/inertia-react";

export default function AddProductStore (props) {
    console.log('AddProductStore props', props);
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
        <div className="pointer-events-none fixed my-2 inset-y-16 sm:right-1/3 flex max-w-full bottom-8">
            <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col bg-white shadow-xl">
              <div className="border-b border-gray-200 py-4 px-4 sm:px-6">
                <div className="text-lg font-medium text-gray-900">Product Store</div>
              </div>
              <form action="/store/product/add" method="post" encType="multipart/form-data" className="form-control">
                <input type="hidden" name="_token" value={props.token} />                            
                <div className="mx-4">
                    <label className='label'>
                        <span className='label-text'><b>Product Name</b></span>
                    </label>
                    <input type="text" className="input input-sm input-bordered w-full input-primary" name="productname" placeholder="Type here your product name" required/>
                    <label className='label'>
                        <span className='label-text'><b>Price</b></span>
                    </label>
                    <input type="text" className="input input-sm input-bordered w-full input-primary" name="price" placeholder="Type here for price, example: 5000" required/>
                    <label className='label'>
                        <span className='label-text'><b>Stock</b></span>
                    </label>
                    <input type="text" className="input input-sm input-bordered w-full input-primary" name="stock" placeholder="Type here for stock, example: 5000" required/>
                    <label className='label'>
                        <span className='label-text'><b>Keterangan</b></span>
                    </label>
                    <input type="text" className="input input-sm input-bordered w-full input-primary" name="keterangan" placeholder="Type here for keterangan" required/>
                    <label className='label'>
                        <span className='label-text'><b>Gambar</b></span>
                    </label>
                    <input type="file" className="file-input file-input-md file-input-bordered file-input-primary w-full max-w-xs" name="image" required/>
                    <button href='' className="flex mt-4 text-center items-center justify-center w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                        Add Product
                    </button>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <Link href={route('store.product.main')} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Back to Product Store
                        <span aria-hidden="true"> &rarr;</span>
                        </Link>
                    </div>
                </div>
              </form>
            </div>                
            </div>
        </div>
        </>
    )
}