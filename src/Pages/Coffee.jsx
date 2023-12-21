import React from 'react'
import axios from 'axios';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function Coffee() {

    const [data, setData] = React.useState([])
    const [search, setSearch] = React.useState('')
    const user = localStorage.getItem('user')
    const userData = JSON.parse(user)
    
    const filterd = data.filter((item)=>
    item.title.toLowerCase().includes(search.toLowerCase())
    )
    
    React.useEffect(()=>{
        getData()

    }, [])

    const getData = ()=>{
        axios.get('https://api.sampleapis.com/coffee/hot')
    .then(res=>{
        console.log(res.data);
        setData(res.data);
    })
    }

    const cart = (item)=>{
        if (!localStorage.getItem('isLogged')) {
            window.open('/SignIn', '_self')
        }
        else{
            axios.post(`https://657c6959853beeefdb9964e3.mockapi.io/cart`,{
            userId: userData.id,
            product_id: item.id,
            image: item.image

        })
        }
    
    }

  return (
    <>

    <Nav/>
    <div className='bg-[#F5EBEB]'>

    <div className='p-2 flex justify-center items-center'>
        <input 
        className='mt-10 p-2 rounded-lg'
        type="search" 
        name="search" 
        id="search" 
        placeholder='Search by name'
        value={search}
        onChange={(event)=>{setSearch(event.target.value)}}
        />
    </div>
               <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 ">
    <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        
        {filterd.length === 0 ? 
        <div className='h-screen text-center'>No result found.</div>
        :
        filterd.map((item, index)=>(
            <div 
            key={index}
            class="rounded overflow-hidden shadow-lg bg-white">

            
            <div class="relative">
            <Link to={`/More/${item.id}`}>
                
                    <img class="w-full"
                        src={item.image}
                        alt="Sunset in the mountains"/>
                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                
                </Link>
            </div>
            <div class="px-6 py-4">

                <p href="#"
                    class="font-semibold text-lg inline-block hover:text-[#867070] transition duration-500 ease-in-out">{item.title}</p>
                
            </div>
            <div class="px-2 py-4 flex flex-row items-center float-right"
            // onClick={}
            >
                <span class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center 
                bg-[#D5B4B4] rounded-xl p-4 hover:scale-105"
                onClick={()=>{cart(item)}}
                >
                    <img 
                    className='w-5'
                    src="https://cdn-icons-png.flaticon.com/128/4379/4379542.png" alt="" />
                    <span class="ml-1">Add to cart</span></span>
            </div>
        </div>
        ))
    }
        
        
        
        </div>
        
    </div>
    </div>

    <Footer/>
    </>
  )
}

export default Coffee