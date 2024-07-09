import { useState,useEffect } from 'react'


function App() {
  const [data, setdata] = useState([])
  const [originalData, setdata2] = useState([])
  console.log(data);
  useEffect(() => {
function getApi() {
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((success)=>{
    var data = success.products
    // console.log(data);
    setdata(data)
    setdata2(data)
  })  
}
getApi() 

}, [])
function handleSearch(e){
  let arry = originalData.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
  setdata(arry)
}


  return (
    <>
    <input placeholder='search'onChange={e => handleSearch(e)} style={{border:'1px solid gray'}}></input>
     {data.map((item,idx)=>{
      return(
        <>
        <div style={{ border: '1px solid gray'}}>
          <h1>{item.users}</h1>
          <h1>{item.title}</h1> 
         <p>{item.description}</p>
         <img src={item.thumbnail} style={{height:'100px', width:'100px'}} />
        </div>
        </>
      )
     })}
    </>
  )
}

export default App