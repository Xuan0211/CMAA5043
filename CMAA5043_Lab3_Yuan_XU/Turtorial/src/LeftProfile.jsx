import React from 'react';

const LeftProfile = () => {
    return (
        <div className="left-profile">
            <img
                src="https://amslab.org/wp-content/uploads/2023/07/cropped-hkustgz-icon_e794bbe69dbf-1.png"
                alt="HKUST(GZ) Logo"
                className="profile-logo"
            />
            <h2 className="profile-title">HKUST(GZ)</h2>

            <p className="profile-location">
                Nansha,<br />
                Guangzhou,<br />
                Guangdong, China.
            </p>

            <p className="profile-quote">
                上一层、落两<br />层，请使用楼梯
            </p>

            <div className="profile-links">
                <a href="https://hkust-gz.edu.cn/" target="_blank" rel="noreferrer">Official Web</a>
                <a href="https://space.bilibili.com/16783101" target="_blank" rel="noreferrer">Bilibili</a>
                <a href="https://www.xiaohongshu.com/user/profile/640574e60000000029014ff1  " target="_blank" rel="noreferrer">Xiaohongshu</a>
            </div>
        </div>
    );
};

export default LeftProfile;
