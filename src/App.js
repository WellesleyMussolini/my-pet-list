import Home from './pages/home/Home';
import { Switch, Route, Routes } from "react-router-dom";
import * as Router from "./constants/routes";
import Pet from './pages/pet-details/Pet';
import NotFound from './components/not-found/NotFound';

const App = () => {
    return (
        <Routes>
            <Route exact path={Router.HOME} element={<Home />} />
            <Route path={Router.PET} element={<Pet />} />
            <Route path={Router.NOT_FOUND} element={<NotFound />} />
        </Routes>
    );
};

export default App;
