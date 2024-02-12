const parent=React.createElement("div",{id:"parent"},
     React.createElement("div",{id:"child"}, [React.createElement("h2",{},   "i am H1 Tag"),
     React.createElement("h1",{},   "i am H2 Tag")]));

     console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);