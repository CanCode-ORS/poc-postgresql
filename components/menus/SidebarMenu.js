import React from 'react'
import styles from '../../styles/Sidebars.module.css'

const SidebarMenu = () => {
  return (
    <div class={styles.container}>
        {/* <img></img> */}
        <h2 class='text-[2.3rem] font-medium text-center'>App Logo</h2>
        <div class='pt-10 pl-2 font-light'>
            <p class='font-extrabold'>Home</p>
            <p>Sports</p>
            <p>Schedule</p>
            <p>Settings</p>
            <p>Manage Teams</p>
            <p>Reports</p>
            <p>Admin Portal / Profile</p>
            <p>Sign Out</p>
        </div>
    </div>
  )
}

export default SidebarMenu