import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const FormDialog = (props) =>{
    console.log(props)

    return(
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'開発の詳細'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            使用技術<br></br> 
           <a href={props.giturl} target='_blank'>github code</a>
            <ul>
               {
                   props.usetecs.map((tec,index)=>{
                       return <li key={index.toString()}>{tec}</li>
                   })
               }
            </ul>
            スタイル 
            <ul>
               {
                   props.styles.map((style,index)=>{
                       return <li key={index.toString()}>{style}</li>
                   })
               }
            </ul>
            拘ったポイント 
            <ul>
               {
                   props.points.map((point,index)=>{
                       return <li key={index.toString()}>{point}</li>
                   })
               }
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}

export default FormDialog