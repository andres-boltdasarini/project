import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return  <Preloader/>
    }
    return (<div>
            <div>
                <img src='https://avatars.mds.yandex.net/get-pdb/251121/e0ad3863-7974-4a1a-9098-398badc9f004/s1200'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;