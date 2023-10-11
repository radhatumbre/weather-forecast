import React from 'react'

const cities = [
    {
        id:1, 
        title:'Tokyo'
    },
    {
        id:2, 
        title:'Sydney'
    },
    {
        id:3, 
        title:'Delhi'
    },
    {
        id:4, 
        title:'Kolkata'
    },
    {
        id:5, 
        title:'Ohio'
    }
]
const TopButton = ({setQuery}) => {
  return (
    <div className='flex items-center justify-between my-6  '>
       {cities.map((city)=>(
        <button onClick={()=>setQuery({q:city.title})} key={city.id}className="text-white text-lg font-medium transition ease-out hover:scale-125">{city.title}</button>
       ))}
    </div>
  )
}

export default TopButton