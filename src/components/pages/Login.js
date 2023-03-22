import React from "react";
import SignUp from "./SignUp"

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
<SignUp></SignUp>

</>)
}
