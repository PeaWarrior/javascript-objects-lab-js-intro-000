function updateObjectWithKeyAndValue(object, key, value){
  let ans = Object.assign({}, object, { [key] : value })
  return ans
}
