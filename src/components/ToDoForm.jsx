import react,{useState, useEffect, useRef} from "react";
import saveIcon from '../assets/icon-disk.svg'
const ToDoForm = (props) => {
    const [item, setItem]= useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })

    const handleOnSubmit = (e) =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            item: item
        })
        setItem('')
    }

    const handleOnChange = (e) =>{
        setItem(e.target.value)
    }
    return(
        <>
            <form className="formContainer" onSubmit={handleOnSubmit}>
                {props.edit ?
                <>
                    <input type="text" placeholder="Write a task" value={item} name="item" className="formInput" onChange={handleOnChange} ref={inputRef}/>
                    <button className="saveIcon"><img src={saveIcon} alt="" /></button>
                </>
                :
                <>
                    <input type="text" placeholder="Write a task" value={item} name="item" className="formInput" onChange={handleOnChange} ref={inputRef}/>
                    <button className="formButton">Add Task</button>
                </>
                }
            </form>
        </>
    )
};

export default ToDoForm