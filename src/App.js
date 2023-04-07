import React from 'react';

//import components
import AlbumList from './components/AlbumList.js';
// import ConstMsg from './components/CondMsg';

function App(props) {
  return (
    <div>
      {/* <ConstMsg MessageMore="You need more albums!"/>  */}
      <AlbumList/>
    </div>
  );
}

export default App;