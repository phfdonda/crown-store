import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase"

import SignUpForm from "../../components/sign_up_form/SignUpForm"

function SignIn() {



    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
    }

    // const logUserWithEmailAndPassword = async () => {
    //     const { user } = await signInWithGooglePopup()
    //     createUserDocumentFromAuth(user)
    // }


    return (
        <>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
            {/* <button onClick={logGoogleUser}>Sign In with Google Popup</button> */}
            <SignUpForm />
        </>

    )
}

export default SignIn