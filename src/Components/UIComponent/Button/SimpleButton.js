import cssClasses from './SimpleButton.module.scss'

const SimpleButton = (props)=>{
    return <button className = {cssClasses.Button}>{props.name}</button>
}

export default SimpleButton