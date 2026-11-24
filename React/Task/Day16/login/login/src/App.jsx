import { useEffect, useState } from "react";

const App = () => {

  const [data,setData] = useState({username:"",useremail:"",userpassword:""})

  const handleChange =(e)=>(

    setData((p)=>({...p,[e.target.name]:e.target.value}))

  )

  useEffect(()=>{

  },[])
  return (
    <>
      <form> // onSubmit={handleSubmit}
        <input type="text" value={data.username} name="username"  onChange={handleChange}/>
        <input type="email" value={data.useremail} name="useremail"  onChange={handleChange}/>
        <input type="password" value={data.userpassword} name="userpassword"  onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </>
  );
};

export default App;