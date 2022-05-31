import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
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
    <Main />
    <Footer />
    </>
    
  );
}


export default App;
