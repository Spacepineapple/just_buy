// import React, { Component } from "react"
// class SignUp extends Component() {

//     state = {
//         firstName: "",
//         surname: "",

//       };
    
//       handleInputChange = event => {

//         const { name, value } = event.target;
    
//         this.setState({
//           [name]: value
//         });
//       };
    
//       handleFormSubmit = event => {
//         event.preventDefault();
    
//         alert(`Hello ${this.state.firstName} ${this.state.surname}`);
//         this.setState({
//           firstName: "",
//           surname: "",
        
//         });
//       };

//     render(){

// return(
    
// <div className="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="signUpLabel" aria-hidden="true">
// <div className="modal-dialog" role="document">
//     <div className="modal-content">
//         <div className="modal-header">
//             <h5 className="modal-title" id="signUpLabel">Register with us</h5>
//             <p>
//           Hello {this.state.firstName} {this.state.surname}
//         </p>
//             <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//             </button>
//         </div>
//         <div className="modal-body">
//         <form>
//         <div className="form-group mb-2">
// <label for="exampleInputEmail1">First Name</label>
// <input 
// value={this.state.firstName}
// name="firstName"
// onChange={this.handleInputChange}
// type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter first Name"/>
// </div>
// <div className="form-group mb-2">
// <label for="exampleInputEmail1">Surname</label>
// <input 
// value={this.state.surname}
// name="surname"
// onChange={this.handleInputChange}
// type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Surname"/>
// </div>
// {/* <div className="form-group mb-2">
// <label for="exampleInputEmail1">Email address</label>
// <input 
// value={this.state.email}
// name="email"
// onChange={this.handleInputChange}
// type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
// <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
// </div>
// <div className="form-group mb-2">
// <label for="exampleInputPassword1">Password</label>
// <input 
// value={this.state.password}
// name="password"
// onChange={this.handleInputChange}
// type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
// </div>
// <div className="form-group mb-2">
// <label for="exampleInputPassword1">Confirm Password</label>
// <input 
// value={this.state.passwordConfirmation}
// name="passwordConfirmation"
// onChange={this.handleInputChange}
// type="password" className="form-control" id="exampleInputPassword2" placeholder="Password"/>
// </div> */}
// </form>
//         </div>
//         <div className="modal-footer">
//             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
//             <button onClick={this.handleFormSubmit} type="button" className="btn btn-primary">Save</button>
//         </div>
//     </div>
// </div>
// </div>

// )
// }}

// export default SignUp;