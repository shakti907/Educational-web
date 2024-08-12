import logo from './logo.svg';
import './App.css';
import LandingPage from './component/LandingPage';

function App() {

  const instituename='Ism Varanasi';
  const thumbnil='To learn mathematics to Do Mathematics';

  return (
    <div className="">
     <LandingPage logo={logo} institutename={instituename} thumbnil={thumbnil}/>
    </div>
  );
}

export default App;
