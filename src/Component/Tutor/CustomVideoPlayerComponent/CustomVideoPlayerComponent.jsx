import React, {useState, useRef} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, Container, Slider, Tooltip, Typography} from "@material-ui/core";
import ReactPlayer from "react-player";
import {makeStyles} from "@material-ui/core/styles";
import PlayerControls from "./PlayerControls";

const useStyles = makeStyles({
    playerWrapper: {
        width: "100%",
        position: "relative"
    },
});

function CustomVideoPlayerComponent() {

    const [state, setState] = useState({
        playing:true,
        muted: true,
        volume: 0.5
    })

    const classes = useStyles();
    const {playing, muted, volume} = state;
    const playerRef = useRef(null);

    const handlePlayPause = () => {
        setState({...state, playing: !state.playing});
    }

    const handleRewind = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10)
    }

    const handleFastForward = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10)
    }

    const handleMute = () => {
        setState({...state, muted: !state.muted})
    }

    const handleVolumeChange = (e, newValue) => {
        setState({...state, volume:parseFloat(newValue /100),
        muted: newValue === 0 ? true: false,
        });
    };

    const handleVolumeSeekDown =  (e, newValue) => {
        setState({
            ...state,
            volume: parseFloat(newValue/ 100),
            muted: newValue === 0 ? true: false,
        })
    }

    return (
        <React.Fragment>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6">React Video Player</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar/>
            <Container maxWidth="md">
                <div className={classes.playerWrapper}>
                    <ReactPlayer
                        width={"100%"}
                        url="https://www.youtube.com/watch?v=wGixQPuG1GY"
                        muted={muted}
                        playing={playing}
                        border-radius='16px'
                        overflow="hidden"
                        ref={playerRef}
                        volume={volume}
                    />
                    <PlayerControls

                        onPlayPause={handlePlayPause}
                        playing={playing}
                        onRewind={handleRewind}
                        onFastForward={handleFastForward}
                        muted={muted}
                        onMute={handleMute}
                        onVolumeChange={handleVolumeChange}
                        onVolumeSeekDown={handleVolumeSeekDown}
                        volume={volume}
                    />
                </div>
            </Container>
        </React.Fragment>
    );
}

export default CustomVideoPlayerComponent;
