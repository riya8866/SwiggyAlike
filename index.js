const heading = React.createElement("h1",{id:"heading"},"Hello World from React"); //everything inside is props
console.log(heading); //it will return an object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);//convert object into html tag and put it in DOM