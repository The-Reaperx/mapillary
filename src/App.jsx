import React from 'react';
import MapillaryViewer from './MapillaryViewer';

const App = () => {
  return (
    <div
      className="App"

    >
      <h1 style={{ marginBottom: '20px' }}>Mapillary Viewer Example</h1>
      <div style={{ width: '100%', height: '400px' }}> {/* Limit max width for better centering */}
        <MapillaryViewer
          accessToken="MLY|8467536026656705|49c6eed4428edad15df19c7e1f3a043f"
          imageId="178975760792906"
          style={{ width: '100%', height: '400px' }}
        />
      </div>
    </div>
  );
};

export default App;
