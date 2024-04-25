<template>
  <div class="dashboard-container display-flex flex-align flex-justify">
    <div class="timepiece-container">
      <div class="central-point"></div>
      <div class="pointer hour-pointer" ref="hourPointerRef"></div>
      <div class="pointer minute-pointer" ref="minutePointerRef"></div>
      <div class="pointer second-pointer" ref="secondPointerRef"></div>
      <div class="minute-container display-flex flex-align flex-justify">
        <div class="minute-mark" v-for="i in 12" :key="i"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const hourPointerRef = ref()
const minutePointerRef = ref()
const secondPointerRef = ref()
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const startTime = () => {
  const now = new Date()
  const formatHours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours()
  seconds.value = now.getSeconds()
  minutes.value = now.getMinutes() + seconds.value
  hours.value = formatHours * 60 * 60 + minutes.value
  secondPointerRef.value.style.transform = `rotate(${(360 / 60) * seconds.value}deg)`
  minutePointerRef.value.style.transform = `rotate(${(360 / 60 / 60) * minutes.value}deg)`
  hourPointerRef.value.style.transform = `rotate(${(360 / 60 / 60 / 12) * hours.value}deg)`
  setInterval(() => {
    seconds.value++
    minutes.value++
    hours.value++
    if (seconds.value === 60) seconds.value = 0
    if (minutes.value === 60 * 60) minutes.value = 0
    if (hours.value === 60 * 60 * 12) hours.value = 0
    secondPointerRef.value.style.transform = `rotate(${(360 / 60) * seconds.value}deg)`
    minutePointerRef.value.style.transform = `rotate(${(360 / 60 / 60) * minutes.value}deg)`
    hourPointerRef.value.style.transform = `rotate(${(360 / 60 / 60 / 12) * hours.value}deg)`
  }, 1000)
}

onMounted(() => {
  startTime()
})
</script>

<style scoped lang="scss">
@use 'sass:math';

.dashboard-container {
  width: 100%;
  height: 100%;
  background-color: #282828;

  .timepiece-container {
    --timepiece-size: 300px;

    position: relative;
    width: var(--timepiece-size);
    height: var(--timepiece-size);
    border: 7px solid #282828;
    border-radius: 50%;

    // eslint-disable-next-line prettier/prettier
    box-shadow:
      // eslint-disable-next-line prettier/prettier
      -4px -4px 10px rgb(67 67 67 / 50%),
      // eslint-disable-next-line prettier/prettier
      inset 4px 4px 10px rgb(0 0 0 / 50%),
      // eslint-disable-next-line prettier/prettier
      inset -4px -4px 10px rgb(67 67 67 / 50%),
      4px 4px 10px rgb(0 0 0 / 30%);

    .central-point {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 4;
      width: 16px;
      height: 16px;
      background-color: #4d4b63;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    .pointer {
      --hour-width: 6px;
      --minute-width: 4px;
      --second-width: 2px;

      position: absolute;
      bottom: 50%;
      transform-origin: bottom;
      transform: rotate(0deg);
    }

    .hour-pointer {
      left: calc(50% - calc(var(--hour-width) / 2));
      z-index: 3;
      width: var(--hour-width);
      height: 60px;
      background-color: rgb(19 130 234 / 100%);
      border-radius: calc(var(--hour-width) / 2) calc(var(--hour-width) / 2) 0 0;
      transform: rotate(18deg);
    }

    .minute-pointer {
      left: calc(50% - calc(var(--minute-width) / 2));
      z-index: 2;
      width: var(--minute-width);
      height: 80px;
      background-color: rgb(19 234 212 / 100%);
      border-radius: calc(var(--minute-width) / 2) calc(var(--minute-width) / 2) 0 0;
    }

    .second-pointer {
      left: calc(50% - calc(var(--second-width) / 2));
      z-index: 1;
      width: var(--second-width);
      height: 100px;
      background-color: rgb(19 234 155 / 100%);
      border-radius: calc(var(--second-width) / 2) calc(var(--second-width) / 2) 0 0;
    }

    .minute-container {
      --minute-size: calc(var(--timepiece-size) - 14%);

      position: absolute;
      top: 50%;
      left: 50%;
      width: var(--minute-size);
      height: var(--minute-size);
      border-radius: 50%;
      transform: translate(-50%, -50%);

      .minute-mark {
        position: absolute;
        width: 2px;
        height: 12px;
        background-color: #bdbdcb;
      }

      @for $i from 1 through 12 {
        .minute-mark:nth-child(#{$i}) {
          transform: rotate(30 * $i + deg) translate(0%, calc(-1 * var(--minute-size) / 2 + 24px));

          @if $i % 3 == 0 {
            width: 4px;
            height: 20px;
            background-color: #1df52f;
            transform: // eslint-disable-next-line prettier/prettier
              rotate(30 * $i + deg) translate(0%, calc(-1 * var(--minute-size) / 2 + 28px));
          }
        }
      }
    }
  }
}
</style>
