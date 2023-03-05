
// 2.6 Creating a Tuiter placeholder component


// function Tuiter() {
//     return(
//         <div>
//             <h1>Tuiter</h1>
//         </div>
//     );
// }
// export default Tuiter

// 2.8 Navigating with links in SPAs

// import {Link}
//     from "react-router-dom";
//
// function Tuiter() {
//     return(
//         <div>
//             <Link to="/">Lab</Link> |
//             <Link to="/hello">Hello</Link> |
//             <Link to="/tuiter">Tuiter</Link>
//             <h1>Tuiter</h1>
//         </div>
//     )
// }
// export default Tuiter

// 2.9 Implementing a Navigation component

import Nav from "../nav";
function Tuiter() {
    return (
        <div>
            <Nav/>
            <h1>Tuiter</h1>
        </div>
    )
}
export default Tuiter