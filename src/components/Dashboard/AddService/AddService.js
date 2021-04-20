import React, {useState } from 'react'
import SideBar from '../SideBar/SideBar'
import axios from 'axios'
import { useForm } from "react-hook-form";
function AddService() {

    const [imageUrl, setImageUrl] = useState(null);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const handlerBlur = e => {
    //     const newInfo = { ...info };
    //     newInfo[e.target.name] = e.target.value;
    //     setInfo(newInfo);
    // }
    // console.log(info)

    // const handlerChange = e => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // }
    const handleImage = event =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key','c6f69c82a87dbc1c22b619fef2b40b37')
        imageData.append('image',event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then((response) => {
            console.log('image url out : ',response.data.data.display_url)
            setImageUrl(response.data.data['display_url']);
            
            console.log(response)
            console.log(imageUrl)
          }, (error) => {
            console.log(error);
          });
    }

    const onSubmit = data => {
        const eventData = {
          imageUrl,
          title:data.title,
          description:data.description,
          price:data.price
        }
        console.log(data)
        console.log(eventData)
  
        fetch('https://calm-basin-96440.herokuapp.com/addService',{
          method:'POST',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify(eventData)
        })
        .then(res=> res.json())
        .then(data =>{
          if(data){
            alert('Data inserted')
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
                            <label className="form-label">Service Name</label>
                            <input type="text" name='title' {...register("title")}  className="form-control" required/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Description</label>
                            <textarea type="text" {...register("description")} name='description'  className="form-control" required/>                       
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Price</label>
                            <textarea type="number" {...register("price")} name='price'  className="form-control" required/>                       
                        </div>
                       
                        <div className="mb-3 form-check">
                            <input type="file"  onChange={handleImage} className="form-input" />
                            
                        </div>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddService
