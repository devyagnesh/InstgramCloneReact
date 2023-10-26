import React from 'react'
import style from './Flex.module.css';


const Flex = ({Direction,Width,Height,Valign,Halign,className,children}) => {
  return (
    <section className={`${style["flex"]} ${className} ${Direction === 'column' ? style["direction-column"] : null} ${Valign && style["align-items-center"]} ${Halign && style["justify-content-center"]}`} style={(Width && Height) ? {width:Width,height:Height} : null}>{children}</section>
  )
}

export default Flex;