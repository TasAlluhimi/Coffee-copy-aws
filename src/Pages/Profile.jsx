import React from 'react'
import Nav from '../Components/Nav'
import axios from 'axios'

function Profile() {

    const user = localStorage.getItem('user')
    const userData = JSON.parse(user)
    const [isEditing, setIsEditing] = React.useState(false);
    const [inputs, setInputs] = React.useState({
        username: '',
        email: '',
      })

    const addInputs = (event)=>{
        setInputs({...inputs,
        [event.target.name]: event.target.value
        })
    }

    const editClick = () => {
        setIsEditing(true);
      };
    
      const saveClick = () => {
        setIsEditing(false);
        axios.put(`https://657c6959853beeefdb9964e3.mockapi.io/users/${userData.id}`, {
            username: inputs.username,
            email: inputs.email
        })
        .then(res=>{
            console.log('updated');
        })
      };

      const getData=()=>{
        axios.get(`https://657c6959853beeefdb9964e3.mockapi.io/users/${userData.id}`)
        .then(res=>{
            setInputs(res.data)
        })
      }

      React.useEffect(()=>{
        getData()

    }, [])


  return (
    <>
    <Nav/>
    <div className='flex flex-col justify-center items-center gap-7'>

        <div class="bg-white overflow-hidden shadow rounded-lg border w-[80%] mt-20">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
            User Profile
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
        </p>
    </div>
    
    {isEditing ? <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Name
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input type="text" 
                    className='border w-full p-1 rounded-lg'
                    placeholder='Username' 
                    name='username'
                    value={inputs.username} 
                    onChange={addInputs}/>
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <input type="email"
                className='border w-full p-1 rounded-lg' 
                placeholder='Email' 
                name='email'
                value={inputs.email} 
                onChange={addInputs}/>
                </dd>
            </div>
           
        </dl>
        <div className='p-7'>
        <button 
        onClick={()=>{saveClick()}}
        class="md:flex md:w-auto px-4 py-2 bg-[#867070] hover:bg-[#D5B4B4] 
        text-white md:rounded">Save
    </button>
    </div>
    </div>
    :
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Name
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {inputs.username}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {inputs.email}
                </dd>
            </div>
        </dl>
       <div className='p-7'>
       <button 
        onClick={editClick}
        class="md:flex md:w-auto px-4 py-2 bg-[#867070] hover:bg-[#D5B4B4] 
        text-white md:rounded">Edit
    </button>
       </div>
    </div>
    }
    
</div>

    </div>
    </>
  )
}

export default Profile