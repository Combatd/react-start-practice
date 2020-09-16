import { useState } from 'react';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const doSubmitForm = (e) => {
        e.preventDefault();
        console.log(email, password)
    }


    return(
        <div>
            <h1>this is the signup page</h1>
            <form onSubmit={doSubmitForm}>
                <input name='email' type='text' onChange={(e) => setEmail(e.target.value)} />
                <input 
                    name='password' 
                    type='password' 
                    onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' >SUBMIT</button>
            </form>
        </div>
    )
}

export default Signup;