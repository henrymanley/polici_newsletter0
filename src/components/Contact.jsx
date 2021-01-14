import React from 'react';
import Box from '@material-ui/core/Box';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Contact(){
    return (
        <div id="contact">
            <Box textAlign="right" fontWeight="fontWeightBold" fontSize="h5.fontSize" m={1} margin="auto">

                    <IconButton target="_blank" href="mailto:founders@polici.org">
                        <EmailIcon  style = {{
                            padding: "10px 5px",
                            color: 'black'
                        }}/>
                    </IconButton>

                    <IconButton target="_blank" href="https://www.linkedin.com/company/polici">
                        <LinkedInIcon  style = {{
                            padding: "10px 5px",
                            color: 'black'
                        }}/>
                    </IconButton>
                    <IconButton target="_blank" href="https://www.instagram.com/policiorg">
                        <InstagramIcon style = {{
                            padding: "10px 5px",
                            color: 'black'
                        }}/>
                    </IconButton>
                    <IconButton target="_blank" href="https://www.facebook.com/policiorg/?eid=ARBsW1q_Jkj0gHDr3ymEEZjmkC-GDHK-5u7Hzv2R0hV0djyqOY0sDMQfKyKJ0LgVPG2CgtPooBvzRKTD">
                        <FacebookIcon style = {{
                            padding: "10px 5px",
                            color: 'black'
                        }} />
                    </IconButton>
                    <IconButton target="_blank" href="https://twitter.com/policiorg?lang=en">
                        <TwitterIcon style = {{
                            padding: "10px 5px",
                            color: 'black'
                        }} />
                    </IconButton>
            </Box>
</div>
    );
}
