import React, { useState } from 'react'
import phone from '../assets/phone.jpg'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'

function LoginForm() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [submit, setSubmit] = useState(false)
    const [valid, setValid] = useState(false)

    const handleEmail = (e) => {
        setValues({ ...values, email: e.target.value })
    }

    const handlePassword = (e) => {
        setValues({ ...values, password: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.email && values.password) {
            setValid(true)
        }
        setSubmit(true)
    }


    return (
        <div
            className={
                'grid grid-cols-1 md:grid-cols-2 w-full h-screen bg-gray-50'
            }
        >
            <div className={'hidden sm:block min-h-full'}>
                <img
                    className={'w-full h-full object-cover'}
                    src={phone}
                    alt=''
                />
            </div>
            <div className='flex justify-center h-screen items-center  max-w-[1100px] mx-auto'>
                <div className='w-full mx-auto px-10'>
                    <h1 className='text-3xl font-bold text-center mb-2'>
                        Tailwind CSS Sitesine Hoşgeldiniz
                    </h1>
                    <p className='text-center mb-5'>
                        Mevcut bilgileriniz ile giriş yapınız.
                    </p>
                    <div className='w-full'>
                        <div className='py-5 bg-white shadow-2xl flex justify-center items-center my-4 rounded-xl'>
                            <a className='flex items-center' href='#'>
                                <FcGoogle
                                    style={{ color: 'blue' }}
                                    className='mr-4 text-xl'
                                />{' '}
                                Google ile Bağlan
                            </a>
                        </div>
                        <div className='py-5 bg-white shadow-2xl flex justify-center items-center rounded-xl'>
                            <a className='flex items-center' href='#'>
                                <AiFillFacebook
                                    style={{ color: 'blue' }}
                                    className='mr-2 text-xl'
                                />{' '}
                                Facebook ile Bağlan
                            </a>
                        </div>
                    </div>

                    <div className='mt-5 flex  flex-col justify-center w-full'>
                        <form className='mx-auto w-full p-1' onSubmit={handleSubmit}>
                            {submit && valid ? <div className='text-[12px] text-center mb-4 font-medium'>Selamlar</div> : null}
                            <div className="relative">
                                <input value={values.email} onChange={handleEmail} type="email" id="floating_filled" className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm border border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                                <label htmlFor="floating_filled" className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email Adres</label>
                                {submit && !values.email ? <span className='text-[12px] ml-2 text-red-600'>Lütfen email adresini giriniz.</span> : null}
                            </div>

                            <div className="relative mt-5">
                                <input value={values.password} onChange={handlePassword} type="password" id="floating_filledp" className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm border border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                                <label htmlFor="floating_filledp" className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Şifre</label>
                                {submit && !values.password ? <span className='text-[12px] ml-2 text-red-600'>Lütfen şifrenizi giriniz.</span> : null}
                            </div>


                            <div className='flex justify-between px-4 mt-2'>
                                <p className='flex items-center'>
                                    <input className='mr-2' type='checkbox' />{' '}
                                    Beni hatırla
                                </p>
                                <a
                                    className='text-red-500 underline font-medium'
                                    href='#'
                                >
                                    Şifremi Unuttum
                                </a>
                            </div>
                            <button className='mt-5 w-full bg-yellow-400 rounded-xl p-4 text-white text-xl'>
                                Giriş Yap
                            </button>
                            <div className='flex flex-col items-center mt-5'>
                                <p className='font-bold'>Henüz bir hesabınız yok mu?</p>
                                <a className='underline text-blue-500' href="#">Lütfen bir tane oluşturun</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
