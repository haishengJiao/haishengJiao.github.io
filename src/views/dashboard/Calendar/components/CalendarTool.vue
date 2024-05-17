<template>
  <div class="calendar-tool w-100-h-100">
    <div class="w-100-h-100 display-flex">
      <div class="tool-sidebar">
        <ul class="segmented-list-group" :style="{ '--li-height': `${toolsSegmentedHeight}px` }">
          <div
            class="segmented-selected"
            :style="{
              transform: `translateY(${toolsSegmentedActive * (toolsSegmentedHeight + 8)}px)`
            }"
          ></div>
          <li
            class="display-flex flex-align"
            v-for="item in toolsSegmentedList"
            :key="item.value"
            :class="{ active: item.value === toolsSegmentedActive }"
            @click="handleToolsSegmented(item.value)"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
      <div class="tool-view flex-1">
        <el-scrollbar height="100%" ref="toolScrollbarRef">
          <transition name="tool-slide">
            <div class="view-date-container" v-show="toolsSegmentedActive === 0">
              <div class="view-date display-flex flex-wrap">
                <div class="natural-day">
                  <el-form :model="naturalDayForm">
                    <el-form-item>
                      <div>{{ $t('calendar.naturalDayIntervalCalculation') }}</div>
                    </el-form-item>
                    <el-form-item :label="$t('calendar.startTime')" label-width="100px">
                      <el-date-picker
                        v-model="naturalDayForm.start"
                        :clearable="false"
                        type="date"
                      />
                    </el-form-item>
                    <el-form-item :label="$t('calendar.endTime')" label-width="100px">
                      <el-date-picker v-model="naturalDayForm.end" :clearable="false" type="date" />
                    </el-form-item>
                    <el-form-item :label="$t('calendar.differenceDays')" label-width="100px">
                      <div class="number-day display-flex flex-align">
                        <span>{{ naturalDayComputed }}</span
                        >{{ $t('calendar.day') }}
                      </div>
                    </el-form-item>
                    <el-form-item>
                      <el-button
                        type="primary"
                        style="width: 240px"
                        @click="handleNaturalDayReset"
                        >{{ $t('calendar.reset') }}</el-button
                      >
                    </el-form-item>
                  </el-form>
                </div>
                <div class="workday">
                  <el-form :model="workdayForm">
                    <el-form-item>
                      <div>{{ $t('calendar.workingDayIntervalCalculation') }}</div>
                    </el-form-item>
                    <el-form-item :label="$t('calendar.startTime')" label-width="100px">
                      <el-date-picker v-model="workdayForm.start" :clearable="false" type="date" />
                    </el-form-item>
                    <el-form-item :label="$t('calendar.endTime')" label-width="100px">
                      <el-date-picker v-model="workdayForm.end" :clearable="false" type="date" />
                    </el-form-item>
                    <el-form-item :label="$t('calendar.differ')" label-width="100px">
                      <div class="number-day display-flex flex-align">
                        <span>{{ workdayComputed }}</span
                        >{{ $t('calendar.workingDays') }}
                      </div>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" style="width: 240px" @click="handleworkdayReset">{{
                        $t('calendar.reset')
                      }}</el-button>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="date-addition-subtraction">
                  <el-form :model="additionSubtractionForm">
                    <el-form-item>
                      <div>{{ $t('calendar.dateAdditionSubtractionCalculation') }}</div>
                    </el-form-item>
                    <el-form-item :label="$t('calendar.startTime')" label-width="100px">
                      <el-date-picker
                        v-model="additionSubtractionForm.start"
                        :clearable="false"
                        type="date"
                      />
                    </el-form-item>
                    <el-form-item :label="$t('calendar.intervalDays')" label-width="100px">
                      <el-input-number
                        v-model="additionSubtractionForm.interval"
                        :placeholder="$t('calendar.days')"
                        step-strictly
                        style="width: 160px"
                      />
                    </el-form-item>
                    <el-form-item :label="$t('calendar.result')" label-width="100px">
                      <div class="result-day display-flex flex-align">
                        {{ additionSubtractionComputed }}
                      </div>
                    </el-form-item>
                    <el-form-item>
                      <el-button
                        type="primary"
                        style="width: 240px"
                        @click="handleAdditionSubtractionReset"
                        >{{ $t('calendar.reset') }}</el-button
                      >
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>
          </transition>
          <transition name="tool-slide">
            <div class="view-festival" v-show="toolsSegmentedActive === 1">
              <div class="selected-yaer-container display-flex">
                <el-date-picker
                  v-model="festivalYear"
                  type="year"
                  :clearable="false"
                  format="YYYY"
                  value-format="YYYY"
                  @change="handleChangeFestivalYear"
                />
                <span>{{ $t('calendar.selectedDateUpdatedHoliday') }}</span>
              </div>
              <ul class="time-line">
                <li class="time-line-item" v-for="item in festivalsList" :key="item.ym">
                  <div class="item-tail"></div>
                  <div class="item-node"></div>
                  <div class="item-wrapper">
                    <div class="warpper-title display-flex flex-align">
                      <div class="title-month">{{ item.month }}</div>
                      <div>
                        <div class="title-en">{{ monthList[item.month] }}</div>
                        <div class="title-unit">{{ $t('calendar.month') }}</div>
                      </div>
                    </div>
                    <div class="warpper-content display-flex flex-wrap">
                      <div v-for="f in item.festivals" :key="f.name">
                        <span>{{ f.name }}</span>
                        <span>[{{ f.lunarTime }} {{ f.solarTime }}]</span>
                        <span
                          >{{ f.isFormerly ? $t('calendar.beenDays1') : t('calendar.daysToGo1')
                          }}<span class="overstriking">{{ f.time }}</span
                          >{{
                            f.isFormerly ? t('calendar.beenDays2') : t('calendar.daysToGo2')
                          }}</span
                        >
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </transition>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import dayjs from 'dayjs'
import { Solar, Lunar, HolidayUtil, SolarYear } from 'lunar-typescript'
import { padZeroIfNeeded } from '@/utils'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  weekMap: {
    type: Array<string>,
    default: []
  }
})

const { t } = useI18n()

const toolsSegmentedActive = ref(0)
const toolsSegmentedHeight = ref(34)
const toolsSegmentedList = ref([
  { value: 0, label: t('calendar.dateDifferenceCalculation') },
  { value: 1, label: t('calendar.festivalBook') }
])
const handleToolsSegmented = (val: number) => {
  toolsSegmentedActive.value = val
}
const ymd = dayjs().format('YYYY-MM-DD')
const naturalDayForm = ref({
  start: ymd,
  end: ymd
})
const naturalDayComputed = computed(() => {
  const start = Solar.fromDate(dayjs(naturalDayForm.value.start).toDate())
  const end = Solar.fromDate(dayjs(naturalDayForm.value.end).toDate())
  return end.subtract(start)
})
const handleNaturalDayReset = () => {
  naturalDayForm.value.start = ymd
  naturalDayForm.value.end = ymd
}

const workdayForm = ref({
  start: ymd,
  end: ymd
})
const workdayComputed = computed(() => {
  let count = 0
  const start = new Date(workdayForm.value.start)
  const end = new Date(workdayForm.value.end)

  while (start <= end) {
    if (!isHoliday(start)) {
      count++
    }
    start.setDate(start.getDate() + 1)
  }
  return count
})
const isHoliday = (start: Date) => {
  if (HolidayUtil.getHoliday(dayjs(start).format('YYYY-MM-DD'))?.isWork()) {
    // 调休上班
    return false
  } else if (HolidayUtil.getHoliday(dayjs(start).format('YYYY-MM-DD'))?.isWork() === false) {
    // 法定节假日
    return true
  } else {
    return start.getDay() === 0 || start.getDay() === 6
  }
}
const handleworkdayReset = () => {
  workdayForm.value.start = ymd
  workdayForm.value.end = ymd
}

const additionSubtractionForm = ref({
  start: ymd,
  interval: 1
})
const additionSubtractionComputed = computed(() => {
  const start = Solar.fromDate(dayjs(additionSubtractionForm.value.start).toDate())
  const result = start.next(additionSubtractionForm.value.interval)
  const year = dayjs(result.toString()).year()
  const month = padZeroIfNeeded(dayjs(result.toString()).month() + 1)
  const day = padZeroIfNeeded(dayjs(result.toString()).date())
  const week = props.weekMap[result.getWeek()]
  return `${t('calendar.ymd', [year, month, day])} ${week}`
})
const handleAdditionSubtractionReset = () => {
  additionSubtractionForm.value.start = ymd
  additionSubtractionForm.value.interval = 1
}

const monthList = [
  '',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]
const festivalYear = ref(`${dayjs().year()}`)
const toolScrollbarRef = ref()
interface FestivalsList {
  year: number
  month: number
  ym: string
  festivals: Festivals[]
}
interface Festivals {
  name: string
  solarTime: string
  lunarTime: string
  time: number
  isFormerly: boolean
}
const festivalsList: Ref<FestivalsList[]> = ref([])
const getFestivalsList = () => {
  const arr: FestivalsList[] = []
  const months = SolarYear.fromDate(dayjs(festivalYear.value).toDate()).getMonths()
  const ymdSolar = Solar.fromDate(dayjs(ymd).toDate())
  months.forEach((month) => {
    const days = month.getDays()
    const y = month.getYear()
    const m = month.getMonth()
    const obj = {
      year: y,
      month: m,
      ym: `${y}-${m}`,
      festivals: [] as Festivals[]
    }
    days.forEach((day) => {
      const toDate = dayjs(day.toString()).toDate()
      const solarDays = Solar.fromDate(toDate)
      const lunarDays = Lunar.fromDate(toDate)
      const subtract = solarDays.subtract(ymdSolar)
      const solarFestivals = solarDays.getFestivals()
      const solarOtherFestivals = solarDays.getOtherFestivals()
      const lunarFestivals = lunarDays.getFestivals()
      const lunarOtherFestivals = lunarDays.getOtherFestivals()
      const list = [
        ...solarFestivals,
        ...solarOtherFestivals,
        ...lunarFestivals,
        ...lunarOtherFestivals
      ]
      if (list.length > 0) {
        list.forEach((f) => {
          const festivalsInfo = {
            name: f,
            solarTime: dayjs(solarDays.toYmd()).format('MM-DD'),
            lunarTime: `${lunarDays.getMonthInChinese()}月${lunarDays.getDayInChinese()}`,
            time: Math.abs(subtract),
            isFormerly: subtract < 0
          }

          obj.festivals.push(festivalsInfo)
        })
      }
    })
    arr.push(obj)
  })
  festivalsList.value = arr
}
getFestivalsList()
const handleChangeFestivalYear = () => {
  getFestivalsList()
  toolScrollbarRef.value.setScrollTop(0)
}
</script>

<style scoped lang="scss">
.calendar-tool {
  position: absolute;
  top: 0;
  left: 0;

  .tool-sidebar {
    padding: 16px 12px;
    width: 180px;
    background-color: var(--calendar-dialog-bg-02);

    .segmented-list-group {
      position: relative;
      margin-top: 40px;
      font-size: 14px;

      .segmented-selected {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--li-height);
        background-color: var(--calendar-dialog-bg-07);
        border-radius: 6px;
        transition: all 0.3s;
        pointer-events: none;

        &::before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          margin: auto 0;
          width: 3px;
          height: 16px;
          background-color: var(--theme-color);
          border-radius: 4px;
          content: '';
        }
      }

      li {
        position: relative;
        z-index: 1;
        padding: 7px 16px;
        margin: 8px 0;
        height: var(--li-height);
        cursor: pointer;

        &:hover {
          color: var(--hover-color);
        }
      }

      li.active {
        color: var(--theme-color);
      }
    }
  }

  .tool-view {
    padding: 50px 20px 20px;
    background-color: var(--calendar-dialog-bg-01);

    .view-festival.tool-slide-enter-active {
      opacity: 0;
    }

    .view-date-container.tool-slide-leave-to {
      opacity: 0;
      transition: all 0.3s ease;
      transform: translateY(-500px);
    }

    .view-festival.tool-slide-enter-to {
      opacity: 1;
      transition: all 0.3s ease;
      transform: translateY(-500px);
    }

    .view-date-container.tool-slide-enter-active {
      opacity: 0;
      transform: translateY(-500px);
    }

    .view-festival.tool-slide-leave-active {
      transform: translateY(-500px);
      opacity: 1;
    }

    .view-date-container.tool-slide-enter-to {
      opacity: 1;
      transition: all 0.3s ease;
      transform: translateY(0);
    }

    .view-festival.tool-slide-leave-to {
      opacity: 0;
      transition: all 0.3s ease;
      transform: translateY(0);
    }

    :deep(.el-input),
    :deep(.el-input-number) {
      --el-date-editor-width: 160px;
      --el-input-bg-color: var(--calendar-dialog-bg-05);
      --el-input-border-color: none;
      --el-input-hover-border-color: #c0c4cc;
      --el-input-focus-border-color: #c0c4cc;
      --el-input-icon-color: var(--calendar-color-06);
      --el-fill-color-light: var(--calendar-dialog-bg-08);
      --el-input-border-radius: 8px;
      --el-border: none;

      .el-input-number__increase,
      .el-input-number__decrease {
        --el-border-radius-base: 8px;
      }
    }

    .view-date {
      & > div {
        width: 50%;
      }

      .number-day {
        font-size: 14px;

        span {
          margin-right: 5px;
          font-size: 30px;
          color: var(--theme-color);
          font-weight: 700;
        }
      }

      .result-day {
        font-size: 18px;
        font-weight: 700;
        color: var(--theme-color);
      }
    }

    .view-festival {
      .selected-yaer-container {
        position: sticky;
        top: 0;
        z-index: 1;
        padding-bottom: 20px;
        background-color: var(--calendar-dialog-bg-01);

        & > span {
          margin-left: 5px;
          font-size: 12px;
          color: 939393;
          align-self: end;
        }
      }

      .time-line {
        .time-line-item {
          position: relative;
          padding-bottom: 20px;

          .item-tail {
            position: absolute;
            left: 5px;
            width: 2px;
            height: 100%;
            background-color: var(--calendar-bd-02);
          }

          .item-node {
            position: absolute;
            width: 12px;
            height: 12px;
            background-color: var(--calendar-bd-02);
            border-radius: 50%;
          }

          .item-wrapper {
            padding-left: 28px;

            .warpper-title {
              .title-month {
                font-size: 60px;
              }

              .title-en {
                margin-top: -4px;
                font-size: 30px;
                color: var(--calendar-color-03);
              }

              .title-unit {
                margin-top: 2px;
                color: var(--calendar-color-04);
              }
            }

            .warpper-content {
              line-height: 24px;
              padding-left: 50px;
              font-size: 14px;

              & > div {
                padding-right: 10px;
                width: 50%;

                span:nth-child(2) {
                  margin: 0 5px;
                  font-size: 12px;
                  color: var(--calendar-color-05);
                }

                span:nth-child(3) {
                  font-size: 12px;
                  color: var(--calendar-color-05);
                }

                .overstriking {
                  margin: 0 2px;
                  font-size: 14px;
                  font-weight: bold;
                }
              }
            }
          }

          &:last-child {
            .item-tail {
              display: none;
              width: 0;
            }
          }
        }
      }
    }
  }
}
</style>
