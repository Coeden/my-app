import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Users } from './Components/Users';
import { Error } from './Components/Error';

//create our root Component => App 
function App () {
return (
	<>
		<Router>
      <Routes>
        <Route path='error' element={<Error />} />
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<Users />} />
        </Route> 
      </Routes>
    </Router>
	</>
);

}
export default App;

