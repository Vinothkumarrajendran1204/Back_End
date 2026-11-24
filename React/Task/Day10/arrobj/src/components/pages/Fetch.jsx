import  {React, useState,useEffect} from 'react'

const Fetch =  () => {

  const [data,setData] = useState([])
  const fDatas = async()=>{
    const fetchdata = await fetch("https://dummyjson.com/products?limit=10")

    const getdata = await fetchdata.json()

    setData(getdata.products)
  }
   useEffect(() =>{
    fDatas()
   },[])
  return (
    <>
      <div className='flex flexwrap gap-2'>
        {data.map((e,i) => (
          <div key = {i}>
            <img src={e.images} alt="img" border-5 className="w-24 h-24"/>
            <h1>{e.title}</h1>
            {/* <p>{e.description}</p> */}
            <p>{e.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};
// HMR testing hfjdjfjbvhjdb v
export default Fetch;