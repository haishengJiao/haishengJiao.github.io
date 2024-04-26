// 为了解决定时器不准
let workeTimer: string | number | NodeJS.Timeout | undefined
const startTime = function () {
  workeTimer = setInterval(() => {
    postMessage(new Date())
  }, 1000)
}

onmessage = function (e) {
  if (e.data.type === 'pause') {
    clearInterval(workeTimer)
  } else if (e.data.type === 'start') {
    startTime()
  }
}

export {}
