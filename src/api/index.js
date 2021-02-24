import axiosRequest from './request'

/**联系我们 */
export const contactApi = (parmars) => axiosRequest.post(`/advises`, parmars)
/**注册 */
export const registerApi = (parmars) => axiosRequest.post(`/auth/local/register`, parmars)
/**登录 */
export const loginApi = (parmars) => axiosRequest.post(`/auth/local`, parmars)
