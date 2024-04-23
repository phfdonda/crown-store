import { signInWithGooglePopup } from "../../utils/firebase/firebase"

function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
    }

    return (
        <>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In with google</button>
        </>

    )
}

export default SignIn