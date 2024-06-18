import {useEffect, useState} from 'react';
import '@material/web/button/outlined-button.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';

interface FullscreenButtonProps {
  variant?: 'long' | 'short';
}

function FullscreenButton(props: FullscreenButtonProps) {
  const {variant = 'short'} = props;

  const [isFullscreen, setIsFullscreen] = useState(
    Boolean(document.fullscreenElement)
  );

  useEffect(() => {
    const fullscreenChangeHandler = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', fullscreenChangeHandler);
  }, []);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.body.requestFullscreen();
    }
  };

  switch (variant) {
    case 'long':
      return (
        <md-outlined-button onClick={toggleFullscreen}>
          {isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        </md-outlined-button>
      );
    case 'short':
      return (
        <md-icon-button onClick={toggleFullscreen}>
          {isFullscreen ? (
            <md-icon class="text-xl font-bold">fullscreen_exit</md-icon>
          ) : (
            <md-icon class="text-xl font-bold">fullscreen</md-icon>
          )}
        </md-icon-button>
      );
  }
}

export default FullscreenButton;
