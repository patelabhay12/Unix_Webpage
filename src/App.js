import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  useRoutes
} from "react-router-dom";
import Home from './Components/Home';
import Dash from './Pages/Dash';
import Event from './Pages/Event';
import BoardAtten from './Pages/BoardAtten';
import ExamReport from './Pages/ExamReport';

function App() {

  const route = useRoutes(
    [
      { path: '/', element: <Home /> ,children:[{path:'/dash', element:<Dash/>},{path:'/event',element:<Event/>},{path:'/attendance',element:<BoardAtten/>},{path:'/exam',element:<ExamReport/>}],},
      
    ]
  )
  return (
    <>
      
      {route}

    </>
  );
}
export default App;


