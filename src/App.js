

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


import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";

function App() {
    return (
        <div className="container">
            <HelloWorld/>
            <Labs/>
        </div>
    );
}
export default App;


