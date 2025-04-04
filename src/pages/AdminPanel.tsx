import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Trash2, Edit, Plus } from 'lucide-react';
import { useAdminData } from '@/data/mockData';

const AdminPanel = () => {
  const { toast } = useToast();
  const userEmail = localStorage.getItem('email');
  const isAdmin = userEmail === 'dinme73@gmail.com';
  const {
    blogPosts, addBlogPost, updateBlogPost, deleteBlogPost,
    videos, addVideo, updateVideo, deleteVideo,
    ebooks, addEbook, updateEbook, deleteEbook
  } = useAdminData();

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Admin Access Required</h2>
            <p>You must be logged in as an admin to access this page.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleDeletePost = (id: string) => {
    if (!isAdmin) return;
    deleteBlogPost(id);
    toast({
      title: "Post Deleted",
      description: "Blog post has been successfully deleted",
    });
  };

  const handleEditPost = (id: string) => {
    if (!isAdmin) return;
    // In a real app, this would open a modal with the post data
    toast({
      title: "Edit Post",
      description: "Edit functionality would be implemented here",
    });
  };

  const handleAddPost = () => {
    if (!isAdmin) return;
    // In a real app, this would open a form to create new post
    const newPost = {
      id: Date.now().toString(),
      title: "New Blog Post",
      excerpt: "New post content",
      coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      author: "Admin",
      category: "General",
      slug: "new-blog-post",
      content: "New post content"
    };
    addBlogPost(newPost);
    toast({
      title: "Post Added",
      description: "New blog post has been created",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container px-4 mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
          
          <div className="space-y-12">
            {/* Blog Posts Section */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Blog Posts</h2>
                <Button onClick={handleAddPost}>
                  <Plus className="mr-2 h-4 w-4" /> Add Post
                </Button>
              </div>
              
              <div className="space-y-4">
                {blogPosts.map(post => (
                  <div key={post.id} className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{post.title}</h3>
                      <p className="text-sm text-gray-600">{post.category}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditPost(post.id)} disabled={!isAdmin}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDeletePost(post.id)} disabled={!isAdmin}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Videos Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Videos</h2>
              <div className="space-y-4">
                {videos.map(video => (
                  <div key={video.id} className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{video.title}</h3>
                      <p className="text-sm text-gray-600">{video.category}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" disabled={!isAdmin}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="sm" disabled={!isAdmin}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Ebooks Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Ebooks</h2>
              <div className="space-y-4">
                {ebooks.map(ebook => (
                  <div key={ebook.id} className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{ebook.title}</h3>
                      <p className="text-sm text-gray-600">{ebook.category}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" disabled={!isAdmin}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="sm" disabled={!isAdmin}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPanel;