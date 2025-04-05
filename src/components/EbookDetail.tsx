import { useEbooks } from '@/data/mockData';

const EbookDetail = ({ id }) => {
  const { ebooks } = useEbooks();
  const ebook = ebooks.find(e => e.id === id);
  
  if (!ebook) return <div>Ebook not found</div>;

  return (
    <div className="ebook-detail">
      {/* Your ebook detail rendering */}
    </div>
  );
};