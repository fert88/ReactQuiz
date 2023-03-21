import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Intro from './pages/intro/Intro';
import Quiz from './pages/quiz/Quiz';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='/quiz/:difficulty/:amount' element={<Quiz/>}/>
      </Routes>
    </Router>
  );
}

export default App;
