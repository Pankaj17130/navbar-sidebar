import { useState, useEffect } from 'react';
import { PhotoIcon } from '@heroicons/react/24/outline';

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = '/assets/placeholder-image.jpg',
  showPlaceholder = false,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setIsLoading(true);
    setHasError(false);
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  return (
    <div className={`relative ${className}`}>
      <img
        {...props}
        src={imgSrc}
        alt={alt}
        className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
      />
      
      {(isLoading || hasError || showPlaceholder) && (
        <div className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center gap-2 animate-pulse">
          <PhotoIcon className="w-8 h-8 text-gray-300" />
          {hasError && (
            <span className="text-xs text-gray-400 text-center">
              Failed to load image
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;