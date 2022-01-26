import react,{useState} from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
const ToDoList = () =>{
    const [items, setItems] = useState([]);

    const addItem = (item) =>{
        if(!item.item){
            return;
        }

        const newItems = [item, ...items];

        setItems(newItems);
        console.log(...items)
    }

    const updateToItem = (itemId, newValue) =>{
        if(!newValue.item){
            return;
        }

        setItems(prev => prev.map(i => (i.id === itemId ? newValue : i)))
    }

    const removeItem = id => {
        const removedArr = [...items].filter(item => item.id !== id);
    
        setItems(removedArr);
    };


    
    console.log(items)

    return(
        <div>
            <h1>
                LKMX - FRONT-END
            </h1>
            <ToDoForm onSubmit={addItem}/>
           {
               items.length ? 
               <ToDo
               items={items}
               removeItem={removeItem}  
               updateToItem={updateToItem}/>
               : 
               <div className="noTask">
                   <h3>There are not tasks</h3>
               </div>
           }
            
               
                
            
            
        </div>
    )
}
export default ToDoList;