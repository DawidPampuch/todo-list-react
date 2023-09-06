import "./style.css";

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone}) => {
if(tasks.lenght ===0){
    return null
}

return (
        <div className="buttons">
        <button onClick={toggleHideDone} className={`buttons__button
        ${tasks.some(({ done }) => done ) ? "" : "disabled"}`}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button 
        onClick={setAllDone}
        className="buttons__button"
        disabled={tasks.every(({ done }) => done )}
        >
           Ukończ wszystkie
        </button>
        </div>
    )
};

export default Buttons;