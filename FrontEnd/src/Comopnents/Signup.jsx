import React from 'react';
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </button>
          <h3 className="font-bold text-3xl text-pink-700">SignUP</h3>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className='font-bold'>Name:</label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder='Please enter Full name'
                className='w-80 px-4 outline-none'
              />
              {errors.name && <span className='text-sm text-red-700'>{errors.name.message}</span>}
              <br /><br />
              <label className='font-bold'>Phone Number:</label>
              <input
                {...register("number", { required: "Phone is required" })}
                type="number"
                placeholder='Mobile No.'
                className='w-80 px-4 outline-none'
              />
              {errors.number && <span className='text-sm text-red-700'>{errors.number.message}</span>}
              <br /><br />
              <label className='font-bold'>Email:</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder='Enter Your Email'
                className='w-80 px-4 outline-none'
              />
              {errors.email && <span className='text-sm text-red-700'>{errors.email.message}</span>}
              <br /><br />
              <label className='font-bold'>Password:</label>
              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                placeholder='Enter the password'
                className='w-80 px-4 outline-none'
              />
              {errors.password && <span className='text-sm text-red-700'>{errors.password.message}</span>}
              <br /><br />
              <button className="btn btn-secondary ml-20 mt-3">Submit</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Signup;
