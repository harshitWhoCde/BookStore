import React from 'react';
import Signup from './Signup';
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">LogIn</h3>
          <div className="modal-action">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className='font-bold'>Email:</label>
                <input 
                  type="email" 
                  placeholder='Enter your Email..' 
                  className='w-80 px-4 outline-none'
                 {...register("email", { required: "Email is required" })}
                 
                /><br/>
                {errors.email && <span className='text-sm text-red-700'>{errors.email.message}</span>}
                <br/><br/>
                <label className='font-bold'>Password:</label>
                <input 
                  type="password" 
                  placeholder='password' 
                  className='w-80 px-4 outline-none'
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <span className='text-sm text-red-700'>{errors.password.message}</span>}
              </div>
              <div className='flex justify-around gap-5'>
                <button 
                  type="button" 
                  className="btn bg-green-400"  
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  SignUp
                </button>
                <Signup />
                <button type="submit" className="btn btn-secondary">LogIn</button>
                <button 
                  type="button" 
                  className="btn" 
                  onClick={() => document.getElementById("my_modal_1").close()}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
