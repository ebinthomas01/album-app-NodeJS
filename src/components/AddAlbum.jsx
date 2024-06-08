import React, { useState } from 'react'
import NavBar from './NavBar'

const AddAlbum = () => {
    const [data,setData] =useState(
        {
            "UserId":"",
            "Id":"",
            "Title":""
        }
    )

    const inputHandler = (event) => {
        setData({...data, [event.target.name]:event.target.value})
    }

    const readValue = () => {
        console.log(data)
    }


  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="label form-label">UserId</label>
                            <input type='text' className="form-control" name='UserId' value={data.UserId} onChange={inputHandler}></input>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="label form-label" >Id </label>
                        <input type='text' className="form-control"  name='Id' value={data.Id} onChange={inputHandler}></input> 
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="label form-label" >Title</label>
                        <input  type='text' className="form-control" name='Title' value={data.Title} onChange={inputHandler} ></input>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddAlbum