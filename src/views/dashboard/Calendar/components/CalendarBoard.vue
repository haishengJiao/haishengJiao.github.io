<template>
  <div class="calendar-board w-100-h-100">
    <div class="display-flex w-100-h-100">
      <div class="calendar-info flex-1 display-flex display-column">
        <div class="select-calendar display-flex flex-align">
          <el-date-picker
            v-model="selectedYear"
            type="year"
            :clearable="false"
            format="YYYY"
            value-format="YYYY"
            @change="handleChangeYear"
          />
          <el-date-picker
            v-model="selectedMonth"
            type="month"
            :clearable="false"
            format="MM"
            value-format="YYYY-MM"
            @change="handleChangeMonth"
          />
          <div class="month-toggle-btn select-btn-public" @click="handleLastMonth">
            <i class="iconfont icon-zuojiantou"></i>
          </div>
          <div class="month-toggle-btn select-btn-public" @click="handleNextMonth">
            <i class="iconfont icon-youjiantou"></i>
          </div>
          <transition name="today-fade">
            <div class="today-btn select-btn-public" v-if="isShowToday" @click="handleClickToday">
              今
            </div>
          </transition>
          <div class="week-switch">
            <el-switch
              v-model="weekSwitch"
              inline-prompt
              active-text="一"
              inactive-text="日"
              @change="handleChangeWeek"
            />
          </div>
        </div>
        <div class="calendar-list flex-1 display-flex display-column">
          <ul class="week-list display-flex flex-align">
            <li
              v-for="item in weekList"
              :key="item"
              class="flex-1 display-flex flex-justify"
              :class="{ 'week-end': item === '六' || item === '日' }"
            >
              {{ item }}
            </li>
          </ul>
          <ul class="list display-flex flex-wrap flex-1">
            <li v-for="item in daysList" :key="item.ymd" @click="handleClickDay(item)">
              <div
                class="item-container w-100-h-100 display-flex display-column flex-align flex-justify"
                :class="{
                  'rest-bg': item.isRest,
                  'duty-bg': item.isWork,
                  'other-month': item.currentMonth !== item.month,
                  'today-bg': item.ymd === currentDay,
                  'selected-bg': item.ymd === selectedDay
                }"
              >
                <div class="duty" v-if="item.isWork">班</div>
                <div class="rest" v-if="item.isRest">休</div>
                <div
                  class="number"
                  :class="{
                    'week-end':
                      item.isRest || ((item.week === 6 || item.week === 0) && !item.isWork)
                  }"
                >
                  {{ padZeroIfNeeded(item.day) }}
                </div>
                <div
                  class="text text-ellipses"
                  :class="{
                    festival:
                      item.festivals.length > 0 ||
                      item.chineseFestivals.length > 0 ||
                      item.solarTerms
                  }"
                  :title="handleFormatdayText(item)"
                >
                  {{ handleFormatdayText(item) }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="today-info display-flex display-column">
        <div class="today-card display-flex display-column flex-align">
          <div class="today-card-header">2024-05-09 周四</div>
          <div class="today-card-content">9</div>
          <div class="today-card-chinese">二〇二四年三月廿三</div>
          <div class="chinese-zodiac">甲辰(龙)年</div>
          <div class="which-day">本年第18周， 第122天</div>
        </div>
        <el-scrollbar height="100%">
          <ul class="today-other-list">
            <li class="display-flex">
              <span class="text flex-1">距离母亲节还有3天</span>
            </li>
            <li class="display-flex">
              <span class="tag animals">生肖</span>
              <span class="text flex-1">龙</span>
            </li>
            <li class="display-flex flex-align">
              <span class="tag constellation">星座</span>
              <span class="text">金牛座</span>
              <div class="constellation-icon display-flex flex-align flex-justify">
                <!-- 摩羯座 -->
                <!-- <img src="@/assets/images/calendar/capricornus.png" /> -->
                <!-- 水瓶座 -->
                <!-- <img src="@/assets/images/calendar/aquarius.png" /> -->
                <!-- 双鱼座 -->
                <!-- <img src="@/assets/images/calendar/pisces.png" /> -->
                <!-- 白羊座 -->
                <!-- <img src="@/assets/images/calendar/aries.png" /> -->
                <!-- 金牛座 -->
                <img src="@/assets/images/calendar/taurus.png" />
                <!-- 双子座 -->
                <!-- <img src="@/assets/images/calendar/gemini.png" /> -->
                <!-- 巨蟹座 -->
                <!-- <img src="@/assets/images/calendar/cancer.png" /> -->
                <!-- 狮子座 -->
                <!-- <img src="@/assets/images/calendar/leo.png" /> -->
                <!-- 处女座 -->
                <!-- <img src="@/assets/images/calendar/virgo.png" /> -->
                <!-- 天秤座 -->
                <!-- <img src="@/assets/images/calendar/libra.png" /> -->
                <!-- 天蝎座 -->
                <!-- <img src="@/assets/images/calendar/scorpio.png" /> -->
                <!-- 射手座 -->
                <!-- <img src="@/assets/images/calendar/sagittarius.png" /> -->
              </div>
            </li>
            <li class="display-flex">
              <span class="tag festival">节日</span>
              <span class="text flex-1"
                >母亲节，全国防灾减灾日，护士节母亲节，全国防灾减灾日，护士节母亲节，全国防灾减灾日，护士节母亲节，全国防灾减灾日，护士节</span
              >
            </li>
            <li class="display-flex">
              <span class="tag suitable">宜</span>
              <span class="text flex-1"
                >开市，交易，立券，纳财，动土，开光，出行，嫁娶，纳采，订盟，入学，开仓，出货财，纳畜，牧养，栽种，破土，启钻，安葬，立碑</span
              >
            </li>
            <li class="display-flex">
              <span class="tag avoid">忌</span>
              <span class="text flex-1">无</span>
            </li>
            <li class="display-flex">
              <span class="tag moon">月相</span>
              <span class="text flex-1">峨眉月</span>
              <span class="tag moon" style="margin-left: auto">物候</span>
              <span class="text flex-1" style="margin-right: auto">温风至</span>
            </li>
            <li class="display-flex display-column">
              <span class="text flex-1">喜神方位：西南</span>
              <span class="text flex-1">喜神方位：西南</span>
              <span class="text flex-1">喜神方位：西南</span>
              <span class="text flex-1">喜神方位：西南</span>
              <span class="text flex-1">喜神方位：西南</span>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import dayjs from 'dayjs'
import { Solar, SolarMonth, Lunar, HolidayUtil } from 'lunar-typescript'
import { padZeroIfNeeded } from '@/utils'
import { encrypt, decrypt } from '@/utils/crypto'

const selectedYear = ref(`${dayjs().year()}`)
const selectedMonth = ref(`${dayjs().year()}-${padZeroIfNeeded(dayjs().month() + 1)}`)
const selectedDay = ref(
  `${dayjs().year()}-${padZeroIfNeeded(dayjs().month() + 1)}-${padZeroIfNeeded(dayjs().date())}`
)
const currentYear = ref(`${dayjs().year()}`)
const currentMonth = ref(`${dayjs().year()}-${padZeroIfNeeded(dayjs().month() + 1)}`)
const currentDay = ref(
  `${dayjs().year()}-${padZeroIfNeeded(dayjs().month() + 1)}-${padZeroIfNeeded(dayjs().date())}`
)

const CALENDAR_WEEK_SWITCH_key = encrypt('CALENDAR_WEEK_SWITCH')
const weekSwitchLocal = localStorage.getItem(CALENDAR_WEEK_SWITCH_key)
const weekSwitch = ref(weekSwitchLocal !== null ? decrypt(weekSwitchLocal) === 'true' : false)
const weekList = ref(['日', '一', '二', '三', '四', '五', '六'])
const setWeekList = () => {
  if (weekSwitch.value) {
    weekList.value = ['一', '二', '三', '四', '五', '六', '日']
  } else {
    weekList.value = ['日', '一', '二', '三', '四', '五', '六']
  }
}
setWeekList()
const handleChangeWeek = (val: string | number | boolean) => {
  setWeekList()
  localStorage.setItem(CALENDAR_WEEK_SWITCH_key, encrypt(JSON.stringify(val)))
  getViewDayList()
}

interface DaysList {
  year: number
  month: number
  day: number
  ymd: string
  currentYear: number
  currentMonth: number
  currentDay: number
  currentYmd: string
  festivals: Array<string>
  otherFestivals: Array<string>
  chineseFestivals: Array<string>
  chineseOtherFestivals: Array<string>
  isWork: boolean // 调休上班
  isRest: boolean // 法定节假日
  week: number // 周六日
  monthInChineseNumber: number // 数字农历月
  monthInChinese: string // 农历月
  dayInChineseNumber: number // 数字农历日
  dayInChinese: string // 农历日
  solarTerms: string // 节气
}
const daysList: Ref<DaysList[]> = ref([])

const getViewDayList = () => {
  daysList.value = []
  const currentDate = Solar.fromDate(dayjs(selectedDay.value).toDate())
  const currentSolarMonth = SolarMonth.fromDate(dayjs(selectedMonth.value).toDate())
  const currentMonthsDays = currentSolarMonth.getDays()

  // 获取下一个月得天数
  const nextMonth = currentSolarMonth.next(1).toString()
  const nextSolarMonth = SolarMonth.fromDate(dayjs(nextMonth).toDate())
  const nextMonthsDays = nextSolarMonth.getDays()
  // 获取上一个月得天数
  const lastMonth = currentSolarMonth.next(-1).toString()
  const lastSolarMonth = SolarMonth.fromDate(dayjs(lastMonth).toDate())
  const lastMonthsDays = lastSolarMonth.getDays()
  // 获取当前月第一天 Date 格式
  const currentMonthFirstDay = dayjs(currentMonthsDays[0].toString()).toDate()
  // 获取当月第一天是周几
  const currentMonthFirstWeek = Solar.fromDate(currentMonthFirstDay).getWeek()
  // 根据当前月第一天周几来获取显示上一个月得天数
  const lastSliceLength = lastMonthsDays.length - currentMonthFirstWeek
  const lastSliceLen = weekSwitch.value ? lastSliceLength + 1 : lastSliceLength
  const lastMonthsSliceDays = [...lastMonthsDays.slice(lastSliceLen)]
  // 下个月显示得天数等于 42 - 当前月天数 - 上个月显示得天数
  const nextSliceLength = 42 - currentMonthsDays.length - lastMonthsSliceDays.length
  const nextMonthsSliceDays = [...nextMonthsDays.slice(0, nextSliceLength)]
  const viewDayList = [...lastMonthsSliceDays, ...currentMonthsDays, ...nextMonthsSliceDays]
  const daysArr = []
  for (var i = 0, j = viewDayList.length; i < j; i++) {
    const ymd = viewDayList[i].toString()
    const isWork = HolidayUtil.getHoliday(ymd)?.isWork()
    const lunarCalendar = Lunar.fromDate(dayjs(ymd).toDate())
    const obj = {
      year: viewDayList[i].getYear(),
      month: viewDayList[i].getMonth(),
      day: viewDayList[i].getDay(),
      ymd,
      currentYear: currentDate.getYear(),
      currentMonth: currentDate.getMonth(),
      currentDay: currentDate.getDay(),
      currentYmd: currentDate.toString(),
      festivals: viewDayList[i].getFestivals(), // 节日
      otherFestivals: viewDayList[i].getOtherFestivals(), // 其他节日
      chineseFestivals: lunarCalendar.getFestivals(), // 农历节日
      chineseOtherFestivals: lunarCalendar.getOtherFestivals(), // 农历其他节日
      week: viewDayList[i].getWeek(), // 周六日
      isWork: isWork === true, // 调休上班
      isRest: isWork === false, // 法定节假日
      monthInChinese: lunarCalendar.getMonthInChinese(), // 农历月
      monthInChineseNumber: lunarCalendar.getMonth(), // 数字农历月
      dayInChineseNumber: lunarCalendar.getDay(), // 数字农历日
      dayInChinese: lunarCalendar.getDayInChinese(), // 农历日
      solarTerms: lunarCalendar.getJieQi() // 节气
    }
    daysArr.push(obj)
  }
  daysList.value = [...daysArr]
}
getViewDayList()

const handleFormatdayText = (item: DaysList) => {
  if (item.festivals.length > 0) {
    return item.festivals[0]
  } else if (item.chineseFestivals.length > 0) {
    return item.chineseFestivals[0]
  } else if (item.solarTerms) {
    return item.solarTerms
  } else if (item.dayInChineseNumber === 1) {
    return item.monthInChinese
  } else {
    return item.dayInChinese
  }
}

const handleClickDay = (item: DaysList) => {
  selectedYear.value = String(item.year)
  selectedMonth.value = `${selectedYear.value}-${padZeroIfNeeded(item.month)}`
  selectedDay.value = `${selectedYear.value}-${padZeroIfNeeded(item.month)}-${padZeroIfNeeded(
    item.day
  )}`
  // 点击的不是当前月，需要获取新数据
  if (item.month !== item.currentMonth) {
    getViewDayList()
  }
}

const handleChangeYear = (val: string) => {
  selectedMonth.value = `${val}-01`
  selectedDay.value = `${selectedMonth.value}-01`
  getViewDayList()
}
const handleChangeMonth = (val: string) => {
  selectedYear.value = val.split('-')[0]
  selectedDay.value = `${selectedMonth.value}-01`
  getViewDayList()
}
const isShowToday = computed(() => {
  return selectedDay.value !== currentDay.value
})
const handleLastMonth = () => {
  const [year, month] = selectedMonth.value.split('-').map(Number)
  const newMonth = month === 1 ? 12 : month - 1
  const newYear = month === 1 ? year - 1 : year
  selectedYear.value = `${newYear}`
  selectedMonth.value = `${newYear}-${padZeroIfNeeded(newMonth)}`
  selectedDay.value = `${selectedMonth.value}-01`
  getViewDayList()
}
const handleNextMonth = () => {
  const [year, month] = selectedMonth.value.split('-').map(Number)
  const newMonth = month === 12 ? 1 : month + 1
  const newYear = month === 12 ? year + 1 : year
  selectedYear.value = `${newYear}`
  selectedMonth.value = `${newYear}-${padZeroIfNeeded(newMonth)}`
  selectedDay.value = `${selectedMonth.value}-01`
  getViewDayList()
}
const handleClickToday = () => {
  selectedYear.value = currentYear.value
  selectedMonth.value = currentMonth.value
  selectedDay.value = currentDay.value
  getViewDayList()
}
</script>

<style scoped lang="scss">
.calendar-board {
  position: absolute;
  top: 0;
  left: 0;

  .calendar-info {
    padding: 20px;
    background-color: var(--calendar-dialog-bg-01);

    .select-calendar {
      margin-top: 20px;
      height: 32px;

      :deep(.el-input) {
        --el-date-editor-width: 100px;
        --el-font-size-base: 12px;
        --el-input-height: 24px;
        --el-input-bg-color: var(--calendar-dialog-bg-05);
        --el-input-border-color: none;
        --el-input-hover-border-color: #c0c4cc;
        --el-input-focus-border-color: #c0c4cc;
        --el-input-border-radius: 8px;
        --el-input-icon-color: var(--calendar-color-06);

        margin-right: 5px;

        .el-input__wrapper {
          padding: 1px 7px;
        }
      }

      .select-btn-public {
        margin-right: 5px;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border-radius: 8px;
        cursor: pointer;
      }

      .month-toggle-btn {
        background-color: var(--calendar-dialog-bg-05);

        .iconfont {
          font-size: 12px;
          font-weight: 700;
        }

        &:hover {
          background-color: var(--calendar-dialog-bg-06);
        }
      }

      .today-fade-enter-active,
      .today-fade-leave-active {
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      .today-fade-enter-from,
      .today-fade-leave-to {
        opacity: 0;
        transform: scale(0);
      }

      .today-btn {
        font-size: 12px;
        color: #fff;
        background-color: var(--theme-color);

        &:hover {
          background-color: var(--hover-color);
        }
      }

      .week-switch {
        margin-left: auto;
      }
    }

    .calendar-list {
      --calendar-color: #ff5a5d;

      .week-end {
        color: var(--calendar-color) !important;
        font-weight: normal !important;
      }

      .week-list {
        height: 9%;
        font-size: 16px;
      }

      .list {
        li {
          padding: 2px;
          width: calc(100% / 7);
          height: auto;

          .item-container {
            position: relative;
            border: 2px solid transparent;
            border-radius: 10px;
            cursor: pointer;

            .number {
              font-size: 18px;
              font-weight: 700;
            }

            .text {
              padding: 0 8px;
              margin-top: 6px;
              max-width: 100%;
              font-size: 12px;
              color: var(--calendar-color-02);
            }

            .duty,
            .rest {
              position: absolute;
              top: 5px;
              right: 5px;
              width: 16px;
              height: 16px;
              font-size: 12px;
              text-align: center;
              color: #fff;
              border-radius: 4px;
              line-height: 16px;
            }

            .duty {
              background-color: #ffc65f;
            }

            .rest {
              background-color: #ed7676;
            }

            .festival {
              color: #037de4;
            }

            &:hover {
              border-color: #ccc;
            }
          }

          .rest-bg {
            background-color: var(--calendar-dialog-bg-03);
          }

          .duty-bg {
            background-color: var(--calendar-dialog-bg-04);
          }

          .other-month {
            opacity: 0.5;
          }

          .selected-bg:not(.today-bg) {
            border-color: #ccc;
          }

          .today-bg {
            color: #fff;
            background-color: var(--theme-color);

            .text {
              color: #fff;
            }

            &:hover {
              border-color: transparent;
            }
          }
        }
      }
    }
  }

  .today-info {
    padding: 30px 20px 20px;
    width: 300px;
    height: 100%;
    background-color: var(--calendar-dialog-bg-02);

    .today-card {
      .today-card-header {
        height: 20px;
        line-height: 20px;
        font-size: 14px;
      }

      .today-card-content {
        position: relative;
        margin: 6px 0;
        width: 80px;
        height: 80px;
        font-size: 50px;
        text-align: center;
        color: #fff;
        background-color: var(--theme-color);
        border-radius: 10px;
        line-height: 90px;

        &::before,
        &::after {
          position: absolute;
          top: 10px;
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;
          content: '';
        }

        &::before {
          left: 10px;
        }

        &::after {
          right: 10px;
        }
      }

      .today-card-chinese,
      .chinese-zodiac,
      .which-day {
        height: 20px;
        line-height: 20px;
        font-size: 12px;
      }
    }

    .today-other-list {
      font-size: 12px;
      color: var(--calendar-color-01);

      li {
        padding: 5px 0;
        border-top: 1px solid var(--calendar-bd-01);

        .tag {
          padding: 0 7px;
          margin-right: 10px;
          height: 20px;
          font-size: 12px;
          text-align: center;
          color: #fff;
          border-radius: 3px;
          line-height: 20px;
        }

        .animals {
          background-color: #ed625e;
        }

        .constellation {
          background-color: #ea7cab;
        }

        .constellation-icon {
          margin-left: 5px;
          width: 16px;
          height: 16px;
          background-color: #8d65c5;
          border-radius: 4px;

          img {
            width: 12px;
            height: 12px;
          }
        }

        .festival {
          background-color: #017de3;
        }

        .suitable {
          padding: 0 4px;
          background-color: #28ad55;
        }

        .avoid {
          background-color: #e24e4c;
        }

        .moon {
          background-color: #808080;
        }

        .text {
          line-height: 20px;
        }
      }
    }
  }
}
</style>
