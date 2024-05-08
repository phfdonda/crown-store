import { useState, useContext } from "react"
import { createUserDocumentFromAuth, signInUserWithEmailAndPassword, signInWithGooglePopup, onAuthStateChangedListener } from "../../../utils/firebase/firebase"
import './SignInForm.scss'
import FormInput from "../form_input/FormInput"
import Button from "../../button/Button"

function SignInForm() {

    const defaultFormFields = {
        email: '',
        password: '',
    }


    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    function resetFormFields() {
        setFormFields(defaultFormFields)
    }

    function handleChange(event) {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const { user } = await signInUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                alert('User not found')
            }
            console.log(error)
        }

    }


    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }


    return (
        <div className="sign-in-container">
            <h2>Don't have an account?</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit} id="signIn" >

                <FormInput label="E-mail" name="email" id="email´_sign_in" type="email" onChange={handleChange} value={email} required />
                <FormInput label="Password" name="password" id="password_sign_in" type="password" onChange={handleChange} value={password} required />
                <div className="buttons-container">
                    <Button id="submit_sign_in" type="submit" name='submit'>Submit</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>

            </form>
        </div >
    )
}

export default SignInForm