import React, { useContext } from 'react'
const Bpage = () => {
    const{data, setData} = useContext(useContext)
  return (
    <div>{data}</div>
  )
}

export default Bpage