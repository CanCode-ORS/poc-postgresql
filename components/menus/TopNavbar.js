import React from 'react'
import 'flowbite'; 
import Image from 'next/image';
import styles from '../../styles/Navbar.module.css'

const TopNavbar = ({pageName}) => {
  return (
    <>
    <nav className={styles.navbar}>
        {/* <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Schedule</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Manage Teams</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Admin Portal / Profile</a></li>
            <li><a href="#">Sign Out</a></li>
        </ul> */}
        <button class='ml-3 focus:bg-gray-300'>
        <Image class='' width={32} height={32} src='/../public/images/hamburger-menu.png'/>
        </button>

        <p class='ml-8'>{pageName}</p>
        
        <div class='flex items-center gap-3 mr-3'>
            <button type="button" class="rounded-full focus:bg-gray-300  " aria-expanded="false" >
                <Image width={32} height={32} src='/../public/images/notification-bell.png'/>
            </button>
            <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" >
                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
            </button>
        </div>
    </nav>
    </>

// <nav class="bg-white border drop-shadow border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
//   <div class="container flex flex-wrap items-center justify-between mx-auto">
//   <a href="https://flowbite.com/" class="flex items-center border-gray-300 px-2 rounded-md">
//       <Image src="/../public/images/logo-icon.png" width='46' height='46' class="" alt="Flowbite Logo" />
//       <span class="px-1 italic self-center text-xl font-semibold whitespace-nowrap dark:text-white">Podium</span>
//   </a>
//   <div class="flex items-center md:order-2">
//       <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
//         <span class="sr-only">Open user menu</span>
//         <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
//       </button>
//       <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
//         <div class="px-4 py-3">
//           <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
//           <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
//         </div>
//         <ul class="py-2" aria-labelledby="user-menu-button">
//           <li>
//             <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
//           </li>
//           <li>
//             <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
//           </li>
//           <li>
//             <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
//           </li>
//           <li>
//             <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
//           </li>
//         </ul>
//       </div>
//       <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//     </button>
//   </div>
//   <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
//     <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//       </li>
//     </ul>
//   </div>
//   </div>
// </nav>

  )
}

export default TopNavbar