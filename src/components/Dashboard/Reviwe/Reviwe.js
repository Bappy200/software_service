import React from 'react'
import SideBar from '../SideBar/SideBar'
import { useForm } from "react-hook-form";

function Reviwe() {
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const reviweData = {
          name:data.name,
          description:data.description,
          companyName:data.companyName
        }
        console.log(data)
        console.log(reviweData)
  
        fetch('http://localhost:5000/reviwe',{
          method:'POST',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify(reviweData)
        })
        .then(res=> res.json())
        .then(data =>{
          if(data){
            alert('Reviwe Successfuly')
          }
        })
      };
    return (
        <section>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                    
                </div>
                <div className="col-md-9">
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label">User Name</label>
                            <input type="text"  {...register("name")}  className="form-control" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Company Name</label>
                            <input type="text"  {...register("companyName")}  className="form-control" required/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Description</label>
                            <textarea type="text" {...register("description")} className="form-control" required/>                       
                        </div>
                        <input type="submit"/>
                    </form>  
                </div>
            </div>
        </section>
    )
}

export default Reviwe
