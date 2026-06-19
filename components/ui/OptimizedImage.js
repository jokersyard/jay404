import Image from 'next/image';

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={75}
      placeholder="blur"
      blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
      className={className}
      {...props}
    />
  );
};
