import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase"

function SignUpForm() {

    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    function resetFormFields() {
        setFormFields(defaultFormFields)
    }

    function handleChange(event) {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("Password and Confirm Password must be equal")
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <h1>Sign Up with your email and password</h1>
            <form onSubmit={handleSubmit} id="signUp" >
                <label htmlFor="displayName">Display Name</label>
                <input id="displayName" type="text" onChange={handleChange} name="displayName" value={displayName} required />

                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" onChange={handleChange} name="email" value={email} autoComplete="on" required />

                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={handleChange} name="password" value={password} required />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required />

                <button id="submit" type="submit" name='submit'>Submit</button>
            </form>
        </div >
    )
}

export default SignUpForm