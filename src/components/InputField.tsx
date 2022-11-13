import React, { useRef } from 'react'
import "./style.css"

interface Probs {
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

// Functional component (const InputField: React.FC<Probs> = )
const InputField = ({todo, setTodo, handleAdd}: Probs) => {

    //Use Ref same as element.getElementById - we are hocking that particular component HTML
    const inputRef = useRef<HTMLInputElement>(null);

    return (
    <form className='input' onSubmit={(e)=>{
        
        handleAdd(e);
        inputRef.current?.blur();
        }}>
        <input 
        ref={inputRef}  
        type='input'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
         placeholder="Enter Task" className="input__box" />
        <button className="input__submit" type='submit'>Go</button>
        
      
    </form>
  )
}

export default InputField
