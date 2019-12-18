import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (<div>
            <div>
                <img src='https://avatars.mds.yandex.net/get-pdb/251121/e0ad3863-7974-4a1a-9098-398badc9f004/s1200'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;