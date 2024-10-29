import React from 'react';
import { Viewer } from 'mapillary-js';

const MapillaryViewer = ({ accessToken, imageId, style }) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const viewer = new Viewer({
      accessToken: accessToken,
      container: containerRef.current,
      imageId: imageId,
    });

    return () => {
      viewer.remove();
    };
  }, [accessToken, imageId]);

  return <div ref={containerRef} style={style || { width: '100%', height: '300px' }} />;
};

export default MapillaryViewer;
