<template>
  <div class="calendar-board w-100-h-100">
    <div class="display-flex w-100-h-100">
      <div class="calendar-info flex-1 display-flex display-column" @wheel.passive="handleWheel">
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
              {{ $t('calendar.today') }}
            </div>
          </transition>
          <div class="week-switch">
            <el-switch
              v-model="weekSwitch"
              inline-prompt
              :active-text="$t('calendar.Mon')"
              :inactive-text="$t('calendar.Sun')"
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
              :class="{ 'week-end': item === $t('calendar.Sat') || item === $t('calendar.Sun') }"
            >
              {{ getI18nText(item) }}
            </li>
          </ul>
          <ul class="list display-flex flex-wrap flex-1">
            <li
              v-for="item in daysList"
              :key="item.ymd"
              @click="handleClickDay(item, !item.ymd.includes(selectedMonth))"
            >
              <div
                class="item-container w-100-h-100 display-flex display-column flex-align flex-justify"
                :class="{
                  'rest-bg': item.isRest,
                  'duty-bg': item.isWork,
                  'other-month': !item.ymd.includes(selectedMonth),
                  'today-bg': item.ymd === currentDay,
                  'selected-bg': item.ymd === selectedDay
                }"
              >
                <div class="duty" v-if="item.isWork">{{ $t('calendar.workday') }}</div>
                <div class="rest" v-if="item.isRest">{{ $t('calendar.dayOff') }}</div>
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
          <div class="today-card-header">
            {{ dayInfo.ymd }} {{ getI18nText(weekMap[dayInfo.week]) }}
          </div>
          <div class="today-card-content">{{ dayInfo.day }}</div>
          <div class="today-card-chinese">{{ dayInfo.fullChinese }}</div>
          <div class="chinese-zodiac">
            {{ dayInfo.ganZhi }}({{ dayInfo.animals }}){{ $t('calendar.year') }}
          </div>
          <div class="which-day">
            {{ $t('calendar.howYearManyDaysWeek', [dayInfo.weekTotal, dayInfo.daysTotal]) }}
          </div>
        </div>
        <el-scrollbar height="100%">
          <ul class="today-other-list">
            <li class="display-flex" v-if="festivalDistance">
              <span class="text flex-1">{{ festivalDistance }}</span>
            </li>
            <li class="display-flex">
              <span class="tag animals">{{ $t('calendar.animals') }}</span>
              <span class="text flex-1">{{ dayInfo.animals }}</span>
            </li>
            <li class="display-flex flex-align">
              <span class="tag constellation">{{ $t('calendar.constellation') }}</span>
              <span class="text">{{ dayInfo.constellation }}</span>
              <div class="constellation-icon display-flex flex-align flex-justify">
                <!-- 摩羯座 -->
                <img
                  v-if="dayInfo.constellation === $t('calendar.capricorn')"
                  src="@/assets/images/calendar/capricornus.png"
                />
                <!-- 水瓶座 -->
                <img
                  v-if="dayInfo.constellation === $t('calendar.aquarius')"
                  src="@/assets/images/calendar/aquarius.png"
                />
                <!-- 双鱼座 -->
                <img
                  v-if="dayInfo.constellation === $t('calendar.pisces')"
                  src="@/assets/images/calendar/pisces.png"
                />
                <!-- 白羊座 -->
                <img
                  v-if="dayInfo.constellation === $t('calendar.aries')"
                  src="@/assets/images/calendar/aries.png"
                />
                <!-- 金牛座 -->
                <img
                  v-if="dayInfo.constellation === $t('calendar.taurus')"
                  src="@/assets/images/calendar/taurus.png"
                />
                <!-- 双子座 -->
                <img
                  v-if="dayInfo.constellation === $t('calendar.gemini')"
                  src="@/assets/images/calendar/gemini.png"
                />
                <!-- 巨蟹座 -->
                <img
                  v-if="dayInfo.constellation === $t('calendar.cancer')"
                  src="@/assets/images/calendar/cancer.png"
                />
                <!-- 狮子座 -->
                <img
                  v-if="dayInfo.constellation === $t('calendar.leo')"
                  src="@/assets/images/calendar/leo.png"
                />
                <!-- 处女座 -->
                <img
                  v-if="dayInfo.constellation === $t('calendar.virgo')"
                  src="@/assets/images/calendar/virgo.png"
                />
                <!-- 天秤座 -->
                <img
                  v-if="dayInfo.constellation === $t('calendar.libra')"
                  src="@/assets/images/calendar/libra.png"
                />
                <!-- 天蝎座 -->
                <img
                  v-if="dayInfo.constellation === $t('calendar.scorpio')"
                  src="@/assets/images/calendar/scorpio.png"
                />
                <!-- 射手座 -->
                <img
                  v-if="dayInfo.constellation === $t('calendar.sagittarius')"
                  src="@/assets/images/calendar/sagittarius.png"
                />
              </div>
            </li>
            <li class="display-flex" v-if="festivalComputed">
              <span class="tag festival">{{ $t('calendar.festival') }}</span>
              <span class="text flex-1">{{ festivalComputed }}</span>
            </li>
            <li class="display-flex">
              <span class="tag suitable">{{ $t('calendar.suitable') }}</span>
              <span class="text flex-1">{{ dayInfo.suitable.join('，') }}</span>
            </li>
            <li class="display-flex">
              <span class="tag avoid">{{ $t('calendar.avoid') }}</span>
              <span class="text flex-1">{{ dayInfo.avoid.join('，') }}</span>
            </li>
            <li class="display-flex">
              <span class="tag moon">{{ $t('calendar.phaseMoon') }}</span>
              <span class="text flex-1">{{ dayInfo.moon }}{{ $t('calendar.phaseMoonMonth') }}</span>
              <span class="tag moon" style="margin-left: auto">{{ $t('calendar.phenology') }}</span>
              <span class="text flex-1" style="margin-right: auto">{{ dayInfo.phenology }}</span>
            </li>
            <li class="display-flex display-column">
              <span class="text flex-1"
                >{{ $t('calendar.euphoricOrientation') }}{{ dayInfo.euphoricOrientation }}</span
              >
              <span class="text flex-1"
                >{{ $t('calendar.yangGuiGodLocation') }}{{ dayInfo.yangGUIGodAzimuth }}</span
              >
              <span class="text flex-1"
                >{{ $t('calendar.yinGuiGodLocation') }}{{ dayInfo.yinGUIGodAzimuth }}</span
              >
              <span class="text flex-1"
                >{{ $t('calendar.locationBlessingGod') }}{{ dayInfo.blessingOrientation }}</span
              >
              <span class="text flex-1"
                >{{ $t('calendar.locationGodWealth') }}{{ dayInfo.mammonOrientation }}</span
              >
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type Ref, watch } from 'vue'
import dayjs from 'dayjs'
import { Solar, SolarMonth, Lunar, HolidayUtil, SolarUtil, SolarWeek } from 'lunar-typescript'
import { getI18nText, padZeroIfNeeded } from '@/utils'
import { encrypt, decrypt } from '@/utils/crypto'
import { useThrottleFn } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useLangStore } from '@/stores'

defineProps({
  weekMap: {
    type: Array<string>,
    default: []
  }
})

const { t } = useI18n()
const langStore = useLangStore()

const dayjsYear = `${dayjs().year()}`
const dayjsMonth = `${dayjs().year()}-${padZeroIfNeeded(dayjs().month() + 1)}`
const dayjsDay = `${dayjs().year()}-${padZeroIfNeeded(dayjs().month() + 1)}-${padZeroIfNeeded(
  dayjs().date()
)}`
const selectedYear = ref(dayjsYear)
const selectedMonth = ref(dayjsMonth)
const selectedDay = ref(dayjsDay)
const currentYear = ref(dayjsYear)
const currentMonth = ref(dayjsMonth)
const currentDay = ref(dayjsDay)

const CALENDAR_WEEK_SWITCH_key = encrypt('CALENDAR_WEEK_SWITCH')
const weekSwitchLocal = localStorage.getItem(CALENDAR_WEEK_SWITCH_key)
const weekSwitch = ref(weekSwitchLocal !== null ? decrypt(weekSwitchLocal) === 'true' : false)
const weekList: Ref<string[]> = ref([])
const setWeekList = () => {
  if (weekSwitch.value) {
    weekList.value = [
      'calendar.Mon',
      'calendar.Tues',
      'calendar.Wed',
      'calendar.Thurs',
      'calendar.Fri',
      'calendar.Sat',
      'calendar.Sun'
    ]
  } else {
    weekList.value = [
      'calendar.Sun',
      'calendar.Mon',
      'calendar.Tues',
      'calendar.Wed',
      'calendar.Thurs',
      'calendar.Fri',
      'calendar.Sat'
    ]
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
  week: number
  fullChinese: string // 完整的农历
  monthInChineseNumber: number // 数字农历月
  monthInChinese: string // 农历月
  dayInChineseNumber: number // 数字农历日
  dayInChinese: string // 农历日
  solarTerms: string // 节气
  daysTotal: number
  weekTotal: number
  animals: string // 生肖
  constellation: string // 星座
  suitable: string[] // 宜
  avoid: string[] // 忌
  moon: string // 月相
  phenology: string // 物候
  euphoricOrientation: string // 喜神方位
  yangGUIGodAzimuth: string // 阳贵神方位
  yinGUIGodAzimuth: string // 阴贵神方位
  blessingOrientation: string // 福神方位
  mammonOrientation: string // 财神方位
  ganZhi: string // 干支纪年（新年以正月初一起算）
  shuJiu: string // 数九
  sanFu: string // 三伏
}
const daysList: Ref<DaysList[]> = ref([])
const dayInfo: Ref<DaysList> = ref({} as DaysList)
const getSelectedDayInfo = () => {
  daysList.value.forEach((item) => {
    if (item.ymd === selectedDay.value) {
      dayInfo.value = item
    }
  })
}
const getViewDayList = () => {
  const currentSelectedDate = Solar.fromDate(dayjs(currentDay.value).toDate())
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
  // + 1 是为了解决切换每周第一天是周日还是周一
  const lastSliceLen = weekSwitch.value ? lastSliceLength + 1 : lastSliceLength
  const lastMonthsSliceDays = [...lastMonthsDays.slice(lastSliceLen)]
  // 下个月显示得天数等于 42 - 当前月天数 - 上个月显示得天数
  const nextSliceLength = 42 - currentMonthsDays.length - lastMonthsSliceDays.length
  const nextMonthsSliceDays = [...nextMonthsDays.slice(0, nextSliceLength)]
  const viewDayList = [...lastMonthsSliceDays, ...currentMonthsDays, ...nextMonthsSliceDays]
  const daysArr = []
  for (var i = 0, j = viewDayList.length; i < j; i++) {
    const year = viewDayList[i].getYear()
    const month = viewDayList[i].getMonth()
    const day = viewDayList[i].getDay()
    const ymd = viewDayList[i].toString()
    const isWork = HolidayUtil.getHoliday(ymd)?.isWork()
    const lunarCalendar = Lunar.fromDate(dayjs(ymd).toDate()) // 农历相关
    const daysTotal = SolarUtil.getDaysInYear(year, month, day) // 本年第几天
    const weekCalendar = SolarWeek.fromDate(dayjs(ymd).toDate(), 1)
    const shuJiu = lunarCalendar.getShuJiu()?.getName() // 数九
    const sanFu = lunarCalendar.getFu()?.getName() // 三伏
    const obj = {
      year,
      month,
      day,
      ymd,
      currentYear: currentSelectedDate.getYear(),
      currentMonth: currentSelectedDate.getMonth(),
      currentDay: currentSelectedDate.getDay(),
      currentYmd: currentSelectedDate.toString(),
      festivals: viewDayList[i].getFestivals(), // 节日
      otherFestivals: viewDayList[i].getOtherFestivals(), // 其他节日
      chineseFestivals: lunarCalendar.getFestivals(), // 农历节日
      chineseOtherFestivals: lunarCalendar.getOtherFestivals(), // 农历其他节日
      week: viewDayList[i].getWeek(),
      isWork: isWork === true, // 调休上班
      isRest: isWork === false, // 法定节假日
      fullChinese: lunarCalendar.toString(), // 完整的农历
      monthInChinese: lunarCalendar.getMonthInChinese(), // 农历月
      monthInChineseNumber: lunarCalendar.getMonth(), // 数字农历月
      dayInChineseNumber: lunarCalendar.getDay(), // 数字农历日
      dayInChinese: lunarCalendar.getDayInChinese(), // 农历日
      solarTerms: lunarCalendar.getJieQi(), // 节气
      daysTotal,
      weekTotal: weekCalendar.getIndexInYear(),
      animals: lunarCalendar.getYearShengXiao(), // 生肖
      constellation: viewDayList[i].getXingZuo(), // 星座
      suitable: lunarCalendar.getDayYi(), // 宜
      avoid: lunarCalendar.getDayJi(), // 忌
      moon: lunarCalendar.getYueXiang(), // 月相
      phenology: lunarCalendar.getWuHou(), // 物候
      euphoricOrientation: lunarCalendar.getDayPositionXiDesc(), // 喜神方位
      yangGUIGodAzimuth: lunarCalendar.getDayPositionYangGuiDesc(), // 阳贵神方位
      yinGUIGodAzimuth: lunarCalendar.getDayPositionYinGuiDesc(), // 阴贵神方位
      blessingOrientation: lunarCalendar.getDayPositionFuDesc(), // 福神方位
      mammonOrientation: lunarCalendar.getDayPositionCaiDesc(), // 财神方位
      ganZhi: lunarCalendar.getYearInGanZhi(), // 获取干支纪年（新年以正月初一起算）
      shuJiu: shuJiu ? shuJiu : '', // 数九
      sanFu: sanFu ? sanFu : '' // 三伏
    }
    daysArr.push(obj)
  }
  daysList.value = [...daysArr]
  getSelectedDayInfo()
}
getViewDayList()

watch(
  () => langStore.lang,
  () => {
    getViewDayList()
  }
)

const handleFormatdayText = (item: DaysList) => {
  if (item.festivals.length > 0) {
    return item.festivals[0]
  } else if (item.chineseFestivals.length > 0) {
    return item.chineseFestivals[0]
  } else if (item.solarTerms) {
    return item.solarTerms
  } else if (item.dayInChineseNumber === 1) {
    return item.monthInChinese + '月'
  } else {
    return item.dayInChinese
  }
}

const handleClickDay = (item: DaysList, flag: boolean) => {
  selectedYear.value = String(item.year)
  selectedMonth.value = `${selectedYear.value}-${padZeroIfNeeded(item.month)}`
  selectedDay.value = `${selectedYear.value}-${padZeroIfNeeded(item.month)}-${padZeroIfNeeded(
    item.day
  )}`
  // 点击的不是当前月，需要获取新数据
  if (flag) {
    getViewDayList()
  } else {
    getSelectedDayInfo()
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

const festivalDistance = computed(() => {
  const { year, month, day, ymd, currentYear, currentMonth, currentDay } = dayInfo.value
  const selectedDay = Solar.fromYmd(year, month, day)
  const sameDay = Solar.fromYmd(currentYear, currentMonth, currentDay)
  const sumDay = selectedDay.subtract(sameDay)
  const y = dayjs(ymd).year()
  const m = padZeroIfNeeded(dayjs(ymd).month() + 1)
  const d = padZeroIfNeeded(dayjs(ymd).date())
  const dayTxt = t('calendar.ymd', [y, m, d])
  if (sumDay === 0) {
    return ''
  } else if (sumDay > 0) {
    const festival = festivalComputed.value?.split('，')[0]
    return festival
      ? t('calendar.hasBeenDaysSinceUntil', [festival, sumDay])
      : t('calendar.hasBeenDaysSinceUntil', [dayTxt, sumDay])
  } else {
    const festival = festivalComputed.value?.split('，')[0]
    return festival
      ? t('calendar.hasBeenDaysSince', [festival, Math.abs(sumDay)])
      : t('calendar.hasBeenDaysSince', [dayTxt, Math.abs(sumDay)])
  }
})
const festivalComputed = computed(() => {
  const {
    festivals,
    otherFestivals,
    chineseFestivals,
    chineseOtherFestivals,
    solarTerms,
    shuJiu,
    sanFu
  } = dayInfo.value
  const arr = [...festivals, ...chineseFestivals, ...otherFestivals, ...chineseOtherFestivals]
  if (solarTerms) arr.push(solarTerms)
  if (shuJiu) arr.push(shuJiu)
  if (sanFu) arr.push(sanFu)
  return arr.join('，')
})

const handleWheel = useThrottleFn((e: WheelEvent) => {
  if (e.deltaY > 0) {
    handleNextMonth()
  } else {
    handleLastMonth()
  }
}, 200)
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
        height: 24px;
        line-height: 24px;
        text-align: center;
        border-radius: 8px;
        cursor: pointer;
      }

      .month-toggle-btn {
        width: 24px;
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
        padding: 0 6px;
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
              padding: 0 2px;
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
          padding: 0 4px;
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
