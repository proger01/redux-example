import { Provider } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./pages/Main";
import Users from "./pages/Users/Users";
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
					<Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
