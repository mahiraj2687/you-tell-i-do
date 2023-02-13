import {Component} from "react"
import {Link} from "react-router-dom"
import "./index.css"


class MasterLogin extends Component {
    state={userInput:"",passwordInput:""}

    onChangeUserName=(event)=>{
        this.setState({userInput:event.target.value})
    }

    onChangePassword=(event)=>{
        this.setState({passwordInput:event.target.value})
    }

    onLogin=()=>{
        const {userInput,passwordInput}=this.state

        const todoList=localStorage.getItem("todoList")
        const parsedList=JSON.parse(todoList)

        const userDetails={
            userName:userInput,
            password:passwordInput
        }

        let isUserFound=false

        for (let user of parsedList){
            if (user.userName===userDetails.userName && user.password===userDetails.password){
                isUserFound=true
            }
        }

        if (isUserFound){
            const {history} =this.props
            history.push("/masterpage")
        }else{
            alert("UserNotFound")
        }

    }

    

    render(){
        const{userInput,passwordInput}=this.state
    return (
        <div className="master_login_container">
            <h1 className="signupSuccess">Login to here to Continue..</h1>
            <form  className="form" id="form">
                <label  className="label" for="userName">User Name</label>
                <input className="input" id="userName" value={userInput} onChange={this.onChangeUserName} type="text" placeholder="Enter Your User Name"/>
                <label className="label" for="password">Password</label>
                <input className="input" id="password" value={passwordInput} onChange={this.onChangePassword} type="password" placeholder="Enter Your Password"/>
                <div className="signinButtonContainer">
                <button className="signinButton" onClick={this.onLogin}>Log in</button>
                </div>
            </form>
            <p className="requestLogin"> If you have already have an account <Link to="/masterlogin"><span className="login">login here</span></Link></p>
        </div>
    )
}
}

export default MasterLogin