import cssClasses from './BackDrop.module.scss'

const BackDrop = (props)=>{
    return <div className = {cssClasses.BackDrop}  onClick = {props.onClick}> 
        {props.children}
    </div>
}

export default BackDrop