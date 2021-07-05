import cssClasses from './Detail.module.scss'

const Detail = (props)=>{
    return <div className = {cssClasses.Detail}>
        <img src={props.avatar} alt="error"></img>
        <div>
            <p>Name : {props.firstName?props.firstName:"UnKnown"} {props.lastName?props.firstName:"UnKnown"}</p>
            <p>Email : {props.email?props.email:"UnKnown"}</p>
        </div>
    </div>
}

export default Detail
