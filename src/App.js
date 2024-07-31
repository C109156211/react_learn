import './App.css';
import { Player, 
        BigPlayButton,
        ControlBar, 
        PlaybackRateMenuButton,
        ReplayControl,
        ForwardControl
    } from 'video-react';

// import Player1 from ''

function App(){

    return (
        <Player
            fluid={false}
            width={600}
            height={400}
            muted={true}
            autoPlay={false}

            poster='https://upload.wikimedia.org/wikipedia/commons/6/'
            src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        >
            <BigPlayButton position='center' />
            <ControlBar>
                <PlaybackRateMenuButton rates={[5,2,1,0.5,0.1]}/>
                <ReplayControl seconds={5} order={2.1} />
                <ReplayControl seconds={10} order={2.2} />
                <ReplayControl seconds={30} order={2.3} />
                <ReplayControl seconds={5} order={3.1} />
                <ReplayControl seconds={10} order={3.2} />
                <ReplayControl seconds={30} order={3.3} />
            </ControlBar>
        </Player>
    );
}

export default App;