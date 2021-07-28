import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Button, Grid, Typography, Paper } from '@material-ui/core';

// project imports
import { gridSpacing } from './../../../store/constant';

// project imports
import MenuCustom from './Menu';

// assets
import { CallTwoTone, ChatBubbleTwoTone } from '@material-ui/icons';
import man1 from './../../../assets/images/avatars/man1.png';

// style constant
const useStyles = makeStyles((theme) => ({
    paper: {
        border: '1px solid',
        padding: 16,
        background: '#fafafa',
        borderColor: '#f5f5f5'
    },
    img: {
        width: 72,
        height: 72
    }
}));

//==============================|| CONTACT INFO CARD ||==============================//

const ContactInfo = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={0}>
            <Grid container item xs={12} rowSpacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid item xs={12} sm container>
                        <Grid item xs style={{ cursor: 'pointer' }}>
                            <Avatar className={classes.img} alt="Remy Sharp" src={man1} />
                        </Grid>
                        <Grid item>
                            <MenuCustom />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3">Alene</Typography>
                    <Typography variant="caption">Sr. Customer Manager</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="caption">Email</Typography>
                    <Typography variant="h6">alene_work@company.com</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12} container>
                        <Grid item xs={6}>
                            <Typography variant="caption">Phone</Typography>
                            <Typography variant="h6">380-293-0177</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="caption">Location</Typography>
                            <Typography variant="h6">Port Narcos</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12} container spacing={gridSpacing}>
                        <Grid item xs={6}>
                            <Button variant="outlined" color="primary" fullWidth startIcon={<ChatBubbleTwoTone />}>
                                Message
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="outlined" color="secondary" fullWidth startIcon={<CallTwoTone />}>
                                Call
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ContactInfo;
