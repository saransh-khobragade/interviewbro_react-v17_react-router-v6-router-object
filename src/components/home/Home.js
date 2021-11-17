import { Outlet, Link } from "react-router-dom";


function Home() {
  return (
    <div >
      Home
      <div>
        <Link to="/first"> First </Link>
        <Link to="/second"> Second </Link>
        <Link to="/third"> Third </Link>
      </div>
      <div style={{border:"2px solid black",margin:"10px"}}>
        <Outlet />
      </div>
      
    </div>
  );
}

export default Home;
