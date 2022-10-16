import React from 'react'

const Apage = () => {
    const [data, setData] = React.useState(null);
    
  return (
    <div>
    <h2>Apage</h2>
    <h2>{data}</h2>
    <button onClick={() => setData("rizal")}>Click</button>
    </div>
  )
}

export default Apage