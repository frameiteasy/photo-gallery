import React from 'react';
import PhotoTile from './components/PhotoTile/PhotoTile.jsx';
import "./App.scss";

const App = () => {
    return (
    <>
        <h1 className="mainHeader"> Portfolio</h1>
        <h2 className="secondaryHeader">Konrad Marciniak</h2>
        <div className="container">
            <PhotoTile photo="Photo1" title="Photo title" description="Photo description"/>
            <PhotoTile photo="Photo2" title="Photo title" description="Photo description"/>
            <PhotoTile photo="Photo3" title="Photo title" description="Photo description"/>
            <PhotoTile photo="Photo4" title="Photo title" description="Photo description"/>
            <PhotoTile photo="Photo5" title="Photo title" description="Photo description"/>
            <PhotoTile photo="Photo6" title="Photo title" description="Photo description"/>
            <PhotoTile photo="Photo7" title="Photo title" description="Photo description"/>
        </div>
        
    </>
)};

export default App;