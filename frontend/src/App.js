import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { blabla } from  './Reducers/Blabla'
import { Home } from './pages/Home'
import { Video } from './pages/Video'
import { Photo } from './pages/Photo'
import { About } from './pages/About'
import { HowTo } from './pages/HowTo'
import { Studio } from './pages/Studio'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound';


const reducer = combineReducers({
  bla: blabla.reducer,
})

const store = configureStore({reducer})

export const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Photo" element={<Photo />} />
        <Route path="/Studio" element={<Studio />} />
        <Route path="/About" element={<About />} />
        <Route path="/HowTo" element={<HowTo />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  );
};