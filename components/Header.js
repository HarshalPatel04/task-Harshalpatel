import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { toogleSlice } from '@/utils/sidebar-slice';
import { BellDot, ChevronDown, MenuIcon, Search } from 'lucide-react';
import React from 'react';
import { useDispatch } from 'react-redux';

const Header = () => {

  const dispatch = useDispatch();

  const toggleSliceHandler = () => {
    dispatch(toogleSlice());
  };

  return (
    <div className='flex border-b-2 bg-white fixed z-10 w-full md:w-screen'>
      <div className='max-w-60 md:w-100 flex items-center p-2 md:pl-10 sm:px-5 md:px-16 md:bg-blue-50 cursor-pointer' onClick={() => { toggleSliceHandler() }}>
        <div className='roboto-lgfont font-bold m-2 md:m-1 px-1.5 pt-0.5 text-white none bgcolor1 rounded-full cursor-pointer'>G</div>
        <h1 className='hidden md:inline roboto-lg font-extrabold color1 m-1'>GOODFOOD</h1>
        <MenuIcon className='md:hidden' />
      </div>
      <div className='flex justify-between w-full p-3 pr-5 items-center'>
        <div className='mx-5 md:mx-10 flex'>
          <div className="flex w-full sm:w-sm md:w-lvh items-center gap-0">
            <Input className="rounded-r-none border-0 bg-blue-50" placeholder="Search" />
            <Button className="rounded-l-none border-0 bg-blue-50 hover:bg-blue-100" type="submit" variant="outline">
              <Search />
            </Button>
          </div>
        </div>
        <div className='flex items-center justify-evenly pr-2 md:pr-10'>
          <div className='flex items-center justify-evenly'>
            <div>
              <img className='w-50 md:w-8 bg-amber-200 rounded-full p-1 md:p-2' src="https://png.pngtree.com/png-clipart/20250131/original/pngtree-burger-icon-png-image_20355790.png" />
            </div>
            <div className='flex md:m-2 items-center'>
              <h1 className='hidden md:inline'>Delicious Burger</h1>
              <div>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="border-0 shadow-none pt-3"><ChevronDown className='color1' /></Button>
                  </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div>
            <BellDot />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header