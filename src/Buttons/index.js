import "./style.css";

const Buttons = ({tasks, hideDone}) => {
if(tasks.lenght ===0){
    return null
}

return (
        <div className="buttons">
        <button className={`buttons__button
        ${tasks.some(({ done }) => done ) ? "" : "disabled"}`}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button 
        className="buttons__button"
        disabled={tasks.every(({ done }) => done )}
        >
           Ukończ wszystkie
        </button>
        </div>
    )
};

export default Buttons;