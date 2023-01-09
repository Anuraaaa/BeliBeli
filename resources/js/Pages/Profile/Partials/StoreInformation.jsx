import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import PrimaryButton from '@/Components/PrimaryButton';

const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  export default function StoreInformation ({store, className}) {
    const storeData = usePage().props.store;
    const storeName = useRef();

    const [confirmingUserCreateStore, setConfirmUserCreateStore, resetCreate] = useState(false);
    const [confirmingUserUpdateStore, setConfirmUserUpdateStore, resetUpdate] = useState(false);
    const [confirmingUserDeleteStore, setConfirmUserDeleteStore, resetDelete] = useState(false);

    const {data, setData, post, patch, delete: destroy, processing, errors} = useForm({
        storename: storeData.nama_store
    });

    const confirmUserCreateStore = () => {
        setConfirmUserCreateStore(true);
    };

    const confirmUserUpdateStore = () => {
        setConfirmUserUpdateStore(true);
    };
    
    const confirmUserDeleteStore = () => {
        setConfirmUserDeleteStore(true);
    };

    
    const CreateStore = (e) => {
        e.preventDefault();
        
        post(route('store.add'), {
            onSuccess: () => closeModalCreate(),
            onFinish: () => resetCreate,
        });
    };
    
    const UpdateStore = (e) => {
        e.preventDefault();

        patch(route('store.edit'), {
            onSuccess: () => closeModalUpdate(),
            onFinish: () => resetUpdate,
        });
    }

    const DeleteStore = (e) => {
        e.preventDefault();

        destroy(route('store.destroy'), {
            onSuccess: () => closeModalDelete(),
            onError: () => storeName.current.focus(),
            onFinish: () => resetDelete,
        });
    }

    
    const closeModalCreate = () => {
        setConfirmUserCreateStore(false);
        
        resetCreate;
    };
    
    const closeModalUpdate = () => {

        setConfirmUserUpdateStore(false);    
        resetUpdate;
    }

    const closeModalDelete = () => {

        setConfirmUserDeleteStore(false);    
        resetDelete;
    }

    return (
        <section className={`space-y-6 ${className}`}>

            {!store? 
                <>
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">Store Information</h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Don't have a store yet? make here
                        </p>
                    </header>

                    <PrimaryButton onClick={confirmUserCreateStore}>Add Store</PrimaryButton>

                    <Modal show={confirmingUserCreateStore} onClose={closeModalCreate}>
                        <form onSubmit={CreateStore} className="p-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                Store Information
                            </h2>

                            <p className="mt-1 text-sm text-gray-600">                            
                                Please enter your store data
                            </p>

                            <div className="mt-6">
                                <InputLabel for="storename" value="Store Name" />

                                <TextInput
                                    id="storename"
                                    name="storename"
                                    value={data.storename}
                                    handleChange={(e) => setData('storename', e.target.value)}
                                    className="mt-1 block w-3/4"
                                    isFocused
                                    autoComplete="storename"
                                />
                            </div>

                            <div className="mt-6 flex justify-end">
                                <SecondaryButton onClick={closeModalCreate}>Cancel</SecondaryButton>

                                <PrimaryButton className="ml-3" processing={processing}>
                                    Create Store
                                </PrimaryButton>
                            </div>
                        </form>
                    </Modal>
                </>
                :
                <>
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">Store Information</h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Update your store in here
                        </p>
                        <p className='text-sm text-gray-600'>Store Name: {store.nama_store}</p>
                    </header>

                    <PrimaryButton onClick={confirmUserUpdateStore}>Update Store</PrimaryButton>
                    <DangerButton onClick={confirmUserDeleteStore} className='ml-3'>Delete Store</DangerButton>

                    <Modal show={confirmingUserUpdateStore} onClose={closeModalUpdate}>
                        <form onSubmit={UpdateStore} className="p-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                Store Information
                            </h2>

                            <p className="mt-1 text-sm text-gray-600">                            
                                Enter new store data
                            </p>

                            <div className="mt-6">
                                <InputLabel for="storename" value="Store Name" />

                                <TextInput
                                    id="storename"
                                    name="storename"
                                    value={data.storename}
                                    handleChange={(e) => setData('storename', e.target.value)}
                                    className="mt-1 block w-3/4"
                                    isFocused
                                    autoComplete="storename"
                                />
                            </div>

                            <div className="mt-6 flex justify-end">
                                <SecondaryButton onClick={closeModalUpdate}>Cancel</SecondaryButton>

                                <Link href={route('store.product.main')} className="ml-3 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                                    Update Product
                                </Link>

                                <PrimaryButton className="ml-3" processing={processing}>
                                    Update Store
                                </PrimaryButton>
                            </div>
                        </form>
                    </Modal>
                    <Modal show={confirmingUserDeleteStore} onClose={closeModalDelete}>
                        <form onSubmit={DeleteStore} className="p-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                Store Information
                            </h2>

                            <p className="mt-1 text-sm text-gray-600">                            
                                Once your store is deleted, all of its resources and data will be permanently deleted. Please
                                enter your store name to confirm you would like to permanently delete your account.
                            </p>

                            <div className="mt-6">
                                <InputLabel for="storename" value="Store Name" />

                                <TextInput
                                    id="storename"
                                    name="storename"
                                    ref={storeName}
                                    value={data.storename}
                                    handleChange={(e) => setData('storename', e.target.value)}
                                    className="mt-1 block w-3/4"
                                    isFocused
                                    autoComplete="storename"
                                />
                                <InputError message={errors.storename} className="mt-2" />
                            </div>

                            <div className="mt-6 flex justify-end">   
                                <SecondaryButton onClick={closeModalDelete}>Cancel</SecondaryButton>

                                <DangerButton className="ml-3" processing={processing}>
                                    Delete Store
                                </DangerButton>
                            </div>
                        </form>
                    </Modal>
                </>
            }
        </section>
    )
}