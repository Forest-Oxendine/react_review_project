import React from 'react';

//import components
// import AlbumList from './components/AlbumList.js';
// import ConstMsg from './components/CondMsg';
import InputMessage from './components/InputMessage';

function App(props) {
  return (
    <div>
      <InputMessage/>
      {/* <ConstMsg MessageMore="You need more albums!"/>  */}
      {/* <AlbumList/> */}
    </div>
  );
}

export default App;