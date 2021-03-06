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

// style constant
const useStyles = makeStyles((theme) => ({
    paper: {
        border: '1px solid',
        padding: 16,
        background: '#fafafa',
        borderColor: '#f5f5f5'
    },
    avatar: {
        width: 72,
        height: 72,
        cursor: 'pointer'
    }
}));

//==============================|| CONTACT INFO CARD ||==============================//

const ContactInfo = ({ data, handleShowInfo }) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={0}>
            <Grid container item xs={12} rowSpacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid item xs={12} sm container>
                        <Grid item xs>
                            <Avatar className={classes.avatar} alt="Remy Sharp" src={data.avatar} onClick={handleShowInfo} />
                        </Grid>
                        <Grid item>
                            <MenuCustom />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3">{data.name}</Typography>
                    <Typography variant="caption">{data.jobTitle}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="caption">Email</Typography>
                    <Typography variant="h6">{data.email}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12} container>
                        <Grid item xs={6}>
                            <Typography variant="caption">Phone</Typography>
                            <Typography variant="h6">{data.phoneNumber}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="caption">Location</Typography>
                            <Typography variant="h6">{data.location}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12} container spacing={1}>
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
