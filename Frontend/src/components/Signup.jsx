import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

function Signup() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      console.log(data); // Data will now log correctly
      document.getElementById('my_modal_3').close(); // Close the modal after successful submission
    };
  return (
    <>
    <dialog className='flex h-screen items-center justify-center'>
    <div id="my_modal_3" className="w-[600px]">
      <div className="modal-box">
        <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* if there is a button in form, it will close the modal */}
          
          <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        
        <h3 className="font-bold text-lg">Signup</h3>
        <div  className='mt-4 space-y-2'>
          <span>Name</span>
          <br/>
          <input  type="Name" 
          placeholder="Enter your Name" 
          className='w-80 px-3 border rounded-md outline-none '/>
        </div>
        <div  className='mt-4 space-y-2'>
          <span>Email</span>
          <br/>
          <input  type="email" 
          placeholder="Enter your email" 
          className='w-80 px-3 border rounded-md outline-none '
          autoComplete="email"
          {...register("email", { required: true })}/>
          <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        {/*password*/}
        <div className='mt-4 space-y-2'>
          <span>Password</span>
          <br/>
          <input 
           type="text"
           placeholder='Enter your Password'
           className='w-80 px-3 border rounded-md outline-none'
           {...register("password", { required: true })}/>
           <br />
           {errors.password && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        {/*button*/}
        <div className='flex justify-around mt-4'>
          <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
          
        <p> Have an account? <button className='text-blue-500 underline cursor-pointer' 
   
          onClick={()=>document.getElementById("my_modal_3").showModal()}
          >Login
        </button>{" "}
        <Login/>
        </p>
        </div>
        </form>
      </div>
    </div>
    </dialog>
    </>
  )
}

export default Signup