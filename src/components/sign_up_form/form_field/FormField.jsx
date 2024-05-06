
function FormField(props) {
    const { label, id, type, onChange, value, required } = props
    return <>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} onChange={onChange} value={value} required={required} />
    </>
}

export default FormField