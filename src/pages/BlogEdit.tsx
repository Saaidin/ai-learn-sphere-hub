import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getBlogPostBySlug, updateBlogPost } from '@/lib/api/blog';

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

export default function BlogEdit() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleAIAssist = () => {
    const currentTitle = watch('title') || 'Untitled Post';
    setValue('slug', currentTitle.toLowerCase().replace(/\s+/g, '-'));
    setValue('excerpt', `This is an excerpt for "${currentTitle}".`);
    setValue('content', `# ${currentTitle}\n\nThis is the AI-generated content for "${currentTitle}".`);
    setValue('coverImage', 'https://via.placeholder.com/800x400.png?text=Cover+Image');
    setValue('author', 'AI Assistant');
    setValue('publishedAt', new Date().toISOString().slice(0, 16));
    setValue('tags', ['AI', 'Generated', 'Blog']);
  };
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm<BlogPostFormData>();

  const slug = 'ai-coding-for-beginners';

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await getBlogPostBySlug(slug);
        if (response.status >= 400 || !response.data) {
          throw new Error(response.error || 'Failed to fetch blog post');
        }

        const post = response.data as any; // Adjust type as needed
        setValue('title', post.title || '');
        setValue('slug', post.slug || '');
        setValue('content', post.content || '');
        setValue('excerpt', post.excerpt || '');
        setValue('coverImage', post.coverImage || post.imageUrl || '');
        setValue('author', post.author || '');
        setValue('publishedAt', new Date(post.publishedAt).toISOString().slice(0, 16));
        setValue('tags', post.tags || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [slug, setValue]);

  const onSubmit = async (data: BlogPostFormData) => {
    try {
      setIsSubmitting(true);
      setError(null);

      const response = await updateBlogPost(slug, {
        ...data,
        publishedAt: new Date(data.publishedAt),
      });

      if (response.status >= 400) {
        throw new Error(response.error || 'Failed to update blog post');
      }

      navigate(`/blog/${slug}`);
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

  if (isLoading) {
    return <div className="max-w-4xl mx-auto py-8 px-4">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Edit Blog Post</h1>


      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex items-start gap-2">
          <div className="flex-1">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title*
            </label>
            <input
              id="title"
              type="text"
              {...register('title', { required: 'Title is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>
          <button
            type="button"
            onClick={handleAIAssist}
            className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            AI Assist
          </button>
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
            disabled
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
            {isSubmitting ? 'Updating...' : 'Update Post'}
          </button>
        </div>
      </form>
    </div>
  );
}