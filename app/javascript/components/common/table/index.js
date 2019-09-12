import React from 'react'

const Table = ({ title, arr }) => {
  if (!arr || !arr.length) {
    return (<div></div>)
  }

  const keys = Object.keys(arr[0]).filter((e) => { return e !== 'id'})
  const headers =  keys.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>
  })
  const body =  arr.map((element, index) => {
    const rows =  keys.map((k, i) => {
      return <td key={i}>{element[k]}</td>
    })

    return (<tr key={element.id}>
      {rows}
    </tr>)
  })

  return (
    <div>
      <h2> {title} </h2>
      <table>
        <thead>
          <tr>
            {headers}
          </tr>
        </thead>
        <tbody>
          {body}
        </tbody>
      </table>
    </div>
  )
}

export default Table
