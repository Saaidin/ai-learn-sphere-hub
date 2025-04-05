import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminBlogPosts from '@/components/admin/AdminBlogPosts';
// TODO: Create and import AdminVideos component
// import AdminVideos from '@/components/admin/AdminVideos';
const AdminVideos = () => <div>Videos Management Coming Soon</div>;
// TODO: Create and import AdminEbooks component
const AdminEbooks = () => <div>Ebooks Management Coming Soon</div>;

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <Tabs defaultValue="blog" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="ebooks">Ebooks</TabsTrigger>
          </TabsList>
          
          <TabsContent value="blog">
            <AdminBlogPosts />
          </TabsContent>
          
          <TabsContent value="videos">
            <AdminVideos />
          </TabsContent>
          
          <TabsContent value="ebooks">
            <AdminEbooks />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;