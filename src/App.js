import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes, useParams } from "react-router-dom";

import routes from "./routes";
import NotFound from "./views/Error/NotFound";

function App() {

  return (
   <>
    <HashRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              name={route.name}
              element={<route.element />}
            />
          ))}
           <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      </>
  );
}

export default App;
