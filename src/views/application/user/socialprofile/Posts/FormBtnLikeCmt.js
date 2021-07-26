import React from 'react';
import ChatBubbleTwoToneIcon from '@material-ui/icons/ChatBubbleTwoTone';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ContentCopyTwoToneIcon from '@material-ui/icons/ContentCopyTwoTone';

// simple menu
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import avatar from '../../../../../assets/images/Application/User/SocialProfile/img-user.41a8c066.png';
import { Avatar } from '@material-ui/core';

// Transitions Collapse
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
    iconLike: {
        fontSize: '18px',
        marginRight: '8px'
    },
    iconCmt: {
        fontSize: '18px',
        marginRight: '8px',
        color: '#673ab7'
    },
    likecmt: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '20px',
        marginTop: '8px',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '12px',
        padding:'4px 5px',
        transition: 'all .5s',
        borderRadius: "5px",
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: 'rgba(97, 97, 97, 0.04)',
        }
    },
    borderLikeCmt: {
        display: 'flex',
        marginTop: '38px',
        marginBottom: '13px',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textField: {
        width: '100%'
    },
    borderTextField: {
        width: '100%',
        paddingTop: '16px',
        paddingLeft: '16px'
    },
    borderLikeCmtHindden: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    avatar: {
        width: '34px',
        height: '34px'
    },
    borderAvatar: {
        paddingTop: '16px'
    },
    btnComment: {
        paddingTop: '16px',
        paddingLeft: '16px'
    },
    //Collapse
    root: {
        width: '100%'
    },
    container: {
        // display: 'flex'
    },
    onClickIconLike: {
        color: 'rgb(33, 150, 243)',
        fontSize: '18px',
        marginRight: '8px'
    },
    btnCover: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnEditDelete: {
        cursor: 'pointer'
    },
    btnThereDots: {
        fontSize: '15px'
    },
    iconsFromBtnShare: {
        fontSize: '1.25rem',
        marginRight: '14px'
    }
}));

const FormBtnLikeCmt = () => {
    const classes = useStyles();

    const [checked, setChecked] = React.useState(true);

    const [like, setLike] = React.useState(false);
    const [score, setScore] = React.useState(10);

    const handleClickCmt = () => {
        setChecked((prev) => !prev);
    };

    const handleClickToLike = async () => {
        await setLike((prev) => !prev);
        if (like) {
            setScore(score - 1);
        } else {
            setScore(score + 1);
        }
    };

    // simple menu
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {/* like and comment */}
            <div className={classes.borderLikeCmt}>
                {/* button like and comment */}
                <div>
                    <div className={classes.likecmt} onClick={handleClickToLike}>
                        {like ? (
                            <>
                                <ThumbUpAltTwoToneIcon className={classes.onClickIconLike} /> {score} Likes
                            </>
                        ) : (
                            <>
                                <ThumbUpAltTwoToneIcon className={classes.iconLike} /> {score} Likes
                            </>
                        )}
                    </div>
                    <div className={classes.likecmt} onClick={handleClickCmt}>
                        <ChatBubbleTwoToneIcon className={classes.iconCmt} /> 10 Comments
                    </div>
                </div>

                {/* button share */}
                <div className={classes.btnCover}>
                    <div className={classes.btnEditDelete} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <ShareOutlinedIcon className={classes.btnThereDots} />
                    </div>
                    <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>
                            <ShareOutlinedIcon className={classes.iconsFromBtnShare} /> Share Now
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <PeopleAltOutlinedIcon className={classes.iconsFromBtnShare} /> Share to Friends
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ChatOutlinedIcon className={classes.iconsFromBtnShare} /> Send in Messanger
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ContentCopyTwoToneIcon className={classes.iconsFromBtnShare} /> Copy Link
                        </MenuItem>
                    </Menu>
                </div>
            </div>

            <div className={classes.root}>
                {/* <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" /> */}
                <div className={classes.container}>
                    <Collapse in={checked}>
                        <div>
                            <div className={classes.borderLikeCmtHindden}>
                                <div className={classes.borderAvatar}>
                                    <Avatar className={classes.avatar} src={avatar} alt="avatar" />
                                </div>

                                <div className={classes.borderTextField}>
                                    <TextField
                                        className={classes.textField}
                                        id="outlined-basic"
                                        label="Write a comment..."
                                        variant="outlined"
                                    />
                                </div>
                                <div className={classes.btnComment}>
                                    <Button variant="contained" color="secondary">
                                        Comment
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </>
    );
};

export default FormBtnLikeCmt;
