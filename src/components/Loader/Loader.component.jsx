import React from 'react';
import { default as ReactLoaderSpinner } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ReactLoaderSpinner
      type="TailSpin"
      color="#00000059"
      height={70}
      width={70}
      className="flex justify-center mt-12"
    />
  );
};
export default Loader;
