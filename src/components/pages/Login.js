import React from "react";

export default function LoginDropMenu(){

        return(<>
<div className="dropdown-menu">
    <form className="px-4 py-3">
        <div className="form-group">
            <label for="exampleDropdownFormEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
        </div>
        <div className="form-group">
            <label for="exampleDropdownFormPassword1">Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
            <label className="form-check-label" for="dropdownCheck">
        Remember me
            </label>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
    <div className="dropdown-divider"></div>
    <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#signUp" href="#">Sign up</a>
</div>

<div className="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="signUpLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="signUpLabel">Register with us</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
            <form>
            <div className="form-group mb-2">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter first Name"/>
  </div>
  <div className="form-group mb-2">
    <label for="exampleInputEmail1">Surname</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Surname"/>
  </div>
  <div className="form-group mb-2">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mb-2">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group mb-2">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
</form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
</div>
</>)
}
