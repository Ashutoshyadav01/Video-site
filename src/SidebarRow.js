import React from 'react'
import "./SidebarRow.css"

const SidebarRow = ({title,Icon,selected}) => {
  return (
    <div className='sidebarRow'>
        <Icon className={`sidebarRow-icon ${selected && "selected"}`} />

      <h2 className="sidebarRow-title">{title}</h2>
    </div>
  )
}

export default SidebarRow
