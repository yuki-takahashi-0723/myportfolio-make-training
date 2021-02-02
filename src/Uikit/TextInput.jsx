import React from 'react'
import TextField from '@material-ui/core/TextField';
const TextInput = (props) =>{
    return(
        <TextField 
             variant="outlined"
             margin='dense'
             label={props.label} 
             fullWidth={props.fullWidth}
             required={props.required}
             multiline={props.multiline}
             rows={props.rows}
             type={props.type}
             onChange={props.onChange}
             value={props.value}
             
             />
    )
}

export default TextInput