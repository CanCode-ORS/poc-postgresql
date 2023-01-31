import React from 'react'
import styles from '../../styles/Sidebars.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const SidebarMenu = ({open, page}) => {
  const router = useRouter()
  console.log('Router:', router.pathname);

  function CapitalizeCurrentPage(page) {
    switch (router.pathname) {
      case '/teams':
        return <p class='font-extrabold'>{page}</p>
      break;
      default:
        return <p>{page}</p>
      break;
    }
  }

  return (
    <div class={`${styles.container} transition-all duration-500 ${open ? 'left-0' : 'left-[-400px]'}`}>
        <a href="/" class='flex justify-center items-center gap-3 mr-5'>
          <Image class='' src='/../public/images/logo-icon.png' width={50} height={50} />
          <h2 class='text-[2.3rem] font-medium text-center italic'>Podium</h2>
        </a>
        <div class='pt-10 pl-2 font-light flex flex-col'>
           
            {router.pathname === '/login' ? ( <a class='font-extrabold'>Home</a> ) : ( <a href="/login" class='hover:font-bold'>Home</a> )}
           
            {router.pathname === '/sports' ? ( <a class='font-extrabold'>Sports</a> ) : ( <a href="/sports" class='hover:font-bold'>Sports</a> )}
           
            {router.pathname === '/schedule' ? ( <a class='font-extrabold'>Schedule</a> ) : ( <a href="/schedule" class='hover:font-bold'>Schedule</a> )}
           
            {router.pathname === '/settings' ? ( <a class='font-extrabold'>Settings</a> ) : ( <a href="/settings" class='hover:font-bold'>Settings</a> )}
           
            {router.pathname === '/teams' ? ( <a class='font-extrabold'>Manage Teams</a> ) : ( <a href="/teams" class='hover:font-bold'>Manage Teams</a> )}
           
            {router.pathname === '/reports' ? ( <a class='font-extrabold'>Reports</a> ) : ( <a href="/reports" class='hover:font-bold'>Reports</a> )}
            
            {router.pathname === '/admin-portal' ? ( <a class='font-extrabold'>Admin Portal / Profile</a> ) : ( <a href="/admin-portal" class='hover:font-bold'>Admin Portal / Profile</a> )}

            <div class='mt-3'>
              <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign Out</button>
            </div>

        </div>
    </div>
  )
}

export default SidebarMenu