import { ConnectButton } from '@rainbow-me/rainbowkit'

import toast, { Toaster } from 'react-hot-toast'

const Header = () => {

 
  return (
    <div className='fixed left-0 top-0 w-full px-8 py-4 flex items-center justify-between'>
      <div className='flex items-center'>
        
      </div>

      <div className='flex'>
        
        <ConnectButton className='mx-8' accountStatus={'full'} />
      </div>

      <Toaster />
    </div>
  )
}

export default Header
