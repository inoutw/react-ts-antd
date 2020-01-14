import { httpPost, httpGet, httpPut, httpDelete } from 'services/http'

export interface AuthTokenVO {
  /** 用于刷新token的令牌 */
  refreshToken?: string
  /** token */
  token?: string
}

export interface PageList<T> {
  /** 数据总条数，前端接口可忽略改字段 */
  count?: number
  /** 数据集合 */
  entities?: T[]
  /** 当前页码 */
  pageNo?: number
  /** 每页条数 */
  pageSize?: number
}

export interface LoginVO {
  /** token信息 */
  authInfo?: AuthTokenVO
  /** 用户基本信息 */
  user?: UserBaseInfoVO
}

export interface UserBaseInfoVO {
  /** 用户角色集合 */
  roles?: UserRole[]
  /** 用户性别 0-女 1-男 */
  userGenders?: number
  /** 用户id */
  userId?: number
  /** 头像 */
  userImg?: string
  userName?: string
}

export interface UserRole {
  /** 角色 */
  role?: string
  /** 角色头衔 */
  roleTitle?: string
}
export interface UserTagInfo {
  /** 标签名称 */
  tagName?: string
  /** 用户人数 */
  userNumber?: number
}

export default {
  auth: {
    /**
     * 刷新token
     */
    refreshToken(authTokenVO: AuthTokenVO): Promise<AuthTokenVO> {
      return httpPost(`/user/v1.0/pb/auth/action/refreshToken`, authTokenVO).then((res: any) => res.data.data)
    },
  },
  userTagInfos: {
    listPage(params: { pageNo?: number; pageSize?: number }): Promise<PageList<UserTagInfo>> {
      return httpGet(`/user/v1.0/pt/user-tag-infos/action/list-page`, { params }).then((res: any) => res.data.data)
    },
  },
}
