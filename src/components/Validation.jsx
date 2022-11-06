import { object, string, number } from 'yup'

let ValidationShema = object({
  email: string()
    .email('Geçerli bir mail adresi giriniz.')
    .required('Lütfen email adresinizi giriniz.'),
  password: number().required('Lütfen şifrenizi giriniz.'),
})

export default ValidationShema
