function myAsync1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("async1")
      }, 3000)
  })
}

function myAsync2() {
	return new Promise((resolve) => {
    setTimeout(() => {
      resolve("async2")
      }, 2000)
  })
}

function myAsync3() {
	return new Promise((resolve) => {
    setTimeout(() => {
      resolve("async3")
      }, 1000)
  })
}

function myAsync4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
          // lets say something happened
        throw new Error('Forced Error')
        } catch (err) {
          reject(err) 
        }
      }, 3000)
  })
}

function start() {
  myAsync1().then((p) => {
    console.log(p)
    return myAsync2()
  }).then((p) => {
    console.log(p)
    return myAsync3()
  }).then((p) => {
    console.log(p)
    return myAsync4
  }).catch((p) => {
    console.log(p.message)
  })
}

start()