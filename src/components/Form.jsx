import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react'
import { Table } from './Table.jsx';

export const Form = () => {
       var count = 0
    let [form , setform ] = useState({})
    
    let [allformdata , setdata] = useState([])

   let [dep , depfilter] = useState("")
   let [salarysort , setsort] = useState("")
    
let handleform = (e)=>{
    let {name ,type, value , checked , files } = e.target
      

    if(type==="checkbox"){
      setform({
        ...form,
        [name]:value
    })
    }
    else if(type==="file"){
      setform({
        ...form,
        [name]:files[0]
    })
    }
    else{
     setform({
        ...form,
        [name]:value
    })
    }
    
} 
    let deleteform = (value)=>{
   setdata(allformdata.filter((e,i)=>i!=value))
}






let submitdata = (e)=>{

    e.preventDefault()
    setdata([...allformdata , form])
    count++

}
  
let sort = (value)=>{
if(value === "asc"){
     let x = allformdata.sort((a,b)=>(b.Salary - a.Salary))
     setdata(x)
}
if(value === "des"){
   let x =  allformdata.sort((a,b)=>(a.Salary - b.Salary))
     setdata(x)
}
  }

  
useEffect(()=>{
    sort(salarysort)
},[salarysort])


  return (
    <div>
        <h1>Form</h1>
        <div>
            <form onSubmit={submitdata}>
                <input onChange={handleform} name="Name" type="text" placeholder='Enter Name' />
                <br />
                <input onChange={handleform} name="Age" type="number" placeholder='Enter Age'/>
                <br />
                <input onChange={handleform} name="Address" type="text" placeholder='Enter Address'/>
                <br />
                <select onChange={handleform} name="Department" id="">
                    <option value="Department">Department</option>
                    <option value="university">university</option>
                    <option value="business"> business</option>
                    <option value="shop"> shop</option>
                </select>
                <br />
                <input onChange={handleform} name="Salary" type="number" placeholder='Enter Salary'/>
                <br />
                <input onChange={handleform} name="marital" type="checkbox" value="Uttar Pradesh" check="Uttar Pradesh"/><label>Uttar Pradesh</label>
                <br />
                <input onChange={handleform} name="marital" type="checkbox" value="Delhi" check="Uttar Pradesh"/><label>Delhi</label>
                <br />
                <input onChange={handleform} name="marital" type="checkbox" value="Mumbai" check="Uttar Pradesh"/><label>Mumbai</label>
                <br />
                <input onChange={handleform} name="photo" type="file" placeholder='Enter Salary'/>
                <br />
                <input type="submit" />
            </form>
        </div>
        <label>Search Department:
            <input onChange={(e)=>{depfilter(e.target.value)}}></input>
        </label>
     <label>Sort Salary:</label><select onChange={(e)=>{setsort(e.target.value)}} >
         <option value="">Choose</option>
         <option value="asc">Low to high</option>
         <option value="des">High to low</option>
        
     </select>
        <Table dep={dep}  count={count} allformdata={allformdata} deleteform ={deleteform}></Table>
    </div>
  )
}
