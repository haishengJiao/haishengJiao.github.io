<template>
  <div
    class="calendar-container dashboard-item-container display-flex display-column"
    title="日历"
    @click="calendarDialogVisible = true"
  >
    <div class="calendar-title">2024年5月</div>
    <div class="calendar-content flex-1">
      <div class="today">9</div>
      <div class="day">第130天第19周</div>
      <div class="week">四月初二 周四</div>
    </div>
  </div>
  <self-dialog v-model:show="calendarDialogVisible">
    <div class="calendar-dialog w-100-h-100">
      <div class="segmented-container">
        <el-segmented v-model="segmentedValue" :options="segmentedOptions" />
      </div>
      <transition name="calendar-flip">
        <calendar-board v-show="segmentedValue === '日历'"></calendar-board>
      </transition>
      <transition name="calendar-flip">
        <calendar-tool v-show="segmentedValue === '工具'"></calendar-tool>
      </transition>
    </div>
  </self-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CalendarBoard from './components/CalendarBoard.vue'
import CalendarTool from './components/CalendarTool.vue'

const calendarDialogVisible = ref(false)

const segmentedValue = ref('日历')
const segmentedOptions = ['日历', '工具']
</script>

<style scoped lang="scss">
.calendar-container {
  .calendar-title {
    height: 38px;
    font-size: 16px;
    text-align: center;
    color: var(--color-02);
    background-color: #ff5a5d;
    line-height: 38px;
  }

  .calendar-content {
    text-align: center;
    background-color: var(--memo-bg-01);

    .today {
      height: 64px;
      line-height: 64px;
      font-size: 50px;
      font-weight: 700;
    }

    .day {
      font-size: 12px;
      color: #989898;
      line-height: 22px;
    }

    .week {
      font-size: 12px;
    }
  }
}

.calendar-dialog {
  position: relative;
  user-select: none;

  .segmented-container {
    position: absolute;
    top: 4px;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);

    .el-segmented {
      width: 144px;

      --el-border-radius-base: 16px;
      --el-segmented-item-hover-bg-color: none;
      --el-segmented-item-active-bg-color: none;
      --el-segmented-item-hover-color: #333;
      --el-segmented-color: rgb(0 0 0 / 60%);
      --el-segmented-bg-color: #e5e5e5;
    }
  }

  .calendar-flip-enter-active,
  .calendar-flip-leave-active {
    transition: transform 0.3s ease;
  }

  .calendar-board.calendar-flip-leave-to,
  .calendar-tool.calendar-flip-leave-to {
    transform: rotateY(90deg);
  }

  .calendar-board.calendar-flip-enter-active,
  .calendar-tool.calendar-flip-enter-active {
    transform: rotateY(90deg);
  }

  .calendar-board.calendar-flip-enter-to,
  .calendar-tool.calendar-flip-enter-to {
    transform: rotateY(0deg);
    transition-delay: 0.3s;
  }
}
</style>
