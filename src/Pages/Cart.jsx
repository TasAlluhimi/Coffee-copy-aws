import React from 'react'
import axios from 'axios'
import Nav from '../Components/Nav'

function Cart() {

    if (!localStorage.getItem('isLogged')) {
        window.open('/SignIn', '_self')
    } 

    const [data, setData] = React.useState([])
    const user = localStorage.getItem('user')
    const userData = JSON.parse(user)

    const [] = React.useState([])
    React.useEffect(()=>{
        getData()

    }, [])

    const getData = ()=>{
         axios.get(`https://657c6959853beeefdb9964e3.mockapi.io/cart`)
    .then(res=>{
        console.log(res.data);
        const filtered = res.data.filter((item)=>
        item.userId === userData.id
        )
        setData(filtered)
    })
    }

    const del = (id)=>{
        axios.delete(`https://657c6959853beeefdb9964e3.mockapi.io/cart/${id}`)
        .then(res=>{
            getData()
        })
    }


  return (
    <>
    <Nav/>
        <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 class="text-2xl font-bold my-4">Shopping Cart</h1>
        <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
      Checkout
    </button>
    </div>
    <div class="mt-8">
       
        {data.map((item)=>(
            <div class="flex flex-col md:flex-row border-b border-gray-400 py-4">
            <div class="flex-shrink-0">
                <img src={item.image} alt="Product image" class="w-32 h-32 object-cover"/>
            </div>
            <div class="mt-4 md:mt-0 md:ml-6">
            
                <div class="mt-4 flex items-center">
                    <span class="mr-2 text-gray-600">Quantity:</span>
                    <div class="flex items-center">
                        <button class="bg-gray-200 rounded-l-lg px-2 py-1" onClick={()=>{del(item.id)}}>-</button>
                        <span class="mx-2 text-gray-600">1</span>
                        <button class="bg-gray-200 rounded-r-lg px-2 py-1" disabled>+</button>
                    </div>
                    <span class="ml-auto font-bold">$15.00</span>
                </div>
            </div>
        </div>
        ))}

    </div>
    {/* <div class="flex justify-end items-center mt-8">
        <span class="text-gray-600 mr-4">Subtotal:</span>
        <span class="text-xl font-bold">$35.00</span>
    </div> */}
</div>
    </>
  )
}

export default Cart