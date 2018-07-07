function deleteFromObjectByKey(object, key){
  newObj = Object.assign({}, object)
  delete newObj.key 
  return newObj
}
