import {ApiAffiliateService} from "./ApiService"

export async function loginAffiliater (data) {
    console.log(data, "in new Service");
    return ApiAffiliateService.fetchData({
        url: '/affiliation/loginAffiliater',
        method: 'post',
        data
    })
}

export async function updateAffiliater (data) {
    return ApiAffiliateService.fetchData({
        url: '/affiliation/updateAffiliater',
        method: 'post',
        data
    })
}

export async function cretaeaffiliation (data) {
    return ApiAffiliateService.fetchData({
        url: '/affiliation/cretaeaffiliation',
        method: 'post',
        data
    })
}

export async function verifyOtp (data) {
    return ApiAffiliateService.fetchData({
        url: '/affiliation/verifyOtp',
        method: 'post',
        data
    })
}

export const logoutAffiliater = () => {
    localStorage.removeItem("affiliation");
    return true;
};