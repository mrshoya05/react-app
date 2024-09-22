import React from 'react'


function Tabledata({tabledata}) {
  return (

    <div className='table-container'>
          <table>
{
  tabledata.map((item)=>(
    <tr key={item.id}>
      <td>{item.id}</td>
      <td> {item.name}  </td>
      <td> {item.email} </td>
    </tr>
  ))
}
    
  </table>

    </div>

  )
}

export default Tabledata