function addIndexAndExcluded(videoList) {

  const newList = videoList.map(video => ({
    index: videoList.indexOf(video),
    excluded: false,
    ...video
  }))

  return newList
}

export default addIndexAndExcluded