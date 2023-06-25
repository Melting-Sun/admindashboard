import React from "react";
import StartFirebase from "../firebaseConfig";
import { ref, set, get, update, remove, child } from "firebase/database";

class Crud extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            db: '',
            id: '',
            username: '',
            title: '',
            dob: ''
        }
    }

    componentDidMount(){
        this.setState({
            db: StartFirebase()
        })
    }

    render(){
        return(
            <>
            </>
        )
    }

}