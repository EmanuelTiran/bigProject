import { Link } from 'react-router-dom'
function Home(props) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    console.log(currentUser);

    return (<div className='homeBody'>

        Home <br />
        <h1>Welcome, {currentUser ? currentUser.username : 'Guest'}</h1>
        <Link to="/posts" >posts</Link>
    </div>
    )
}
export default Home;