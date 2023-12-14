import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className='Loader'>
   <ThreeDots 
      height="80" 
      width="80" 
      radius="9"
      color="#87CEEB" 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
    </div>
  );
};