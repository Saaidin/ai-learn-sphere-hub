import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { vibeCodingItems } from '../data/vibeCodingData';

const VibeCodingDetails = () => {
  const { id } = useParams();
  const item = vibeCodingItems.find((item) => item.id === id);

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Item not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
          <p className="text-gray-600 mb-6">{item.description}</p>

          {id === '3' && (
            <div className="flex justify-center">
              <Button
                className="bg-ai-primary hover:bg-ai-accent text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors"
                onClick={() => window.open(item.websiteUrl, '_blank', 'noopener,noreferrer')}
              >
                Have A Look My App
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VibeCodingDetails;