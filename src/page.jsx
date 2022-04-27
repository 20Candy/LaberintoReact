import React from 'react'

function Page({ laberinto }) {
  return (
    <div className="container">
      {laberinto.map((temp) => (
        <p>{temp}</p>
      ))}
    </div>
  )
}

export default Page
