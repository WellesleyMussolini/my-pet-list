import React from 'react';
import Home from '../pages/home/home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Router from "../constants/routes";
import Pet from '../pages/pet-details/Pet';
import NotFound from '../components/not-found/NotFound';
import Header from '../layout/header/header/Header';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const Routers = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route exact path={Router.HOME} element={
                        <>
                            <Header />
                            <Home />
                        </>
                    } />
                    <Route path={Router.PET} element={
                        <>
                            <Header />
                            <Pet />
                        </>
                    } />
                    <Route path={Router.NOT_FOUND} element={
                        <>
                            <Header />
                            <NotFound />
                        </>
                    } />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

export default Routers;