
import SignUpForm from "../../../components/form_components/sign_up/SignUpForm"
import SignInForm from "../../../components/form_components/sign_in/SignInForm"

import './Authentication.scss'

function Authentication() {


    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>

    )
}

export default Authentication