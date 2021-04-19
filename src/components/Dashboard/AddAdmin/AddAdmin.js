import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import { useForm } from "react-hook-form";
function AddAdmin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        fetch('http://localhost:5000/makeAdmin',{
          method:'POST',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data =>{
          if(data){
            alert('Successfuly Add Admin')
          }
        })
    }
    return (
        <section>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label">Add Admin Email</label>
                            <input type="email" {...register("email")} className="form-control" required />
                        </div>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddAdmin
