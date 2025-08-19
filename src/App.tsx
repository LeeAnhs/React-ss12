import ListCourse from './components/PTIT_CNTT1_Session12_Bai01_ListCourse';
import Calculation from './components/PTIT_CNTT1_Session12_Bai02_Calculation';
import UserInfo from './components/PTIT_CNTT1_Session12_Bai03_UserInfo';
import ColorBox from './components/PTIT_CNTT1_Session12_Bai04_ColorBox';
import FormatName from './components/PTIT_CNTT1_Session12_Bai05_FormatName';
import AdminIndex from './components/PTIT_CNTT1_Session12_Bai06_AdminIndex';
import UserLayout from './components/PTIT_CNTT1_Session12_Bai07_UserLayout';
import Bai08 from './components/PTIT_CNTT1_Session12_Bai08';
import TodoListIndex from './components/PTIT_CNTT1_Session12_Bai09_TodoListIndex';

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
      <hr style={{ margin: '40px 0' }} />
      <FormatName />
      <hr style={{ margin: '40px 0' }} />
      <AdminIndex />
      <hr style={{ margin: '40px 0' }} />
      <UserLayout />
      <hr style={{ margin: '40px 0' }} />
      <Bai08 />
      <hr style={{ margin: '40px 0' }} />
      <TodoListIndex />
    </div>
  );
}

export default App;
