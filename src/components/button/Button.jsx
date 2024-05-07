import './Button.scss'

function Button({ children, buttonType, ...otherProps }) {
    const BUTTON_TYPE_CLASSES = {
        "google": "google-sign-in",
        "inverted": "inverted"
    }

    return <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
}

export default Button