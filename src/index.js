import React from 'react';
import ReactDOM from 'react-dom';

class LoginButton extends React.Component{
   
   
    render(){
        return (
            <div>
                <form>
                 Please Login: <br/><br/>
                 UserName <input type="text" name="fname"/><br/>
                 Password: <input type="password" name="lname"/><br/>
                </form>
            <button>Login</button>
            </div>
        )
    }
}

class LogoutButton extends React.Component{
  
    render(){
        return (
            <button>Logout</button>
        )
    }
}
class LoginControl extends React.Component{
    render(){
        // let btnType=""
        // this.props.status? btnType=<LoginButton/>:btnType=<LogoutButton/>
        // return (btnType)
    //OR

        return (
            <div>
            {
                this.props.status? (
                    <LoginButton/>
                ):(
                    <LogoutButton/>
                )
            }

         </div>
        )
       
    }
}
ReactDOM.render(
    <LoginControl status={false}/>,
    document.getElementById("root")
)