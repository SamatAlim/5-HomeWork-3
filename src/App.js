import './App.css';
import AboutPage from './pages/aboutPage/aboutPage';
import MainPage from './pages/mainPage/mainPage';
import UserPage from './pages/userPage/userPage';

function App() {
  return (
    <div className="App">
      <MainPage/>
      <AboutPage/>
      <UserPage/>
    </div>
  );
}

export default App;
