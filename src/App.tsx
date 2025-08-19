import ListCourse from './components/PTIT_CNTT1_Session12_Bai01_ListCourse';
import Calculation from './components/PTIT_CNTT1_Session12_Bai02_Calculation';
import UserInfo from './components/PTIT_CNTT1_Session12_Bai03_UserInfo';
import ColorBox from './components/PTIT_CNTT1_Session12_Bai04_ColorBox';

function App() {
  return (
    <div className="App">
      <ListCourse />
       <hr style={{ margin: '40px 0' }} />
      <Calculation />
       <hr style={{ margin: '40px 0' }} />
       <UserInfo />
      <hr style={{ margin: '40px 0' }} />
      <ColorBox />
    </div>
  );
}

export default App;