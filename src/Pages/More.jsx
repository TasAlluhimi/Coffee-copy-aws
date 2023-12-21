import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

function More() {

    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = React.useState([])

    React.useEffect(()=>{
        getData()

    }, [])

    const getData = ()=>{
        axios.get(`https://api.sampleapis.com/coffee/hot/${id}`)
    .then(res=>{
        console.log(res.data);
        setData(res.data);
    })
    }
  return (
    <>

    <Nav/>

    <div className='bg-[#F5EBEB]'>

    
        <div class="relative flex flex-col items-center  mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl h-screen">

<div class="w-full h-64 lg:w-1/2 lg:h-auto">
    <img class="h-full w-full object-cover" src={data.image} alt="coffee"/>
</div>

<div
    class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">

    <div class="flex flex-col p-12 md:px-16">
        <h2 class="text-2xl font-medium uppercase text-[#D5B4B4] lg:text-4xl">{data.title}</h2>
        <p class="mt-4">
            {data.description}
        </p>
        <div class="mt-8">
        <button 
                    onClick={()=>{navigate('/Coffee')}}
                    class="bg-[#867070] hover:bg-[#D5B4B4] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Back
          </button>
        </div>
    </div>
</div>

</div>
</div>

<Footer/>
    </>
  )
}

export default More