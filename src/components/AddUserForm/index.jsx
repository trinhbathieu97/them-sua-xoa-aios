import React,{useState,useEffect} from "react";


export const AddUserForm = ({setList,AddEdit,edit}) => {
    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState("")
    const [description, setDescription] = useState("")
    const [id, setId] = useState("")


    useEffect (()=>{
        if(edit){
            setName(edit.name)
            setAvatar(edit.avatar)
            setId(edit.id)
            setDescription(edit.description)
        }
       
    },[edit])

    useEffect(()=>{
        setList({id:id, avatar: avatar, name:name, description:description})
    },[avatar,name,description])
    

      const itemAvata = (e)=>{
            setAvatar(e.target.value)
           
      }
      const itemName = (e) =>{
            setName(e.target.value)
      }
      const itemDescription = (e) =>{
            setDescription(e.target.value)
      }
    
    return <div>
        <div className="field-input-group">
            <input onChange={itemAvata} value={avatar} placeholder="Avatar" type="text" className="ant-input" />
        </div>
        <div className="field-input-group">
            <input onChange={itemName} value={name} placeholder="Name" type="text" className="ant-input" />
        </div>
        <div className="field-input-group">
            <input onChange={itemDescription} value={description} placeholder="Content" type="text" className="ant-input" />
        </div>
        <div className="modal-new-user-footer">
            <button onClick={AddEdit} className="ant-btn ant-btn-primary">
                Save 
            </button>
            <button className="ant-btn" style={{marginLeft: 10}}>
                Cancel
            </button>
        </div>
    </div>
}
