import {BaseBookService, BaseAffiliateService , BasePaymentService} from './BaseService'

export const ApiBookService = {
    fetchData(param) {
        return new Promise((resolve, reject) => {
            BaseBookService(param).then(response => {
                resolve(response)
            }).catch(errors => {
                reject(errors)
            })
        })
    }
}

export const ApiAffiliateService = {
    fetchData(param) {
        return new Promise((resolve, reject) => {
            BaseAffiliateService(param).then(response => {
                resolve(response)
            }).catch(errors => {
                reject(errors)
            })
        })
    }
}

export const ApiPaymentService = {
    fetchData(param) {
        return new Promise((resolve, reject) => {
            BasePaymentService(param).then(response => {
                resolve(response)
            }).catch(errors => {
                reject(errors)
            })
        })
    }
}

