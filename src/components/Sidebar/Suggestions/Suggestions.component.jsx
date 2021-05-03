import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';

const Suggestions = ({ userId }) => {
  const [profiles, setProfiles] = useState();

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
    </div>
  ) : null;
};
export default Suggestions;

Suggestions.propTypes = {
  userId: PropTypes.string,
};
