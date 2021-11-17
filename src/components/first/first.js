import { Outlet, Link } from "react-router-dom";

function First() {
    return (
        <div >
            First<br/>
            <Link to="/first/firstchild1/10"> First Child 1</Link><br/>
            <Link to="/first/firstchild2/20"> Second Child 2 </Link><br/>
            <Link to="/first/firstchild3/30"> Third Child 3</Link><br/>
            <div style={{ border: "1px solid black", margin: "10px" }}>
                <Outlet />
            </div>
        </div>
    );
}

export default First;
