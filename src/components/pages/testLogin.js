import React, { Component } from "react";


let loginIn = false;

class Form extends Component {
    state = {
    firstName: "",
    };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Hello ${this.state.firstName} ${this.state.surname}`);
            this.setState({
              firstName: "",
              surname: "",
        
            
            });
        };

    

  render() {
    if (loginIn === false) {

    return (
<div className="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="signUpLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content"> 
            <div className="modal-header">
                <h5 className="modal-title" id="signUpLabel">Register with us {this.state.firstName}</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form className="form">
                    <label for="exampleInputFirstName">First Name</label>
                    <div className="form-group mb-2">
                        <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                        />
                    </div>
                    
                    <label for="exampleInputSurname">Surname</label>
                    <div className="form-group mb-2">
                    <input
                    value={this.state.surname}
                    name="surname"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Last Name"
                    />
                    </div>
                    <label for="exampleInputEmail1">Email</label>
                    <div className="form-group mb-2">
                    <input
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChange}
                    type="email"
                    placeholder="Email"
                    />
                    </div>
                    <label for="exampleInputPassword">Password</label>
                    <div className="form-group mb-2">
                    <input
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
                    type="password"
                    placeholder="password"
                    />
                    </div>
                    <label for="exampleInputPasswordConfirm">Confirm your password</label>
                    <div className="form-group mb-2">
                    <input
                    value={this.state.passwordConfirm}
                    name="email"
                    onChange={this.handleInputChange}
                    type="password"
                    placeholder="Password confirmation"
                    />
                    </div>
                </form>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button onClick={this.handleFormSubmit} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>)

}else if (loginIn === true){

return (
    <div className="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="signUpLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content"> 
            <div className="modal-header">
                <h5 className="modal-title" id="signUpLabel">Register with us {this.state.firstName}</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            </div></div></div>


)
}
}
}

export default Form;