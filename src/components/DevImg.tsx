import Image from 'next/image';

interface DevImgProps {
  containerStyles: string;
  imgSrc: string;
}

const DevImg: React.FC<DevImgProps> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={containerStyles}>
      <Image src={imgSrc} layout="fill" priority alt="" />
    </div>
  );
};

export default DevImg;

