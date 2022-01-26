import react,{useState} from "react";
import ToDoForm from "./ToDoForm";
import iconEdit from "../assets/icon-pen.svg"
import iconDelete from "../assets/icon-trash.svg"

const ToDo = ({items,removeItem, updateToItem}) =>{
    const [edit, setEdit] = useState({id:null, value:''})

    const submitUpdate = (value) =>{
        updateToItem(edit.id, value);
        setEdit({id:null, value:''});

        
    }
    if(edit.id){
        return <ToDoForm edit={edit} onSubmit={submitUpdate}/>
    }
    return items.map((item, index) => (
        <div
          className='itemRow'
          key={index}
        >
          <div key={item.id}>
            {item.item}
          </div>
          <div className='icons'>
              <button
                onClick={() => setEdit({ id: item.id, value: item.item })}
                className='editIcon'
              ><img src={iconEdit} alt="" /></button>
                <button
                onClick={() => removeItem(item.id)}
                className='deleteIcon'
                ><img src={iconDelete} alt="" /></button>
          </div>
        </div>
      ));
}
export default ToDo;