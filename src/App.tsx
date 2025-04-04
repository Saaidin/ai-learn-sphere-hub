
import { Toaster } from "@/components/ui/toaster";
import { Menubar } from "@/components/ui/menubar";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Videos from "./pages/Videos";
import Ebooks from "./pages/Ebooks";
import Subscribe from "./pages/Subscribe";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
