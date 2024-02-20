import logo from '../../assets/Images/logo.png'

export function Footer() {
  return (
    <footer className='bg-[#0E0B14] h-[150px] relative z-10'>
      <div className='flex items-center justify-center'>
        <img src={logo} alt='logo' className='w-[80px] md:w-[115px] object-cover mt-5' />
      </div>
      <div className='p-5'>
        <ul className='flex items-center justify-center text-xs'>
          <li className='mx-3'>Privacy Policy</li>
          <li className='mx-3'>Cookies Policy</li>
          <li className='mx-3'>EMEA Privacy Rights</li>
          <li className='mx-3'>Subscriber Agreement</li>
          <li className='mx-3'>Help</li>
          <li className='mx-3'>Supported devices</li>
          <li className='mx-3'>About us</li>
          <li className='mx-3'>Interest-based advertising</li>
          <li className='mx-3'>Manage privacy preferences</li>
        </ul>
      </div>
      <div>
        <p className='text-center text-zinc-100 text-[13px] text-xs'>
          ©Disney. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
