import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MiniSpecer from './MiniSpecer';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      fontFamily:"Helvetica Neue,Arial,Hiragino Kaku Gothic ProN",
      color:'#50360d',
      height:400,
  
    },

    title: {
      textAlign:'center',
    },

    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));
  


const Cards = (props) => {
    const classes = useStyles();
    return(
      <>
        <Card className={classes.root}>
          <CardHeader className={classes.title}
            title={props.title}
          />
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.imageTitle}
          />
          <CardContent>  
            <Typography variant="body2" color='inherit' component="p" >
              {props.content}<br></br>
              {props.content2}<br></br>
              {props.content3}<br></br>
              {props.content4}<br></br>
            </Typography>
          </CardContent>
        </Card>
        <MiniSpecer/>
      </>


    )      
}

export default Cards