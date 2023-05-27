// eslint-disable-next-line react/prop-types
const OutputItem = ({text}) => {
    return (
        <div className="output__item">
            <h1 className="output__number" id={text}>--</h1>
            <h1 className="output__text ">{text}</h1>
        </div>
    );
};

export default OutputItem;