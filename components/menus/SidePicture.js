import React from 'react'
import styles from '../../styles/Sidebars.module.css'

const SidePicture = ({image}) => {
  return (
    <div class={styles.imageLogin}>
       <img class='object-cover h-[100vh]' src={image}/>
    </div>
  )
}

export default SidePicture