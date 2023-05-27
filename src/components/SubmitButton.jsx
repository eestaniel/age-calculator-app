
// eslint-disable-next-line react/prop-types
const SubmitButton = ({ onClick }) => {
    return (
        // eslint-disable-next-line react/no-unknown-property
        <button className="button" datatype={"icon"} onClick={onClick} aria-label="Submit Button">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
        </button>
    );
};

export default SubmitButton;