import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar/NavBar';
import Hero1 from './component/hero1/Hero1';
import Background from './component/background/Background';
import Divboton from './component/divBoton/Divboton';
import Form from './component/form/Form';


function App() {
  return (

    <div className='home'>
      {/* <NavBar /> */}
      <div className='hero'>
        {/* <Hero1 />
        <Background />
        <Divboton /> */}
      </div>
      <div className='conteiner-hero2'>
      <Form />
      </div>
    </div>






  );
}

export default App;
