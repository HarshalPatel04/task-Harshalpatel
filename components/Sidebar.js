import store from '@/utils/store'
import { BarChart2, Info, MessageCircleMore, Settings, ShoppingCart, SquareMenu, User2, Wallet } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isSliceOpen = useSelector(store => store.app.isSliceOpen);

  function isScreenSM() {
    const mediaQuery = window.matchMedia('(min-width: 576px)');

    return mediaQuery.matches;
  }

  return isSliceOpen ? null : (
    <div className='bg-blue-50 px-1.5 w-60 md:min-w-60 h-screen md:p-10 md:pl-10 fixed pt-19 md:top-19 z-9'>
      <div>
        <h2 className='roboto-gf font-medium mx-1 text-gray-500 cursor-default'>MENU</h2>
        <Link href="/">
          <div className='flex mx-1 space-x-2 items-center m-3 cursor-pointer'>
            <BarChart2 className='bgcolor1 rounded-sm text-white p-1' />
            <h1 className='roboto-gf text-md font-bold color1'>Dashboard</h1>
          </div>
        </Link>
        <Link href="/">
          <div className='flex mx-1 space-x-2 items-center m-3 cursor-pointer'>
            <ShoppingCart className='rounded-sm text-gray-500 p-1' />
            <h1 className='roboto-gf text-md font-bold text-gray-500'>Food Order</h1>
          </div>
        </Link>
        <Link href="/">
          <div className='flex mx-1 space-x-2 items-center m-3 cursor-pointer'>
            <SquareMenu className='rounded-sm text-gray-500 p-1' />
            <h1 className='roboto-gf text-md font-bold text-gray-500'>Manage Menu</h1>
          </div>
        </Link>
        <Link href="/">
          <div className='flex mx-1  space-x-2 items-center m-3 cursor-pointer'>
            <MessageCircleMore className='rounded-sm text-gray-500 p-1' />
            <h1 className='roboto-gf text-md font-bold text-gray-500'>Customer review</h1>
          </div>
        </Link>
      </div>
      <div className='mt-10'>
        <h2 className='roboto-gf font-medium mx-1 text-gray-500 cursor-default'>OTHERS</h2>
        <Link href="/">
          <div className='flex mx-1 space-x-2 items-center m-3 cursor-pointer'>
            <Settings className='rounded-sm text-gray-500 p-1' />
            <h1 className='roboto-gf text-md font-bold text-gray-500'>Setting</h1>
          </div>
        </Link>
        <Link href="/">
          <div className='flex mx-1 space-x-2 items-center m-3 cursor-pointer'>
            <Wallet className='rounded-sm text-gray-500 p-1' />
            <h1 className='roboto-gf text-md font-bold text-gray-500'>Payment</h1>
          </div>
        </Link>
        <Link href="/">
          <div className='flex mx-1 space-x-2 items-center m-3 cursor-pointer'>
            <User2 className='rounded-sm text-gray-500 p-1' />
            <h1 className='roboto-gf text-md font-bold text-gray-500'>Accounts</h1>
          </div>
        </Link>
        <Link href="/">
          <div className='flex mx-1 space-x-2 items-center m-3 cursor-pointer'>
            <Info className='rounded-sm text-gray-500 p-1' />
            <h1 className='roboto-gf text-md font-bold text-gray-500'>Help</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar