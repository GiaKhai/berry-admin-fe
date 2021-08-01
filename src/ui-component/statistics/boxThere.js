import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        width: ' 100%',
        webkitBoxPack: 'justify',
        justifyContent: 'space-between',
        webkitBoxAlign: 'center',
        alignItems: 'center'
    },
    content: {
        margin: 10,
        display: 'inline-block'
    },
    data: {
        fontSize: 21,
        fontWeight: 500,
        color: 'black',
        marginBottom: '5px'
    },
    title: {
        fontSize: 15,
        fontWeight: 450
    }
}));

export default function BoxThere({ res }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div>{res.img}</div>
                <div className={classes.title}>{res.title}</div>
            </div>
            <div className={classes.data}>{res.data}</div>
        </div>
    );
}
