import React, { useState } from 'react'
import { CgNametag } from 'react-icons/cg'
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineMailOutline, MdPassword } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'

const Register = () => {

  let [formData,setFormData]=useState({
    // username:"",
    // password:"",
    // name:"",
    // email:""
  })
    // let[repeatePassword,setRepeatePass]=useState("")

    let handelChange=(e)=>{
        let{name,value}=e.target
        //setState({...state,[name]:value})
        setFormData((preVal)=>({...preVal,[name]:value}))
    }

  let handelSubmit=e=>{
        e.preventDefault()
        console.log(formData);
        // if(state.password!=repeatePassword){
        //     alert("password and repeat password dpoes not match")
        //     return;
        // }
      }
    //     let handelPasswordCheck=(e)=>{
    //     setRepeatePass(e.target.value)
    //     console.log(repeatePassword);

    //     if(state.password!=target.value){
    //         e.target.style.borderBottom="2px solid red"
    //     }else{
    //         e.target.style.borderBottom="2px solid #999"
    //     }
        
    // }
  return (
    <div className='bg-[#efefef] size-full flex justify-center items-center'>
      <form action="" onSubmit={handelSubmit} className='w-1/2 h-[90%] rounded-3xl shadow-2xl flex justify-center items-center flex-col
      gap-5 px-[80px] max-sm:w-[90%]'>
        <div className='w-full flex justify-center items-center'>
          <h1 className='font-bold text-3xl max-lg:text-sm '>Registeration form</h1>
        </div>
        <div className='w-full flex justify-center items-center border-2 rounded-sm px-4 py-1.5'>
          <input type='text' name='name' placeholder='Enter the name' className='w-full outline-0' onChange={handelChange}/>
          <span><CgNametag/></span>
        </div>
        <div className='w-full flex justify-center items-center border-2 rounded-sm px-4 py-1.5'>
          <input type='text' name='username' placeholder='Enter the username' className='w-full outline-0' onChange={handelChange}/>
          <span><FaRegUser/></span>
        </div>
        <div className='w-full flex justify-center items-center border-2 rounded-sm px-4 py-1.5'>
          <input type='email' name='email' placeholder='Enter the email' className='w-full outline-0' onChange={handelChange}/>
          <span><MdOutlineMailOutline/></span>
        </div>
        <div className='w-full flex justify-center items-center border-2 rounded-sm px-4 py-1.5'>
          <input type='password' name='password' placeholder='Enter the password' className='w-full outline-0' onChange={handelChange}/>
          <span><RiLockPasswordLine/></span>
        </div>
        <div className='w-full flex justify-center items-center border-2 rounded-sm px-4 py-1.5'>
          <input type='password' name='' placeholder='Enter confirm-password' className='w-full outline-0' onChange={handelChange}/>
          <span><MdPassword/></span>
        </div>
        <div className='w-full flex justify-center items-center border-2 rounded-sm bg-black'>
          <button className='h-10 text-white font-bold text-md'>click</button>
        </div>
      </form>

    </div>
  )
}

export default Register