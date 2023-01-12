import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { TestHome } from 'pages/TestHome';
import { Video } from './pages/Video'
import { Photo } from './pages/Photo'
import { About } from './pages/About'
import { Process } from './pages/Process'
import { Studio } from './pages/Studio'
import { Contact } from './pages/Contact'
import { Foretag } from 'pages/photoGalleryPages/foretag';
import { Modell } from 'pages/photoGalleryPages/modell';
import { Brollop } from 'pages/photoGalleryPages/brollop';
import { Familj } from 'pages/photoGalleryPages/familj';
import { Dronare } from 'pages/photoGalleryPages/dronare';
import { Photo360 } from 'pages/photoGalleryPages/photo360';
import { Event } from 'pages/VideoGalleryPages/Event';
import { Education } from 'pages/VideoGalleryPages/Education';
import { SocialMedia } from 'pages/VideoGalleryPages/SocialMedia';
import { MusicVideo } from 'pages/VideoGalleryPages/MusicVideo';
import { NotFound } from './pages/NotFound';


export const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<TestHome />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Photo" element={<Photo />} />
        <Route path="/Studio" element={<Studio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Process" element={<Process />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Photo/foretag" element={<Foretag />} />
        <Route path="/Photo/modell" element={<Modell />} />
        <Route path="/Photo/brollop" element={<Brollop />} />
        <Route path="/Photo/familj" element={<Familj />} />
        <Route path="/Photo/dronare" element={<Dronare />} />
        <Route path="/Photo/360" element={<Photo360 />} />
        <Route path="/Video/Event" element={<Event />} />
        <Route path="/Video/Education" element={<Education />} />
        <Route path="/Video/Music" element={<MusicVideo />} />
        <Route path="/Video/SocialMedia" element={<SocialMedia />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  );
};