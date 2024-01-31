import Image from 'next/image';

const MyImage = ({...props }) => {
  return (
    <Image
      unoptimized={true}
      {...props}
    />
  );
};

export default MyImage;