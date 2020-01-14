export function fuzzyNumber(phoneNum: string) {
  if (!phoneNum) return
  return phoneNum.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2')
}
