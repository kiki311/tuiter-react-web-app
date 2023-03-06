

// 2.1 Implementing Single Page Applications
// function App() {
//     return (
//         <h1>Hello World!</h1>
//     );
// }
// export default App;

// 2.3 Implementing the Labs component
// import Labs from "./labs";
// function App() {
//     return (
//         <div className="container">
//             <h1>Hello World!</h1>
//             <Labs/>
//         </div>
//     );
// }
// export default App;

// 2.5 Breaking out Hello World into a separate component

//
// import Labs from "./labs";
// import HelloWorld from "./labs/a6/hello-world";
//
// function App() {
//     return (
//         <div className="container">
//             <HelloWorld/>
//             <Labs/>
//         </div>
//     );
// }
// export default App;

// 2.6 Creating a Tuiter placeholder component
//
// import Labs from "./labs";
// import HelloWorld from "./labs/a6/hello-world";
// import Tuiter from "./tuiter";
//
// function App() {
//     return (
//         <div className="container">
//             <HelloWorld/>
//             <Labs/>
//             <Tuiter/>
//         </div>
//     );
// }
// export default App;


import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

// function App() {
//     return (
//         <BrowserRouter>
//             <div className="container">
//                 <HelloWorld/>
//                 <Labs/>
//                 <Tuiter/>
//             </div>
//         </BrowserRouter>
//     );
// }
// export default App;


function App() {
    return (
        // <BrowserRouter>
        //     <div className="container">
        //         <Routes>
        //             <Route path="/labs"
        //                    element={<Labs/>}/>
        //             <Route path="/hello"
        //                    element={<HelloWorld/>}/>
        //             <Route path="/tuiter"
        //                    element={<Tuiter/>}/>
        //         </Routes>
        //     </div>
//         </BrowserRouter>
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index
                           element={<Labs/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter/*"
                           element={<Tuiter/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;




