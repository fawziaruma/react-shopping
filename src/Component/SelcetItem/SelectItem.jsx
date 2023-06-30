import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './SelectItem.css'
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const SelectItem = ({selectedItem}) => {
  const  {name , img} = selectedItem
  return (
    <div className="selectedItem" >
       <img src={img} alt="" /> 
       <p>{name}</p>
       <FontAwesomeIcon icon={faTrash} />
    </div>
  )
}

export default SelectItem