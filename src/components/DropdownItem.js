import React from 'react'

function DropdownItem(props) {
  return (
    <div onClick={() => props.onClick()}>{props.name}</div>
  )
}

export default DropdownItem