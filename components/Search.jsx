import React, { useState } from 'react'
import NavBar from './NavBar'

const Search = () => {
    const [data,setData] = useState(
        {
            "Album":""
        }
    )

    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue = () => {
        console.log(data)
    }


  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="label form-label">Search Album</label>
                    <input type="text" className="form-control" name='Album' value={data.Album} onChange={inputHandler}/>
                </div>    
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary" onClick={readValue}>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search