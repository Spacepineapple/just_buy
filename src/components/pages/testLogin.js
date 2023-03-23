import { useState } from 'react';

export default function Form(){

    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('');
    const [pwd2, setPwd2] = useState('');
    
    const [signedIn, setSignedIn] = useState(false);

  const handleSubmit = async (e) => {
        e.preventDefault();
        setFirstName(firstName);
        setSurname(surname);
        setEmail(email);
        setPwd(pwd);
        setPwd2(pwd2);
        setSignedIn(false);
    }
  
    const handleInputChange = async (e) => {
        e.preventDefault();
        setFirstName("");
        setSurname("");
        setEmail("");
        setPwd("");
        setPwd2("");
        setSignedIn(true);
        }


        return(<>
        {signedIn ? (

<div className="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="signUpLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
    <div className="modal-content"> 
        <div className="modal-header">
            <h5 className="modal-title" id="signUpLabel">Register with us</h5>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div></div></div></div>
        
        ) : (
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
                <form className="form">
                    <label for="exampleInputFirstName">First Name</label>
                    <div className="form-group mb-2">
                        <input
                        className="form-control"
                         type="text"
                         onChange={(e) => setFirstName(e.target.value)}
                         value={firstName}
                         required
                        placeholder="First Name"
                        />
                    </div>
                    
                    <label for="exampleInputSurname">Surname</label>
                    <div className="form-group mb-2">
                    <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setSurname(e.target.value)}
                    value={surname}
                    required
                   placeholder="Last Name"
                    />
                    </div>
                    <label for="exampleInputEmail1">Email</label>
                    <div className="form-group mb-2">
                    <input
                    className="form-control"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    placeholder="Email"
                    />
                    </div>
                    <label for="exampleInputPassword">Password</label>
                    <div className="form-group mb-2">
                    <input
                    className="form-control"
                    type="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                   placeholder="password"
                    />
                    </div>
                    <label for="exampleInputPasswordConfirm">Confirm your password</label>
                    <div className="form-group mb-2">
                    <input
                    className="form-control"
                    type="password"
                    onChange={(e) => setPwd2(e.target.value)}
                    value={pwd2}
                    required
                   placeholder="password confirmation"
                    />
                    </div>
                </form>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button onClick={handleInputChange} type="button" className="btn btn-secondary" >Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>)}

        </>)
    
    }