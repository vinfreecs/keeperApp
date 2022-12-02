import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateNote";

function App(){
    const [notes,setNotes] = useState([]);

    function handleAdd(note){
        setNotes((prevValue) => {
            return[
                ...prevValue,
                note
            ];
        });
    }
    function handleDelete(id){
        setNotes((prevValue) => {
            return prevValue.filter((note,index) => {
                return id !== index;
            })
        })
    }

    return(
        <div className="body">
            <Header />
            <CreateArea handleAdd={handleAdd} />
            {notes.map((note,index) =>{
                return(
                    <Note key={index} id={index} title={note.title} content={note.content} delete={handleDelete} /> 
                );
            } )}
            <Footer/>
        </div>
    );
}

export default App;