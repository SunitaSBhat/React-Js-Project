import logo from './logo.svg';
import './App.css';
import SideNav from "./components/SideNav";
import MainPost from "./components/MainPost";
import SideAccounts from "./components/SideAccounts";
function App() {
  return (
    <div className="App">
      <SideNav id="co"/>
      <MainPost id="co"/>
      <SideAccounts id="co"/>
    </div>
  );
}

export default App;
