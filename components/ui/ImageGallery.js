export const ImageGallery = ({ 
  images = [], 
  className = '',
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <div className={className}>
      <div className="mb-4 rounded-lg overflow-hidden bg-slate-800 h-96">
        <img src={images[selectedIndex]} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`rounded overflow-hidden ${selectedIndex === idx ? 'ring-2 ring-indigo-500' : ''}`}
          >
            <img src={img} alt="" className="w-full h-20 object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};
