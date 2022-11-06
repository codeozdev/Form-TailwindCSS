import React from 'react'
import phone from '../assets/phone.jpg'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { useFormik } from 'formik'
import validationSchema from './Validation'

function LoginForm() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: (values, bag) => {
      console.log(values)
      bag.resetForm()
    },
    validationSchema,
  })

  return (
    <div
      className={'grid grid-cols-1 md:grid-cols-2 w-full h-screen bg-gray-50'}
    >
      <div className={'hidden sm:block min-h-full'}>
        <img className={'w-full h-full object-cover'} src={phone} alt='' />
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
                <FcGoogle style={{ color: 'blue' }} className='mr-4 text-xl' />{' '}
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
              <div className='relative'>
                <input
                  id='email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur('email')}
                  disabled={isSubmitting}
                  type='email'
                  className='block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm border border-gray-300 appearance-none focus:outline-none focus:ring-0 peer'
                  placeholder=' '
                />
                {errors.email && touched.email && (
                  <div className='text-[12px] mt-2 text-red-400 font-bold'>
                    {errors.email}
                  </div>
                )}

                <label
                  htmlFor='floating_filled'
                  className='absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
                >
                  Email Adres
                </label>
              </div>

              <div className='relative mt-5'>
                <input
                  id='password'
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur('password')}
                  disabled={isSubmitting}
                  type='password'
                  className='block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm border border-gray-300 appearance-none focus:outline-none focus:ring-0 peer'
                  placeholder=' '
                />
                {errors.password && touched.password && (
                  <div className='text-[12px] mt-2 text-red-400 font-bold'>
                    {errors.password}
                  </div>
                )}

                <label
                  htmlFor='floating_filledp'
                  className='absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
                >
                  Şifre
                </label>
              </div>

              <div className='flex justify-between px-4 mt-2'>
                <p className='flex items-center'>
                  <input className='mr-2' type='checkbox' /> Beni hatırla
                </p>
                <a className='text-red-500 underline font-medium' href='#'>
                  Şifremi Unuttum
                </a>
              </div>
              <button
                className='mt-5 w-full bg-yellow-400 rounded-xl p-4 text-white text-xl'
                type='submit'
                disabled={isSubmitting}
              >
                Giriş Yap
              </button>
              <div className='flex flex-col items-center mt-5'>
                <p className='font-bold'>Henüz bir hesabınız yok mu?</p>
                <a className='underline text-blue-500' href='#'>
                  Lütfen bir tane oluşturun
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
