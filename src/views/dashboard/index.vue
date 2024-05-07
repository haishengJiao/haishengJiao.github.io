<template>
  <div class="dashboard-container">
    <div
      class="memo-container display-flex display-column"
      :title="$t('memo.memo')"
      @click="memoDialogVisible = true"
    >
      <div class="memo-title text-ellipses">
        <span>{{ $t('memo.memo') }}</span>
      </div>
      <ul class="memo-list flex-1">
        <template v-if="memoList.length === 0">
          <li class="list-item display-flex flex-align" v-for="item in 3" :key="item">
            <span class="text-ellipses"></span>
          </li>
        </template>
        <template v-else>
          <li
            class="list-item display-flex flex-align"
            v-for="item in memoList.slice(0, 3)"
            :key="item.id"
          >
            <span class="text-ellipses">{{ item.title }}</span>
          </li>
        </template>
      </ul>
    </div>

    <el-dialog
      v-model="memoDialogVisible"
      :width="isFullScreen ? '100%' : '1000'"
      align-center
      draggable
      :show-close="false"
      class="self-dialog"
      :style="{ height: isFullScreen ? '100%' : '64%' }"
    >
      <div class="memo-dialog display-flex">
        <div class="memo-left display-flex display-column">
          <div class="header-container display-flex flex-align flex-justify-between">
            <span class="title text-ellipses">{{ $t('memo.memo') }}</span>
            <span
              class="sort display-flex display-column"
              :title="isAscending ? $t('memo.descendingOrder') : $t('memo.ascendingOrder')"
              v-if="memoList.length > 1"
              @click="handleAscending"
            >
              <i class="iconfont icon-shangjiantou" :class="{ 'theme-color': isAscending }"></i>
              <i class="iconfont icon-xiajiantou" :class="{ 'theme-color': !isAscending }"></i>
            </span>
          </div>
          <el-scrollbar height="100%">
            <transition-group name="list" tag="ul" class="memo-list" v-if="memoList.length !== 0">
              <li
                class="list-item display-flex flex-justify display-column"
                v-for="(item, index) in memoList"
                :key="item.id"
                :class="{ active: index === active }"
                @click="handleChangeActive(index)"
              >
                <div class="title text-ellipses">{{ item.title || $t('memo.noTitle') }}</div>
                <div class="time">{{ dayjs(item.createdTime).format('YYYY/MM/DD HH:mm') }}</div>
                <div class="operation display-flex flex-align display-column" @click.stop="">
                  <el-popconfirm
                    :title="$t('memo.deleteMemoTips')"
                    hide-icon
                    :hide-after="50"
                    @confirm="handleDeleteMemo(item.id, index)"
                  >
                    <template #reference>
                      <i class="iconfont icon-shanchu" :title="$t('memo.deleteMemo')"></i>
                    </template>
                  </el-popconfirm>
                  <i
                    @click="handleTopMemo(index)"
                    class="iconfont"
                    :class="item.isNail ? 'icon-guding-quxiaoguding active' : 'icon-guding-guding'"
                    :title="item.isNail ? $t('memo.unfixation') : $t('memo.fixation')"
                  ></i>
                </div>
              </li>
            </transition-group>
            <div v-else class="no-memo">{{ $t('memo.noMemo') }}</div>
          </el-scrollbar>
          <div
            class="add-memo display-flex flex-align flex-justify"
            :title="$t('memo.newMemorandum')"
            @click="handleAddMemo"
          >
            <i class="iconfont icon-jiahao"></i>
          </div>
        </div>
        <div class="memo-right flex-1 display-flex display-column">
          <div class="title-container">
            <div class="input-container" v-if="memoList.length !== 0">
              <el-input
                v-model="memoList[active].title"
                @blur="handleSaveMemo"
                :placeholder="$t('memo.noteHeadingPlaceholder')"
              />
            </div>
            <div class="operation display-flex flex-align">
              <div
                class="icon display-flex flex-align flex-justify"
                @click="isFullScreen = !isFullScreen"
                :title="isFullScreen ? $t('public.lessen') : $t('public.magnify')"
              >
                <i class="iconfont" :class="[isFullScreen ? 'icon-suoxiao' : 'icon-kuoda']"></i>
              </div>
              <div
                class="icon display-flex flex-align flex-justify"
                @click="memoDialogVisible = false"
                :title="$t('public.close')"
              >
                <i class="iconfont icon-guanbi"></i>
              </div>
            </div>
          </div>
          <template v-if="memoList.length !== 0">
            <div class="content-container flex-1">
              <el-input
                v-model="memoList[active].content"
                type="textarea"
                resize="none"
                :placeholder="$t('memo.noteContentPlaceholder')"
                @blur="handleSaveMemo"
              />
            </div>
            <div class="footer-container display-flex flex-justify-between">
              <div>
                {{
                  $t('memo.lastEdited', [
                    dayjs(memoList[active].editTime).format('YYYY-MM-DD HH:mm:ss')
                  ])
                }},
                {{
                  $t('memo.create', [
                    dayjs(memoList[active].createdTime).format('YYYY-MM-DD HH:mm:ss')
                  ])
                }}
              </div>
              <div>{{ $t('memo.focusSaveHint') }}</div>
            </div>
          </template>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref, h, onUnmounted } from 'vue'
import dayjs from 'dayjs'
import { ElNotification, type NotificationHandle } from 'element-plus'
import { encrypt, decrypt } from '@/utils/crypto'
import { generateUniqueId } from '@/utils'

const MEMO_LIST_KEY = 'MEMO_LIST'
const memoListEncrypt = encrypt(MEMO_LIST_KEY)
const ASCENDING_KEY = 'ASCENDING'
const ascendingEncrypt = encrypt(ASCENDING_KEY)
interface MemoLIst {
  id: string
  title: string | number
  createdTime: number
  isNail: boolean
  nailTime: number
  content: string
  editTime: number
  isDelete: boolean
  notification: NotificationHandle | null
}
const memoDialogVisible = ref(false)
const isFullScreen = ref(false)
const isAscending = ref(false)
const memoList: Ref<MemoLIst[]> = ref([])
const active = ref(0)
const handleChangeActive = (index: number) => {
  active.value = index
}
const handleDeleteMemo = (id: string, index: number) => {
  memoList.value[index].isDelete = true
  setTimeout(() => {
    active.value = 0
    memoList.value = memoList.value.filter((item) => item.id !== id)
    updateMemo()
  }, 300)
}

const handleTopMemo = (index: number) => {
  memoList.value[index].nailTime = new Date().getTime()
  if (memoList.value[index].isNail) {
    memoList.value[index].isNail = false
    memoList.value[index].notification?.close()
  } else {
    memoList.value[index].isNail = true
    createdNotification(memoList.value[index])
  }
  updateMemo()
}

const handleAddMemo = () => {
  const obj = {
    id: generateUniqueId(),
    title: dayjs(new Date().getTime()).format('YYYY-MM-DD'),
    createdTime: new Date().getTime(),
    isNail: false,
    nailTime: new Date().getTime(),
    content: '',
    editTime: new Date().getTime(),
    isDelete: false,
    notification: null
  }
  if (isAscending.value) {
    memoList.value.unshift(obj)
    active.value = 0
  } else {
    memoList.value.push(obj)
    active.value = memoList.value.length - 1
  }
  updateMemo()
}

const updateMemo = () => {
  localStorage.setItem(memoListEncrypt, encrypt(JSON.stringify(memoList.value)))
}

const handleSaveMemo = () => {
  const now = new Date().getTime()
  memoList.value[active.value].editTime = now
  memoList.value[active.value].nailTime = now
  if (isAscending.value) {
    memoList.value.sort((a, b) => b.editTime - a.editTime)
    active.value = 0
  } else {
    active.value = memoList.value.length - 1
    memoList.value.sort((a, b) => a.editTime - b.editTime)
  }
  updateMemo()
  if (memoList.value[active.value].isNail) {
    generateNotification('update')
  }
}

const getMemo = () => {
  const listEncrypt = localStorage.getItem(memoListEncrypt)
  const ascending = localStorage.getItem(ascendingEncrypt)
  if (listEncrypt) {
    memoList.value = JSON.parse(decrypt(listEncrypt))
  }
  if (ascending) {
    isAscending.value = decrypt(ascending) === 'true'
  }
  generateNotification('created')
}
const generateNotification = (type: string) => {
  const nailList = memoList.value
    .filter((item) => item.isNail)
    .sort((a, b) => a.nailTime - b.nailTime)
  if (nailList.length > 0) {
    let i = 0
    let timer: number
    timer = window.setInterval(() => {
      if (i > nailList.length - 1) {
        return timer && clearInterval(timer)
      }
      memoList.value.forEach((item) => {
        if (item.id === nailList[i].id) {
          if (type === 'update' && item.notification) {
            item.notification.close()
          }
          setTimeout(() => {
            item.isNail = true
            createdNotification(item)
            updateMemo()
          }, 50)
        }
      })
      i++
    }, 100)
  }
}
const createdNotification = (item: MemoLIst) => {
  item.notification = ElNotification({
    title: item.title as string,
    duration: 0,
    position: 'top-left',
    zIndex: 100,
    customClass: 'data-id_' + item.id,
    message: h('div', { class: 'self-notification' }, item.content),
    onClose: () => {
      item.isNail = false
      updateMemo()
    },
    onClick() {
      const e = arguments[0]
      const target = e.target
      let id = ''
      let el: HTMLElement | null = null
      if (
        target.classList.contains('el-notification__title') ||
        target.classList.contains('el-el-notification__content')
      ) {
        el = target.parentNode?.parentNode
      } else if (target.classList.contains('el-notification')) {
        el = target
      } else if (target.classList.contains('self-notification')) {
        el = target.parentNode?.parentNode?.parentNode
      } else if (target.classList.contains('el-notification__group')) {
        el = target.parentNode
      }
      if (el) {
        const classId = Array.from(el.classList).filter((i) => i.includes('data-id_'))
        if (classId.length === 1) id = classId[0].replace('data-id_', '')
      }
      if (id) {
        memoList.value.forEach((item, index) => {
          if (item.id === id) {
            active.value = index
            memoDialogVisible.value = true
          }
        })
      }
    }
  })
}
getMemo()

const handleAscending = () => {
  isAscending.value = !isAscending.value
  memoList.value.reverse()
  active.value = memoList.value.length - 1 - active.value
  localStorage.setItem(ascendingEncrypt, encrypt(isAscending.value.toString()))
  updateMemo()
}

onUnmounted(() => {
  memoList.value.forEach((item) => {
    if (item.isNail && item.notification) {
      item.notification.close()
      setTimeout(() => {
        item.isNail = true
        updateMemo()
      }, 0)
    }
  })
})
</script>

<style scoped lang="scss">
.dashboard-container {
  overflow: hidden;
  padding: 10px;

  .memo-container {
    overflow: hidden;
    width: 150px;
    height: 150px;
    border-radius: 16px;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s;

    --content-padding: 0 10px;

    &:hover {
      box-shadow: 0 0 10px var(--memo-bs-01);
    }

    .memo-title {
      padding: var(--content-padding);
      height: 38px;
      font-size: 20px;
      text-align: center;
      line-height: 38px;
      color: var(--color-02);
      background-image: var(--memo-gradient-01);
    }

    .memo-list {
      background-color: var(--memo-bg-01);

      .list-item {
        padding: var(--content-padding);
        height: calc(100% / 3);
        font-size: 13px;
        border-bottom: 1px solid var(--memo-bd-01);
      }

      .list-item:nth-child(3) {
        border-bottom: none;
      }
    }
  }

  .memo-dialog {
    height: 100%;

    .memo-left {
      user-select: none;
      position: relative;
      overflow: hidden;
      padding: 14px 0;
      width: 160px;
      height: 100%;
      background-color: var(--memo-dialog-bg-01);

      .header-container {
        padding: 0 20px;
        height: 60px;
        border-bottom: 1px solid var(--memo-bd-01);

        .title {
          padding-right: 20px;
          font-size: 18px;
        }

        .sort {
          .iconfont {
            font-size: 12px;
            color: #939393;
            transition: color 0.2s;

            &:last-child {
              margin-top: -4px;
            }
          }
        }
      }

      .memo-list {
        .list-move,
        .list-enter-active,
        .list-leave-active {
          transition: all 0.3s ease;
        }

        .list-enter-from,
        .list-leave-to {
          height: 0 !important;
          opacity: 0;
        }

        .list-item {
          position: relative;
          padding: 0 26px 0 22px;
          height: 66px;
          cursor: pointer;
          border-bottom: 1px solid var(--memo-bd-01);

          .title {
            margin-bottom: 6px;
            font-size: 14px;
            font-weight: bold;
          }

          .time {
            font-size: 12px;
            color: #939393;
          }

          .operation {
            position: absolute;
            right: 10px;

            .iconfont {
              transition: all 0.2s;
              transform: scale(0);

              &:not(:last-child) {
                margin-bottom: 4px;
              }

              &:hover {
                color: var(--hover-color);
              }
            }
          }

          &:last-child {
            border-bottom: none;
          }

          &:hover {
            .title {
              color: var(--hover-color);
            }
          }

          &::after {
            position: absolute;
            top: 0;
            left: 0;
            content: ' ';
            width: 0;
            height: 100%;
            background-color: var(--theme-color);
            border-radius: 0 3px 3px 0;
            transition: width 0.3s;
          }
        }

        .list-item.active {
          background-color: var(--memo-dialog-bg-02);
          box-shadow: #0000004d 0 4px 20px -8px;

          .operation .iconfont {
            transform: scale(1);
          }

          .active {
            color: var(--theme-color);
          }

          &::after {
            width: 6px;
          }
        }
      }

      .no-memo {
        margin-top: 50px;
        text-align: center;
      }

      .add-memo {
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 32px;
        height: 32px;
        color: #fff;
        background: var(--theme-color);
        border-radius: 50%;
        box-shadow: 0 0 5px 2px #0000001f;
        transition: 0.2s;
        cursor: pointer;

        &:hover {
          background-color: var(--hover-color);
        }

        &:active {
          transform: scale(0.92);
        }
      }
    }

    .memo-right {
      padding: 10px;
      height: 100%;
      background-color: var(--memo-dialog-bg-03);

      .title-container {
        position: relative;
        height: 32px;

        .input-container {
          width: 90%;

          :deep(.el-input__wrapper) {
            padding-left: 14px;
            border-radius: 0;
            box-shadow: none;

            input {
              font-size: 16px;
              color: var(--color-01);
              font-weight: 700;
            }
          }
        }

        .operation {
          position: absolute;
          top: 0;
          right: 0;
          gap: 6px;

          .icon {
            width: 20px;
            height: 20px;
            background-color: #00000029;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s;

            .iconfont {
              font-size: 12px;
              color: #fff;
              font-weight: bold;
            }

            &:hover {
              background-color: var(--hover-color);
            }
          }
        }
      }

      .content-container {
        .el-textarea {
          height: 100%;

          :deep(.el-textarea__inner) {
            height: 100%;

            // eslint-disable-next-line prettier/prettier
            background: // eslint-disable-next-line prettier/prettier
              linear-gradient(180deg, transparent, transparent 27px, #f2f2f2 27px, #f2f2f2 27px);
            background-size: 100% 28px;
            line-height: 28px;
            border-radius: 0;
            box-shadow: inset 0 1px 0 0 #f2f2f2;
          }
        }
      }

      .footer-container {
        margin-top: 6px;
        font-size: 12px;
        color: #939393;
      }
    }
  }
}
</style>
