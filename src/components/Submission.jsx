import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Divider} from "@material-ui/core";
import '../App.css';


const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }
));

export default function OutlinedButtons() {
    const classes = useStyles();
    return (

        <div className='App'>
        <div style={{
            textAlign:'left',
            paddingLeft: '40px',
            paddingBottom: '40px',
            marginBottom:'40px',
            color: "#FFFFFC",
            backgroundColor: "#000000"
        }}>
            <div className="submitIntro">
                <h1>Hi there! 🔥</h1>
            </div>

            <h3>I bet you've got an awesome newsletter to upload. <br />
            Before you do, please make sure of the following: </h3>
            <ul>
                <li>All designs are finalized.</li>
                <li>All blurbs are finalized.</li>
            </ul>
            <hr style={{width: '70%', marginLeft: '0'}}/>

            <h1>Contributors 🖊️</h1>

            <form className={classes.root} noValidate autoComplete="on" >
                <TextField
                    label="Outlined"
                    variant="filled"
                    label=" First Name"
                    inputProps={{ style: { color: '#727478', backgroundColor:"#FFFFFC"}}}
                    style={{
                        width: "21%",
                        color: 'black',
                        display: 'flex',
                        input:{
                            color:'red'
                        }
                    }}
                />

                <TextField
                    label="Outlined"
                    variant="filled"
                    label="Personal Site"
                    inputProps={{ style: { color: '#727478', backgroundColor:"#FFFFFC"}}}
                    style={{
                        width: "21%",
                        color: 'black',
                        display: 'flex',
                        input:{
                            color:'red'
                        }
                    }}
                />
            </form>

            <div>
                <Button variant="contained"
                        style={{
                            marginLeft: '10px',
                            borderRadius: 35,
                            backgroundColor: "#FFFFFC",
                            color:"#000000",
                        }}>Add Contributor</Button>
                <Button variant="contained"
                        style={{
                            borderRadius: 35,
                            marginLeft: '10px',
                            backgroundColor: "#FFFFFC",
                            color:"#000000",
                        }}>Submit Contributors</Button>
            </div>

            <hr style={{width: '70%', marginLeft: '0'}}/>

            <h1>Design 🎨</h1>
            <form className={classes.root} noValidate autoComplete="on" >
                <TextField
                    label="Outlined"
                    variant="filled"
                    label="Font Color"
                    defaultValue="#Hex"
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
                <TextField
                    label="Outlined"
                    variant="filled"
                    label="Section Header Color"
                    defaultValue="#Hex"
                    inputProps={{ style: { color: '#727478', backgroundColor:"#FFFFFC"}}}
                    style={{
                        width: "42%",
                        color: 'black',
                        display: 'flex',
                        input:{
                            color:'red'
                        }
                    }}/>
                <TextField
                    label="Outlined"
                    variant="filled"
                    label="Link Color"
                    defaultValue="#Hex"
                    inputProps={{ style: { color: '#727478', backgroundColor:"#FFFFFC"}}}
                    style={{
                        width: "42%",
                        color: 'black',
                        display: 'flex',
                        input:{
                            color:'red'
                        }
                    }}/>

            </form>
                <Button variant="contained"
                        style={{
                            borderRadius: 35,
                            backgroundColor: "#FFFFFC",
                            color:"#000000",
                        }}>Submit Design Parameters</Button>
            <hr style={{width: '70%', marginLeft: '0'}}/>

            <h1>Introduction 🎉</h1>
            <form className={classes.root} noValidate autoComplete="on" >
                <TextField
                    label="Outlined"
                    variant="filled"
                    label="Required *"
                    defaultValue="Newsletter Title"
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
            <TextField
                label="Outlined"
                variant="filled"
                label="Required *"
                defaultValue="Sending Date"
                inputProps={{ style: { color: '#727478', backgroundColor:"#FFFFFC"}}}
                style={{
                    width: "42%",
                    color: 'black',
                    display: 'flex',
                    input:{
                        color:'red'
                    }
                }}/>
                <TextField
                    id="standard-multiline-static"
                    multiline
                    rows={6}
                    defaultValue="Newsletter Intro"
                    inputProps={{ style: { color: '#727478', backgroundColor:"#FFFFFC"}}}
                    style={{
                    width: "42%",
                    color: 'black',
                    display: 'flex',
                    input:{
                        color:'red'
                    }}}
                />

            <Button variant="contained"
                    style={{
                        borderRadius: 35,
                        backgroundColor: "#FFFFFC",
                        color:"#000000",
                    }}>Submit Intro Section</Button>
                <hr style={{width: '70%', marginLeft: '0'}}/>

                <h1>Newsletter Sections 💬 </h1>
            <TextField
                label="Outlined"
                variant="filled"
                label="Required *"
                defaultValue="Section Header"
                inputProps={{ style: { color: '#727478', backgroundColor:"#FFFFFC"}}}
                style={{
                    paddingBottom:'20px',
                    width: "42%",
                    color: 'black',
                    display: 'flex',
                    input:{
                        color:'red'
                    }
                }}/>

                <h2>Section Graphic(s) 📊</h2>
            <input
                accept="image/*"
                className={classes.input}
                style={{ color:'white' }}
                id="raised-button-file"
                multiple
                type="file"
            />
            <label htmlFor="raised-button-file"> Upload Image(s) for this Newsletter Section.
                <Button variant="raised" component="span" className={classes.button}>
                </Button>
            </label>

            <TextField
                id="standard-multiline-static"
                multiline
                rows={6}
                defaultValue="Section Blurb"
                inputProps={{ style: { color: '#727478', backgroundColor:"#FFFFFC"}}}
                style={{
                    width: "42%",
                    color: 'black',
                    display: 'flex',
                    input:{
                        color:'red'
                    }}}
            />
        </form>
            <Button variant="contained"
                    style={{
                        borderRadius: 35,
                        backgroundColor: "#FFFFFC",
                        color:"#000000",
                    }}>Add  Newsletter Section</Button>
            <Button variant="contained"
                    style={{
                        marginLeft: '10px',
                        borderRadius: 35,
                        backgroundColor: "#FFFFFC",
                        color:"#000000",
                    }}>Submit Newsletter Body</Button>
    </div>
        </div>
    );
}