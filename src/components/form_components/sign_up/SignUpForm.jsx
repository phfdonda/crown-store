import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase/firebase"
import './SignUpForm.scss'
import FormInput from "../form_input/FormInput"
import Button from "../../button/Button"

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
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit} id="signUp" >

                <FormInput label="Display Name" name="displayName" id="displayName" type="text" onChange={handleChange} value={displayName} required />
                <FormInput label="E-mail" name="email" id="email_sign_up" type="email" onChange={handleChange} value={email} required />
                <FormInput label="Password" name="password" id="password_sign_up" type="password" onChange={handleChange} value={password} required />
                <FormInput label="Confirm Password" name="confirmPassword" id="confirmPassword" type="password" onChange={handleChange} value={confirmPassword} required />

                <Button id="submit_sign_up" type="submit" name='submit'>Sign Up</Button>
            </form>
        </div >
    )
}

export default SignUpForm