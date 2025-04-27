import Image from "next/image";

const NextImage = ({ src, width, height, alt, ...props }) => {
  return (
    <Image
      src={src.trimStart()}
      width={width}
      height={height}
      alt={alt}
      {...props}
    />
  );
};

export default NextImage;
