import React from 'react';
import { Route, Routes} from 'react-router-dom';

//import components
import AlbumList from './components/AlbumList.js';
import Header from './components/Header';
import AboutProjects2 from './components/AboutProjects2';
// import ConstMsg from './components/CondMsg';
// import InputMessage from './components/InputMessage';
// import InputComp2 from './components/InputComp2';

function App() {
  return (
    <div>
      <Header/>
      {/* <InputMessage/> */}
      {/* <ConstMsg MessageMore="You need more albums!"/>  */}
      <Routes>
        <Route path='/' element={<AboutProjects2/>}/>
        <Route path='/albumlist' element={<AlbumList/>}/>
      </Routes>
      {/* <InputComp2/> */}
    </div>
  );
}

export default App;