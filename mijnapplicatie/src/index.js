import React from "react";
import ReactDOM from "react-dom/client";
class Stad extends React.Component {
    render() {
        return <p>Mijn favoriete stad is "#stad"</p>;
    }
}
class Boek extends React.Component {
    render() {
        return <p>Mijn favoriete boek is "#boek"</p>;
    }
}
const div = document.getElementById("div");
const root = ReactDOM.createRoot(div);
root.render(<><Stad /><Boek /></>);