import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Home } from './page';
import { Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;
