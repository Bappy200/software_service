import React, {useState } from 'react'
import SideBar from '../SideBar/SideBar'

function AddService() {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handlerBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    console.log(info)

    const handlerChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handlerSubmit = (e) => {

        const formData = new FormData()
        formData.append('file', file);
        formData.append('title',info.title)
        formData.append('description',info.description)

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section>
            <div className="row">
                <div className="col-md-3">
                   <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <form onSubmit={handlerSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Service Name</label>
                            <input type="text" name='title' onBlur={handlerBlur} className="form-control" required/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Description</label>
                            <textarea type="text" name='description' onBlur={handlerBlur} className="form-control" required/>                       
                        </div>
                       
                        <div className="mb-3 form-check">
                            <input type="file"  onChange={handlerChange} className="form-input brand-button" id="exampleCheck1" />
                            
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddService
