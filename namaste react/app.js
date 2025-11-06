/**
 * 
 * <div id="parent">
 * <div id="child">
 * <h1>I'm an H1 tag</h1> //if two h tag,then put it an array format
 * <h2>I'm an H2 tag</h2>
 * </div>
 */

const parent = React.createElement("div",
    {id:"parent"},[
    React.createElement( "div",{id:"child"},[
    React.createElement("h1",{id:"title"},"I'm an h1 tag"),
    React.createElement("h2",{className:"heading"},"I'm an h2 tag"),
    
]),
 React.createElement( "div", {id:"child2"},[
    React.createElement("h1",{id:"title"},"I'm an h1 tag"),
    React.createElement("h2",{className:"heading"},"I'm an h2 tag"),
        ]),

]);


console.log(parent);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
