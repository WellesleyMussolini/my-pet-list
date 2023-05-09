import React from 'react';
import Home from '../pages/home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Router from "../constants/routes";
import Pet from '../pages/pet-details/Pet';
import NotFound from '../components/not-found/NotFound';
import Header from '../layout/header/Header';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const Routers = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Header />
                <Routes>
                    <Route exact path={Router.HOME} element={<Home />} />
                    <Route path={Router.PET} element={<Pet />} />
                    <Route path={Router.NOT_FOUND} element={<NotFound />} />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

export default Routers;