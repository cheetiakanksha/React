/*const heading = React.createElement("h1",{id:"heading", xyz:"abc"},"hello world");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/
//nested elements also has 2 children
/*const parent= React.createElement("div",{id:"parent"},React.createElement("div",{id:"child1"},[React.createElement("h1",{},"i'm h1 tag"),React.createElement("h2",{},"i'm h2 tag")]));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/
//nested elements also has 2 children and sub children
const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"i'm h1 tag"),React.createElement("h2",{},"i'm h2 tag")],
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"i'm h1 tag"),React.createElement("h2",{},"i'm h2 tag")]))]
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
