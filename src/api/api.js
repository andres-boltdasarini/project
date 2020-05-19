import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "8dad721b-07dd-4157-91ca-677639a53914"
    }
});


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    },
    me() {
        console.warn('Obsolete method. Please profileAPI object.')
        return authAPI.me();
    },
    getStatus(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getStatus(userId);
    },
    updateStatus(status) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.updateStatus(status);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}