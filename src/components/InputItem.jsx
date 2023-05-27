// eslint-disable-next-line react/prop-types
const InputItem = ({placeholder, label, value, error, onChange}) => {
    const handleInputChange = (e) => {
        let newValue = e.target.value;
        //if label is not "year", then limit length to 2, else 4
        if (label !== "YEAR") {
            newValue = newValue.slice(0, 2);
        } else {
            newValue = newValue.slice(0, 4);
        }
        onChange(newValue, label);
    }

    return (
        <div className={`input__item ${error ? 'error-color' : ''}`}>
            <p className={`input__text ${error ? 'error-color' : ''}`}>{label}</p>
            <input type="number" className={`input__number ${error ? 'error-color': ''}`} placeholder={placeholder} value={value} onChange={handleInputChange} />
            <p className={`input__error ${error ? '' : 'hidden'}`}>{error}</p>
        </div>
    );
};

export default InputItem;
