import React from 'react'
import style from './preloader.module.scss'

interface PreloaderProps{
    width: number,
    border: number,
}

const Preloader: React.FC <PreloaderProps> = ({width, border}) => {
  return (
   <>
    <div className={style.spinner} style={{width: width, height: width, borderWidth: border}}></div>
   </>
  )
}

export default Preloader