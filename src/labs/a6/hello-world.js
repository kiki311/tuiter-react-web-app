
// 2.5 Breaking out Hello World into a separate component

// function HelloWorld() {
//     return(
//         <h1>Hello World!</h1>
//     );
// };
// export default HelloWorld;

//
// 2.8 Navigating with links in SPAs
import {Link}
    from "react-router-dom";

function HelloWorld() {
    return(
        <div>
            <Link to="/">Lab</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link>
            <h1>Hello World!</h1>
        </div>
    )
};
export default HelloWorld;
