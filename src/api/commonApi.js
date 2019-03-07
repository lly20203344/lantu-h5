import { fetch } from '../utils/fetch'

export const getInviteCode = (params) => fetch("/users/invite_code", params, "get");
export const getpersonalData = (params) => fetch("/getpersonalData", params, "get");
