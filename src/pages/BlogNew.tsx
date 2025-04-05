import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createBlogPost } from '@/lib/api/blog';

type BlogPostFormData = {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  tags: string[];
};

export default function BlogNew() {
  console.log('BlogNew component mounted');
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm<BlogPostFormData>();

  const onSubmit = async (data: BlogPostFormData) => {
    try {
      setIsSubmitting(true);
      setError(null);

      const response = await createBlogPost({
        ...data,
        publishedAt: new Date(data.publishedAt),
      });

      if (response.status >= 400) {
        throw new Error(response.error || 'Failed to create blog post');
      }

      navigate('/blog');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(',').map(tag => tag.trim());
    setValue('tags', tags);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title*
          </label>
          <div className="flex gap-2">
            <input
              id="title"
              type="text"
              {...register('title', { required: 'Title is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={async () => {
                const title = watch('title');
                if (!title) {
                  alert('Please enter a title first');
                  return;
                }
                
                try {
                  setIsSubmitting(true);
                  // TODO: Implement Deepseek API call
                  // For now, just auto-generate some fields
                  setValue('slug', title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''));
                  setValue('excerpt', `This is an auto-generated excerpt for "${title}"`);
                  setValue('content', `# ${title}\n\nStart writing your content here...`);
                  setValue('author', 'AI Assistant');
                  setValue('publishedAt', new Date().toISOString().slice(0, 16));
                  trigger();
                } catch (err) {
                  setError('Failed to generate content');
                } finally {
                  setIsSubmitting(false);
                }
              }}
              disabled={isSubmitting}
              className="mt-1 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              AI Assist
            </button>
          </div>
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
            Slug*
          </label>
          <input
            id="slug"
            type="text"
            {...register('slug', { required: 'Slug is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.slug && (
            <p className="mt-1 text-sm text-red-600">{errors.slug.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
            Excerpt*
          </label>
          <textarea
            id="excerpt"
            rows={3}
            {...register('excerpt', { required: 'Excerpt is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.excerpt && (
            <p className="mt-1 text-sm text-red-600">{errors.excerpt.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content*
          </label>
          <textarea
            id="content"
            rows={10}
            {...register('content', { required: 'Content is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.content && (
            <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">
            Cover Image URL*
          </label>
          <input
            id="coverImage"
            type="url"
            {...register('coverImage', { required: 'Cover image URL is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.coverImage && (
            <p className="mt-1 text-sm text-red-600">{errors.coverImage.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            Author*
          </label>
          <input
            id="author"
            type="text"
            {...register('author', { required: 'Author is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.author && (
            <p className="mt-1 text-sm text-red-600">{errors.author.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-700">
            Publish Date & Time*
          </label>
          <input
            id="publishedAt"
            type="datetime-local"
            {...register('publishedAt', { required: 'Publish date is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.publishedAt && (
            <p className="mt-1 text-sm text-red-600">{errors.publishedAt.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
            Tags (comma separated)
          </label>
          <input
            id="tags"
            type="text"
            onChange={handleTagsChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <p className="mt-1 text-sm text-gray-500">
            Current tags: {watch('tags')?.join(', ') || 'none'}
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Creating...' : 'Create Post'}
          </button>
        </div>
      </form>
    </div>
  );
}