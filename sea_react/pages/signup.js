function Signup() {
    const doSubmitForm = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <h1>this is the signup page</h1>
            <form onSubmit={doSubmitForm}>
                <input name='email' type='text' />
                <input name='password' type='password' />
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}

export default Signup;