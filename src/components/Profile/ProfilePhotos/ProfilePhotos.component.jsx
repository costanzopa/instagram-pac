import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

const ProfilePhotos = ({ photos }) => {
  return (
    <div className="h-16 border-t border-gray-primary mt-12 pt-4">
      <div className="grid grid-cols-3 gap-8 mt-4 mb-12"></div>
    </div>
  );
};

ProfilePhotos.propTypes = {
  photos: PropTypes.array,
};

export default ProfilePhotos;
