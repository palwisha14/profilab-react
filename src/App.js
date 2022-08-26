import React from "react";
import Navbar from "./component/navbar.js"
import Header from "./component/header.js"
import Main from "./component/main.js"
import Footer from "./component/footer"

class App extends React.Component{
    render(){
        return(
            <>
            <Navbar/>
            <Header/>
            <Main/>
            <Footer/>
            </>
        )
    }
}
export default App