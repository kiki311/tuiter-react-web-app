
// 2.3 Implementing the Labs component

// function Labs() {
//     return(
//         <div>
//             <h1>Assignment 6</h1>
//         </div>
//     );
// }
// export default Labs;

// 2.4 Breaking out assignments into separate components
//
// import Assignment6 from "./a6";
//
// function Labs() {
//     return (
//         <div>
//             <Assignment6/>
//         </div>
//     );
// }
// export default Labs;

// 2.9 Implementing a Navigation component

import Assignment6 from "./a6";
import Nav from "../nav";
function Labs() {
    return (
        <div>
            <Nav/>
            <Assignment6/>
        </div>
    );
}
export default Labs;

