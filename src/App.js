import Home from './pages/home/Home';
import { Switch, Routes, Route } from 'react-router-dom';
import * as Router from "./constants/routes";
import NotFound from './components/not-found/NotFound';
import Dogs from './pages/dogs/Dogs';
import LoadingScreen from './components/loading-screen/LoadingScreen';
import DogDetails from './pages/dog-details/DogDetails';

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path={Router.HOME} element={<Home />} />
                <Route path={Router.DOGS} element={<Dogs />} />
                <Route path={Router.DOG} element={<DogDetails />} />
                <Route path={Router.NOT_FOUND} element={<NotFound />} />
            </Routes>
        </>
    )
};

export default App;