import{Link, Route, Routes} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useState , useEffect} from 'react';
import axios from 'axios';
function Home(props) {
// const { id }=useParams();
// const[ userName ,setName]=useState("");
// async function getUserName() {
//   const name = await axios.get(`http://localhost:3500/user/${id}`);
//   const user = await name.data;
//   console.log(user);
//   setName(user);
// }
// useEffect(() => { getUserName();}, [])
return(<div className='homeBody'>
     {/* <h1>Welcome {userName}</h1>
<div className='linksMenu'>
    <Link to={`/Home/toDos/${id}`}>Todos</Link>
    <Link to={`/Home/posts/${id}`}>Posts</Link>
</div>
    <Routes>
    </Routes> */}
    Home
    <Link to="/posts" >posts</Link>
    </div>
)
}
export default Home;