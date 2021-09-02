import { Link } from "react-router-dom";

export const NavBar = ()=>{
    return (
        <>
            <Link to="/convictions">Convictions</Link>
            <Link to="/criminals">Criminals</Link>
            <Link to="/officers">Officers</Link>
            <Link to="/notes">Notes</Link>
            <Link to="/witnesses">Witnesses</Link>
        </>
    )
}