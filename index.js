function updateObjectWithKeyAndValue(object, key, value){
  let ans = Object.assign({}, object, { [key] : value })
  return ans
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, { [key] : value })
}

function deleteFromObjectByKey(object, key){
  let objectClone = object
  delete objectClone[key]
  return objectClone
}
