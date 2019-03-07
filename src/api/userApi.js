import {fetch} from "../utils/fetch"

export const userInfo = (params)=> fetch('/getUser',params,"post");