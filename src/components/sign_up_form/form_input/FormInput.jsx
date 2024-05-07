import "./FormInput.scss"

function FormInput({ label, ...otherInputs }) {
    return <div className="group">
        <input className="form-input" {...otherInputs} />
        <label className={`form-input-label ${otherInputs.value.length ? 'shrink' : ''}`} htmlFor={otherInputs.id}>{label}</label>
    </div>
}

export default FormInput