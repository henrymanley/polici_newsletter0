import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}
));

export default function OutlinedButtons() {
    const classes = useStyles();
    return (
            <div style={{
                textAlign:'left',
                paddingLeft: '40px',
                marginBottom:'40px',
                color: "#FFFFFC",
            }}>
                <h1 style={{fontSize:"70px"}} ><a href="https://www.polici.org/"> polici </a></h1>
                <div style={{
                    textAlign: 'left',
                    paddingTop: '50px',
                    paddingBottom: '50px',
                    color: "#FFFFFC",
                    width: '50%',
                }}>
                    <h2>
                        <bf>Bringing Data to Your Day In Under Three Minutes 📈</bf>
                    </h2>


                    <hr></hr>
                    <p>
                        Get the free, weekly email that brings data science,
                        cutting edge research findings, and a splash of humor to the headlines.
                        <br />
                        <br /> <a style={{
                        textDecoration:'underline'
                    }}>Check out our last issue. </a>
                    </p>
                </div>
                <form className={classes.root} noValidate autoComplete="on">
                    <TextField
                        label="Outlined"
                        variant="filled"
                        label="Required"
                        defaultValue="Your Email"
                        inputProps={{ style: { color: '#727478', backgroundColor:"#FFFFFC"}}}
                        style={{
                            width: "42%",
                            color: 'black',
                            display: 'flex',
                            input:{
                                color:'red'
                            }
                        }}
                    />
                </form>
                <Button variant="contained"
                        style={{
                            borderRadius: 35,
                            backgroundColor: "#FFFFFC",
                            color:"#000000",
                        }}>Submit</Button>
        </div>
    );
}