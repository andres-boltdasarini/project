import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {
  /*  state = {
        editMode:false,
        status:this.props.status
    }*/
    let [editMode, setEditMode] = useState(false)
    let [status,setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    },[props.status])

   /* activateEditMode = () =>{

        this.setState({
            editMode:true
            })}*/
    const activateEditMode = () => {
        setEditMode(true);
    }
  /*  deactivateEditMode(){
        this.setState({
            editMode:false
        })
    this.props.updateStatus(this.state.status)
    }*/
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
/*    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        } )
    }*/
    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
    }
   /* componentDidUpdate(prevProps, prevState,snapshot) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }}*/


            return (
                <div>
                    {!editMode && <div>
                        <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
                    </div>
                    }
                    {editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}value={status}/>
                    </div>
                    }
                </div>
            )
}
export default ProfileStatusWithHooks