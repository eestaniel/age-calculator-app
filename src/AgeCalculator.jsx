import { useState } from 'react';
import InputItem from './components/InputItem.jsx';
import OutputItem from './components/OutputItem.jsx';
import SubmitButton from './components/SubmitButton.jsx';
import ValidateInput from './utils/ValidateInput.jsx';
import CalculateAge from "./utils/CalculateAge.jsx";

const AgeCalculator = () => {

    const [date, setDate] = useState({ day: '', month: '', year: '' });
    const [error, setError] = useState({ day: '', month: '', year: '' });
    const handleInputChange = (value, label) => {
        setDate(prevDate => ({ ...prevDate, [label.toLowerCase()]: value }));
    }


    const handleSubmit = (e) => {
        //reset output text
        document.getElementById('years').innerHTML = '--';
        document.getElementById('months').innerHTML = '--';
        document.getElementById('days').innerHTML = '--';

        e.preventDefault();
        const { isError, errors } = ValidateInput(date);
        setError(errors);
        if (!isError) {
            const {years, months, days} = CalculateAge(date.day, date.month, date.year);
            // update OutputItems(years, months, days)
            document.getElementById('years').innerHTML = years.toString();
            document.getElementById('months').innerHTML = months.toString();
            document.getElementById('days').innerHTML = days.toString();
            console.log(years, months, days);
        }
    }

    return (
        <div>
            <div className="container">
                <form className="input-group">
                    <InputItem placeholder={"DD"} label={"DAY"} value={date.day} error={error.day} onChange={handleInputChange} />
                    <InputItem placeholder={"MM"} label={"MONTH"} value={date.month} error={error.month} onChange={handleInputChange} />
                    <InputItem placeholder={"YYYY"} label={"YEAR"} value={date.year} error={error.year} onChange={handleInputChange} />
                    <SubmitButton onClick={handleSubmit}/>
                </form>
                <hr />
                <div className="output-group">
                    <OutputItem text="years" />
                    <OutputItem text="months" />
                    <OutputItem text="days" />
                </div>
            </div>
            <div className="attribution">
                Challenge by
                <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
                > Frontend Mentor</a
                >. Coded by <a target="blank" href="https://github.com/EEstaniel">Edwin Estaniel</a>.
            </div>
        </div>
    );
};

export default AgeCalculator;
