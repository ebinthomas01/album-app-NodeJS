import React, { useState } from 'react'
import NavBar from './NavBar'

const Search = () => {
    const [data,setData] = useState(
        {
            "Album":""
        }
    )

    const [result, setResult] = useState([])
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue = () => {
        
    console.log(data)
    axios.post("http://localhost:8081/search", data).then(
      (response) => {
        setResult(response.data)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    ).finally()
    }
    const deleteCourse = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8081/delete", input).then(
          (response) => {
            console.log(response.data)
            if (response.data.status == "success") {
              alert("Successfully Removed")
            }
            else {
              alert("Error cause in Deletion")
            }
          }
        ).catch().finally()
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
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>

                  <th scope="col">ID</th>
                  <th scope="col">USERID</th>
                  <th scope="col">TITLE</th>
      
                </tr>
              </thead>
              <tbody>
                {
                  result.map(

                    (value, index) => {
                      return <tr>

                        <td>{value.id}</td>
                        <td>{value.userId}</td>
                        <td>{value.title}</td>
                        <td> <button className="btn btn-danger" onClick={() => { deleteCourse(value._id) }}>DELETE</button>  </td>
                      </tr>

                    }
                  )
                }
              </tbody>
            </table>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Search