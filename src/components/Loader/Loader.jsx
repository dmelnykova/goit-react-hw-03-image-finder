import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#87CEEB"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        margin: '0 auto',
        display: 'block'
      }}
      wrapperClassName="three-dots-loading"
      visible={true}
      // position="fixed"
      // top="0"
      // left="0"
      justify-content="center"
      align-items="center"
      // width="100vw"
      // height="100vh"
    />
  );
};