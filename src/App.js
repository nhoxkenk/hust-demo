import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import News from './News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
;

function App() {
  return (
    // <BrowserRouter>
    //   {/* <Header /> */}
    //   <Routes>
    //     <Route path='/' element={<Header />} />
    //   </Routes>
    // </BrowserRouter>

    <>
    <Header />
    <BrowserRouter>
    
    <Routes>
      <Route  path='/' element={<Main />}></Route>
      <Route  path='/tin-tuc' element={<News />}></Route>
    </Routes>
    
    </BrowserRouter>
    <Footer />
    </>
    
  );
}


export default App;
