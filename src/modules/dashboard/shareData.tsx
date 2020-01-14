import { withStore } from 'services/store'

export const withShareData = withStore('shareData', {} as any)
export const useShareData = withShareData.getShareState
