//
// 2.4 Breaking out assignments into separate components


// function Assignment6() {
//     return (
//         <div>
//             <h1>Assignment 6</h1>
//         </div>
//     );
// }
// export default Assignment6;

//
import {Link}
    from "react-router-dom";
//
// function Assignment6() {
//     return(
//         <div>
//             <Link to="/">Lab</Link> |
//             <Link to="/hello">Hello</Link> |
//             <Link to="/tuiter">Tuiter</Link>
//             <h1>Assignment 6</h1>
//         </div>
//     )
// }
// export default Assignment6;

import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput
    from "./conditional-output";
import TodoList
    from "./todo/todo-list.js";




function Assignment6() {
    return (
        <div>
            <Link to="/">Lab</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link>|

            <h1>Assignment 6</h1>
            <ConditionalOutput/>
            <TodoList/>

            <Styles/>
            <Classes/>
        </div>
    );
}
export default Assignment6;

