import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogNew from '@/pages/BlogNew';
import BlogEdit from '@/pages/BlogEdit';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Index from '@/pages/Index';
import Blog from '@/pages/Blog';
import Videos from '@/pages/Videos';
import Ebooks from '@/pages/Ebooks';
import EbookDetail from '@/pages/EbookDetail';
import BlogDetail from '@/pages/BlogDetail';
import VideoDetail from '@/pages/VideoDetail';
import Donate from '@/pages/Donate';
import Admin from '@/pages/Admin';
import VibeCodeDetail from '@/pages/VibeCodeDetail';
import VibeCoding from '@/pages/VibeCoding';
import AffiliatePage from '@/pages/AffiliatePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/new" element={<BlogNew />} />
        <Route path="/blog/edit/vibe-coding-future" element={<BlogEdit />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/ebooks/:id" element={<EbookDetail />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/videos/:id" element={<VideoDetail />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/vibe-coding/:id" element={<VibeCodeDetail />} />
        <Route path="/vibe-coding" element={<VibeCoding />} />
        <Route path="/affiliate" element={<AffiliatePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
