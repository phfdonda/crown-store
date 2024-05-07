
import SignUpForm from "../../../components/form_components/sign_up/SignUpForm"
import SignInForm from "../../../components/form_components/sign_in/SignInForm"

import './Authentication.scss'

function Authentication() {



    // const logUserWithEmailAndPassword = async () => {
    //     const { user } = await signInWithGooglePopup()
    //     createUserDocumentFromAuth(user)
    // }


    return (
        <div className="authentication-container">
            <SignInForm></SignInForm>
            <SignUpForm />
        </div>

    )
}

export default Authentication