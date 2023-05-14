import axios from 'axios'
import { BookBaseURL, AffiliateBaseURL, PaymentBaseURL  } from "../configs/app.config";
import { TOKEN_TYPE, REQUEST_HEADER_AUTH_KEY } from '../constants/api.constant'

const unauthorizedCode = [401]

//Affliate Server Api Calls

export const BaseAffiliateService = axios.create({
    timeout: 60000,
    baseURL: AffiliateBaseURL
})

BaseAffiliateService.interceptors.request.use(config => {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${user.accessToken}`
    }

    return config
}, error => {
    return Promise.reject(error)
})

BaseAffiliateService.interceptors.response.use(
    response => response,
    error => {

        const { response } = error

        if (response && unauthorizedCode.includes(response.status)) {
            // store.dispatch(onSignOutSuccess())
        }

        return Promise.reject(error)
    }
)

//Book Server Api Calls

export const BaseBookService = axios.create({
    timeout: 60000,
    baseURL: BookBaseURL
})

BaseBookService.interceptors.request.use(config => {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${user.accessToken}`
    }

    return config
}, error => {
    return Promise.reject(error)
})

BaseBookService.interceptors.response.use(
    response => response,
    error => {

        const { response } = error

        if (response && unauthorizedCode.includes(response.status)) {
            // store.dispatch(onSignOutSuccess())
        }

        return Promise.reject(error)
    }
)

//Payment Server Api Calls

export const BasePaymentService = axios.create({
    timeout: 60000,
    baseURL: PaymentBaseURL
})

BasePaymentService.interceptors.request.use(config => {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${user.accessToken}`
    }

    return config
}, error => {
    return Promise.reject(error)
})

BasePaymentService.interceptors.response.use(
    response => response,
    error => {

        const { response } = error

        if (response && unauthorizedCode.includes(response.status)) {
            // store.dispatch(onSignOutSuccess())
        }

        return Promise.reject(error)
    }
)