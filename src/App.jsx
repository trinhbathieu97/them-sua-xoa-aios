import React, {useEffect, useState} from 'react';
import { Modal } from 'antd';

import {ListUser} from './components/ListUser'
import {AddUserForm} from './components/AddUserForm'

import 'antd/dist/antd.css'
import './App.css';
import axios from 'axios';

function App() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [state,setState] = useState([])
    const [list,setList] = useState({id:"", avatar: "", name: "", description: ""})
    const [edit,setEdit] = useState(null)

    useEffect( async() => {
        try {
            const res = await axios.get("https://5d36d86c86300e0014b647c7.mockapi.io/users")
                await setState(res.data)
                
        } catch (error) {
            console.log(error)
        }
    }, []);
    // su kien Add =============
    const Add = async() =>{
        try {
            const res = await axios.post("https://5d36d86c86300e0014b647c7.mockapi.io/users",list)
            await setState([res.data,...state])
            handleCancel()
        } catch (error) {
            console.log(error)
        }
    }
    // ================
    // suu kien xoa delete
    const Delete = async(item)=>{
        try {
            await axios.delete(`https://5d36d86c86300e0014b647c7.mockapi.io/users/${item}`)
            const NewStateDelete = state.filter(x => x.id !== item)
            setState(NewStateDelete)
        } catch (error) {
            console.log("loi")
        }
    }

    // su kien Edit sua===============
        const Edit =  (item) =>{
            handleOpenModal()
            setEdit(item)
        }

        const updateItem = async () => {
            try {
                const NewState = [...state]
           const indexState = NewState.findIndex(x => x.id === list.id)
           const res = await axios.put(`https://5d36d86c86300e0014b647c7.mockapi.io/users/${list.id}`, list)
           NewState[indexState] = res.data
           await setState([...NewState])
           handleCancel()

            } catch (error) {
                alert("loi")
            }
           
        }
        // =======================

      
    const AddEdit = () =>{ 
        switch (list.id) {
            case "":
                Add()
                break
            default:
                updateItem()
        }
    }
        
    
    
// ==================== bat tat menu
    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    return (
        <div className="App">
            <h2>List user</h2>
            <div className="header-add-user">
                <button className="ant-btn ant-btn-primary" onClick={handleOpenModal}>
                    Add New User
                </button>
            </div>
            <ListUser 
            state = {state}
            Edit = {Edit}
            Delete = {Delete}
            />
            <Modal title="Basic Modal" visible={isModalVisible} footer={null} onCancel={handleCancel}>
                <AddUserForm 
                setList = {setList}
                AddEdit = {AddEdit}
                edit = {edit}
                />
            </Modal>
        </div>
    );
}

export default App;
