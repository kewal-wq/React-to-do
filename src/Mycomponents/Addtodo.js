import React, {useState} from 'react';


export const Addtodo = (props) => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
        alert("Title or Description cannot be blank");
    }
    else{
    props.addTodo(title, desc);
    settitle("");
    setdesc("");
    }
}

    return (
        <div>
            <h3 className = "text-center">Add Todo</h3>
            <form className = "container my-3">
  <div className="form-group">
    <label htmlFor="title">Todo Title</label>
    <input type="text" className="form-control" id="title" value = {title} onChange = {(e => settitle(e.target.value))}  placeholder="Add your title..."/>
    
  </div>
  <div className="form-group">
    <label htmlFor="desc">Description</label>
    <input type="text" className="form-control"value = {desc} onChange = {(e => setdesc(e.target.value))} id="desc" placeholder="Add your todo here..."/>
  </div>

  <button type="submit" className="btn btn-success" onClick = {submit}>Add Todo</button>
</form>
        </div>
    )
}
