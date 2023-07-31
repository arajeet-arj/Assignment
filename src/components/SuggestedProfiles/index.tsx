import './suggestedProfiles.css';

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';

const SuggestedProfiles = () => {
  const { photos }: { photos: any[] } = useSelector(
    (state: RootState) => state.newsFeed
  );

  return (
    <div className="sp01Container">
      <div className="sp01Title">Suggested Profiles</div>
      <div className="sp01ProfileList">
        {photos.length > 0 &&
          photos.map((photo: any) => {
            const user = photo.user;
            return (
              <Link key={user.username} to={`/profile/${user.username}`}>
                <div className="sp01ProfileCard">
                  <img
                    src={user.profile_image.medium || ""}
                    alt={user.name || ""}
                    className="sp01ProfileImage"
                  />
                  <div className="sp01ProfileInfo">
                    <div className="sp01Username">{user.username}</div>
                    <div className="sp01UserStats">
                      <div className="sp01UserStatItem">
                        <i className="fi-rr-users flaticon"></i>
                        <span className="sp01UserStatFigure">
                          {user.followers_count}
                        </span>
                        Followers
                      </div>
                      <div className="sp01UserStatItem">
                        <i className="fi-rr-camera flaticon"></i>
                        <span className="sp01UserStatFigure">
                          {user.total_photos}
                        </span>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default SuggestedProfiles;
