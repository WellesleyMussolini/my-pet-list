import React from 'react';
import Home from '../pages/home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Router from "../constants/routes";
import Pet from '../pages/pet-details/Pet';
import NotFound from '../components/not-found/notfound.component';
import Header from '../layout/header/header.component';
import { QueryClient, QueryClientProvider } from 'react-query'
import { LanguageContextProvider } from '../context/languageContext';
import { Styles } from '../styles/styles';

const queryClient = new QueryClient();

const Routers = () => (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <LanguageContextProvider>
                <Header />
                <Styles>
                    <Routes>
                        <Route exact path={Router.HOME} element={<Home />} />
                        <Route path={Router.PET} element={<Pet />} />
                        <Route path={Router.NOT_FOUND} element={<NotFound />} />
                    </Routes>
                </Styles>
            </LanguageContextProvider>
        </QueryClientProvider>
    </BrowserRouter>
);

export default Routers;