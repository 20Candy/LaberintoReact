import React from 'react';
import GifLoader from 'react-gif-loader';

function Spinner(){
    return (
        <h1> Loading the adventure...
        <GifLoader
            loading={true}
            imageSrc="./img/ori.gif"
            overlayBackground="rgba(0,0,0,0.5)"
        />
        </h1>

    );

}

export default Spinner;