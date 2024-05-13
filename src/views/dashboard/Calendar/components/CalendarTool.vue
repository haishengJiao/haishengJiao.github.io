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
        <el-scrollbar height="100%">
          <transition name="tool-slide">
            <div class="view-date-container" v-show="toolsSegmentedActive === 0">
              <div class="view-date display-flex flex-wrap">
                <div class="natural-day">
                  <el-form :model="naturalDayForm">
                    <el-form-item>
                      <div>自然日间隔计算：</div>
                    </el-form-item>
                    <el-form-item label="开始时间" label-width="100px">
                      <el-date-picker
                        v-model="naturalDayForm.start"
                        :clearable="false"
                        type="date"
                      />
                    </el-form-item>
                    <el-form-item label="结束时间" label-width="100px">
                      <el-date-picker v-model="naturalDayForm.end" :clearable="false" type="date" />
                    </el-form-item>
                    <el-form-item label="相差天数" label-width="100px">
                      <div class="number-day display-flex flex-align">
                        <span>{{ naturalDayForm.result }}</span
                        >天
                      </div>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" style="width: 240px">重置</el-button>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="workday">
                  <el-form :model="naturalDayForm">
                    <el-form-item>
                      <div>工作日间隔计算：</div>
                    </el-form-item>
                    <el-form-item label="开始时间" label-width="100px">
                      <el-date-picker
                        v-model="naturalDayForm.start"
                        :clearable="false"
                        type="date"
                      />
                    </el-form-item>
                    <el-form-item label="结束时间" label-width="100px">
                      <el-date-picker v-model="naturalDayForm.end" :clearable="false" type="date" />
                    </el-form-item>
                    <el-form-item label="相差" label-width="100px">
                      <div class="number-day display-flex flex-align">
                        <span>{{ naturalDayForm.result }}</span
                        >个工作日
                      </div>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" style="width: 240px">重置</el-button>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="date-addition-subtraction">
                  <el-form :model="additionSubtractionForm">
                    <el-form-item>
                      <div>日期加减计算：</div>
                    </el-form-item>
                    <el-form-item label="开始时间" label-width="100px">
                      <el-date-picker
                        v-model="additionSubtractionForm.start"
                        :clearable="false"
                        type="date"
                      />
                    </el-form-item>
                    <el-form-item label="间隔天数" label-width="100px">
                      <el-input-number
                        v-model="additionSubtractionForm.interval"
                        :min="1"
                        placeholder="天数"
                        step-strictly
                        style="width: 160px"
                      />
                    </el-form-item>
                    <el-form-item label="结果" label-width="100px">
                      <div class="result-day display-flex flex-align">
                        {{ additionSubtractionForm.result }}
                      </div>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" style="width: 240px">重置</el-button>
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
                />
                <span>选择日期后自动更新当前节日</span>
              </div>
              <ul class="time-line">
                <li class="time-line-item" v-for="i in 12" :key="i">
                  <div class="item-tail"></div>
                  <div class="item-node"></div>
                  <div class="item-wrapper">
                    <div class="warpper-title display-flex flex-align">
                      <div class="title-month">{{ i }}</div>
                      <div>
                        <div class="title-en">Jan</div>
                        <div class="title-unit">月</div>
                      </div>
                    </div>
                    <div class="warpper-content display-flex flex-wrap">
                      <div v-for="item in 31" :key="item">
                        <span>元旦</span>
                        <span>[冬月二十 01-01]</span>
                        <span class="">已过<span class="overstriking">10</span>天</span>
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
import { ref } from 'vue'
import dayjs from 'dayjs'

const toolsSegmentedActive = ref(0)
const toolsSegmentedHeight = ref(34)
const toolsSegmentedList = ref([
  { value: 0, label: '日期差计算' },
  { value: 1, label: '节日大全' }
])
const handleToolsSegmented = (val: number) => {
  toolsSegmentedActive.value = val
}
const naturalDayForm = ref({
  start: '',
  end: '',
  result: 0
})
const additionSubtractionForm = ref({
  start: '',
  interval: 1,
  result: '2024年05月11日 周六'
})
const festivalYear = ref(dayjs().year())
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
      --el-disabled-text-color: var(--calendar-color-07);
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
