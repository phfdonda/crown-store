import './Button.scss'

function Button({ children, buttonType, ...otherProps }) {
    if (!buttonType) buttonType = ''

    return <button className={`button-container ${buttonType}`} {...otherProps}>{children}</button>
}

export default Button