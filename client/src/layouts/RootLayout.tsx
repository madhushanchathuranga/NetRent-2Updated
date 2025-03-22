import { Outlet } from 'react-router-dom'
import Header from '../components/root/Header'
import Footer from '../components/root/Footer'

const RootLayout = () => {
  return (
    <div className='w-full flex flex-col h-full items-center justify-center font-robotopro'>
        <div className='w-full flex flex-col max-w-[1920px] h-full'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    </div>
  )
}

export default RootLayout