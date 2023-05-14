import {ApiAffiliateService} from "./ApiService"

export async function getSettings (data) {
    return ApiAffiliateService.fetchData({
        url: '/affiliation/getSettings',
        method: 'post',
        data
    })
}

export async function updateSettings (data) {
    return ApiAffiliateService.fetchData({
        url: '/affiliation/updateSettings',
        method: 'post',
        data
    })
}