import React from 'react';
import PhotoTile from './components/PhotoTile/PhotoTile.js';
import "./index.scss";

const App = () => {
    return (
    <>
        <div classNmae="wrapper">
            <h1 className="mainHeader"> Portfolio</h1>
            <h2 className="secondaryHeader">Konrad Marciniak</h2>
            <PhotoTile photo="Photo1" title="Photo title" description="Photo description"/>
            <PhotoTile photo="Photo2" title="Photo title" description="Photo description"/>
            <PhotoTile photo="Photo3" title="Photo title" description="Photo description"/>
            <PhotoTile photo="Photo4" title="Photo title" description="Photo description"/>
            <PhotoTile photo="Photo5" title="Photo title" description="Photo description"/>
        </div>
        
    </>
)};

export default App;