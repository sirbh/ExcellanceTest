import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import cssClasses from './AddButton.module.scss'

const AddButton = (props)=>{
    const top = props.top;
    return <div className = {cssClasses.AddButton} onClick = {props.onClick} style = {{top:top}}>
        <FontAwesomeIcon icon = {props.icon} size = '1x'></FontAwesomeIcon>
        {props.children}
    </div>
}

export default AddButton