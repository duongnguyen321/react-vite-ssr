
interface ImageProps extends React.ComponentProps<'img'> {
  size: number;
  width?: number;
  height?: number;
  name: string;
}

const Icons = ({ name, size = 16, width, height, ...props }: ImageProps) => {
  return (
    <img
      alt={name}
      src={`/icons/${name}.svg`}
      width={size || width}
      height={size || height}
      {...props}
    />
  );
};

export default Icons;
