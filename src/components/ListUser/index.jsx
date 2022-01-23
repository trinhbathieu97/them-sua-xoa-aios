import './ListUser.css'

export const ListUser = ({state,Edit,Delete}) => {
          
         const Sua = (id)=>{
                Edit(id)
         }
         const Xoa =(id)=>{
             Delete(id)
         }


    return <div className="ant-list-items">
       {
           state.map(item =>  <div className="ant-list-item" key = {item.id}>
           <div className="ant-list-item-meta">
               <div className="ant-list-item-meta-avatar">
                   <span className="ant-avatar ant-avatar-circle ant-avatar-image">
                       <img src={item.image}/>
                   </span>
               </div>
               <div className="ant-list-item-meta-content">
                   <h4 className="ant-list-item-meta-title">
                       <a>{item.name}</a>
                   </h4>
                   <div className="ant-list-item-meta-description">
                     {item.description}
                   </div>
               </div>
               <ul  className="ant-list-item-action">
                   <li>
                       <a onClick={()=>Sua(item)}>Edit</a>
                   </li>
                   <li>
                       <a onClick={()=>Xoa(item.id)}>Remove</a>
                   </li>
               </ul>
           </div>
       </div>)
       }
    </div>
}