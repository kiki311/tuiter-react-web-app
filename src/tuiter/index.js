
// 2.6 Creating a Tuiter placeholder component

// function Tuiter() {
//     return(
//         <div>
//             <h1>Tuiter</h1>
//         </div>
//     );
// }
// export default Tuiter


import {Link}
    from "react-router-dom";

function Tuiter() {
    return(
        <div>
            <Link to="/">Lab</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link>
            <h1>Tuiter</h1>
        </div>
    )
}
export default Tuiter