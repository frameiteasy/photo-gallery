import React from 'react';
import PhotoTile from './components/PhotoTile/PhotoTile.js';
import { getAlbums } from './util/getAlbums.js';

const App = () => {
    const x = getAlbums();
    return (
    <>
        <div classNmae="wrapper">
            <h1 className="mainHeader"> Portfolio</h1>
            <h2 className="secondaryHeader">Konrad Marciniak</h2>
            <PhotoTile photo="Photo1" title="Photo title" description="Photo description"/>
        </div>
        
    </>
)};

export default App;