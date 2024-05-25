<template>
  <div
    class="avatar-container dashboard-item-container display-flex display-column"
    @click="showAvatarDialog = true"
  >
    <img src="@/assets/images/avatar/avatar-cover.webp" alt="avatar" />
  </div>

  <self-dialog v-model:show="showAvatarDialog" is-before-close @before-close="handleBeforeClose">
    <div class="avatar-dialog display-flex w-100-h-100">
      <div class="avatar-warpper flex-1 display-flex display-column flex-align flex-justify">
        <view-avatar
          :avatar-data="avatarData"
          :is-flip-horizontal="isFlipHorizontal"
          id="view-avatar-single"
        ></view-avatar>
        <div class="action-menu display-flex flex-align">
          <div
            class="menu-item display-flex flex-align flex-justify"
            :class="{ disabled: avatarDataHistory.length <= 1 || historyIndex <= 1 }"
            title="撤销"
            @click="handleRevocation"
          >
            <i class="iconfont icon-houtui-kong"></i>
          </div>
          <div
            class="menu-item display-flex flex-align flex-justify"
            :class="{ disabled: avatarDataHistory.length === historyIndex }"
            title="还原"
            @click="handleRestore"
          >
            <i class="iconfont icon-qianjin-kong"></i>
          </div>
          <div
            class="menu-item display-flex flex-align flex-justify"
            title="水平翻转"
            @click="handleFlipHorizontal"
          >
            <i class="iconfont icon-zuoyoufanzhuan"></i>
          </div>
          <div
            class="menu-item display-flex flex-align flex-justify"
            title="批量生成"
            @click="handleOpenBatch"
          >
            <i class="iconfont icon-batch"></i>
          </div>
        </div>
        <div class="action-group display-flex flex-align">
          <div class="button-item display-flex flex-align" @click="updateAvatar">随机生成</div>
          <div class="button-item display-flex flex-align" :class="{ disabled: isDownloading }">
            <div>
              <el-select
                v-model="downloadSize"
                placeholder="下载尺寸"
                style="width: 70px"
                :disabled="isDownloading"
              >
                <el-option
                  v-for="item in downloadSizeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div @click="handleDownloadAvatar('view-avatar-single')">
              <i class="iconfont icon-xiazai1"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="avatar-sider" :style="{ width: isClosedSider ? '0%' : '32%' }">
        <el-scrollbar height="100%">
          <div class="configurator-container">
            <setting-section
              :avatar-data="avatarData"
              @handle-shape="handleShape"
              @handle-change-bg-color="handleChangeBgColor"
              @handle-change-component="handleChangeComponent"
              @handle-change-hairColor="handleChangeHairColor"
              @handle-change-clothes-color="handleChangeClothesColor"
            ></setting-section>
          </div>
        </el-scrollbar>
        <div
          class="trigger display-flex flex-align flex-justify"
          @click="isClosedSider = !isClosedSider"
        >
          <i class="iconfont icon-youjiantou" v-show="!isClosedSider"></i>
          <i class="iconfont icon-zuojiantou" v-show="isClosedSider"></i>
        </div>
      </div>

      <transition name="batch-fade">
        <div class="batch-modal" v-show="isShowBatchModal" @click="handleCloseBatchModal">
          <div class="batch-modal-cantainer display-flex display-column" @click.stop="">
            <div class="content-title display-flex flex-align flex-justify-between">
              <div class="title-left">已为你自动生成头像</div>
              <div class="title-right">
                <el-button type="primary" @click="handleReplaceBatchList" :disabled="isDownloadAll"
                  >换一换</el-button
                >
                <el-button type="primary" @click="handleDownloadAll" :disabled="isDownloadAll"
                  >{{ isDownloadAll ? '正在下载' : '下载全部' }}
                  <span v-if="isDownloadAll" style="margin-left: 5px"
                    >({{ downloadIndex }}/{{ batchList.length }})</span
                  >
                </el-button>
              </div>
            </div>
            <div class="content-warpper flex-1">
              <el-scrollbar height="100%">
                <div class="batch-list display-flex flex-wrap">
                  <view-avatar
                    :avatar-data="item"
                    v-for="(item, index) in batchList"
                    :key="index"
                    is-batch
                    :id="`view-avatar-${index}`"
                    @download="handleDownloadAvatar(`view-avatar-${index}`)"
                    :is-downloading="isDownloading"
                    :class="{ 'is-loading': downloadIndex < index + 1 && isDownloadAll }"
                  ></view-avatar>
                </div>
              </el-scrollbar>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </self-dialog>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import html2canvas from 'html2canvas'
import ViewAvatar from './components/ViewAvatar.vue'
import SettingSection from './components/SettingSection.vue'
import { useAvatarData, type List, type Key } from './hook'
import { generateUniqueId } from '@/utils'

const { avatarData, downloadSizeOptions, generateRandomAvatar, avatarDataHistory, historyIndex } =
  useAvatarData()
const showAvatarDialog = ref(false)
const isClosedSider = ref(false)

const handleBeforeClose = () => {
  if (isDownloadAll.value) return
  if (isShowBatchModal.value) {
    isShowBatchModal.value = false
  } else {
    showAvatarDialog.value = false
  }
}

const handleRevocation = () => {
  if (avatarDataHistory.value.length <= 1 || historyIndex.value <= 1) return
  historyIndex.value--
  avatarData.value = { ...avatarDataHistory.value[historyIndex.value - 1] }
}
const handleRestore = () => {
  if (avatarDataHistory.value.length === historyIndex.value) return
  historyIndex.value++
  avatarData.value = { ...avatarDataHistory.value[historyIndex.value - 1] }
}

const isFlipHorizontal = ref(false)
const handleFlipHorizontal = () => {
  isFlipHorizontal.value = !isFlipHorizontal.value
}

const updateAvatarHistory = () => {
  avatarDataHistory.value.push({ ...avatarData.value })
  historyIndex.value = avatarDataHistory.value.length
  console.log(avatarDataHistory.value)
}
const updateAvatar = () => {
  avatarData.value = generateRandomAvatar()
  updateAvatarHistory()
}
updateAvatar()

const isDownloadAll = ref(false)
const downloadIndex = ref(0)
const handleDownloadAll = async () => {
  isDownloadAll.value = true
  const len = batchList.value.length
  for (let i = 0; i < len; i++) {
    downloadIndex.value++
    await handleDownloadAvatar(`view-avatar-${i}`)
  }
  isDownloadAll.value = false
  downloadIndex.value = 0
}
const isDownloading = ref(false)
const handleDownloadAvatar = async (id: string) => {
  const el = document.getElementById(id)
  if (el && !isDownloading.value) {
    isDownloading.value = true
    const clonedElement = el.cloneNode(true) as HTMLElement
    clonedElement.style.width = downloadSize.value + 'px'
    clonedElement.style.height = downloadSize.value + 'px'
    clonedElement.id = 'download-el-html2canvas'
    const cel = document.body.appendChild(clonedElement)
    await generateDownloadData(cel)
    isDownloading.value = false
  }
}
const generateDownloadData = async (el: HTMLElement) => {
  try {
    const res = await html2canvas(el, {
      backgroundColor: 'transparent'
    })
    const base64 = res.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = base64
    a.download = generateUniqueId()
    a.click()
    a.remove()
    document.body.removeChild(el)
  } catch (error) {
    console.log(error)
  }
}

const handleShape = (value: string) => {
  if (avatarData.value.shape === value) return
  avatarData.value.shape = value
  updateAvatarHistory()
}
const handleChangeBgColor = (value: string) => {
  if (avatarData.value.bgColor === value) return
  avatarData.value.bgColor = value
  updateAvatarHistory()
}

const handleChangeComponent = (item: List, key: Key) => {
  if (avatarData.value[key] === item.name) return
  const componentKey: keyof typeof avatarData.value = `${key}Component`
  const transformKey: keyof typeof avatarData.value = `${key}Transform`
  avatarData.value[componentKey] = item.component
  avatarData.value[transformKey] = item.viewTransform
  avatarData.value[key] = item.name
  updateAvatarHistory()
}

const handleChangeHairColor = (value: string) => {
  if (avatarData.value.hairColor === value) return
  avatarData.value.hairColor = value
  updateAvatarHistory()
}
const handleChangeClothesColor = (value: string) => {
  if (avatarData.value.clothesColor === value) return
  avatarData.value.clothesColor = value
  updateAvatarHistory()
}

const downloadSize = ref('280')

const isShowBatchModal = ref(false)
const batchList: Ref<(typeof avatarData.value)[]> = ref([])
const handleCreatedBatchList = () => {
  batchList.value = []
  for (let i = 0; i < 10; i++) {
    batchList.value.push(generateRandomAvatar())
  }
}
const handleOpenBatch = () => {
  handleCreatedBatchList()
  isShowBatchModal.value = true
}
const handleCloseBatchModal = () => {
  isShowBatchModal.value = false
}
const handleReplaceBatchList = () => {
  if (isDownloadAll.value) {
    return
  }
  handleCreatedBatchList()
}
</script>

<style scoped lang="scss">
.avatar-container {
  img {
    width: 100%;
    height: 100%;
  }
}

.avatar-dialog {
  position: relative;
  background-color: #171d21;
  user-select: none;

  .view-avatar {
    position: relative;
    overflow: hidden;
    width: 280px;
    height: 280px;

    .download-avatar {
      position: absolute;
      bottom: 15%;
      left: 50%;
      padding: 0 12px;
      height: 32px;
      text-align: center;
      color: #a4b2c1;
      background-color: #2a2f37;
      border-radius: 6px;
      line-height: 32px;
      cursor: pointer;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.3s;

      &:hover {
        color: #c2ccd6;
      }
    }

    &:hover .download-avatar {
      opacity: 1;
    }

    &.circle {
      border-radius: 50%;
    }

    &.square {
      border-radius: 0;
    }

    &.squircle {
      border-radius: 25px;
    }
  }

  .avatar-warpper {
    position: relative;

    .action-menu {
      padding: 5px;
      margin-top: 50px;
      background-color: #2a2f37;
      border-radius: 25px;

      .menu-item {
        margin: 0 8px;
        width: 40px;
        height: 40px;
        background-color: #404854;
        border-radius: 50%;
        cursor: pointer;

        i {
          font-size: 22px;
          color: #fff;
        }

        &.disabled {
          opacity: 0.5;
          cursor: not-allowed;

          i {
            cursor: not-allowed;
          }
        }
      }
    }

    .action-group {
      margin-top: 40px;
      gap: 20px;

      .button-item {
        padding: 0 20px;
        height: 40px;
        font-size: 14px;
        color: #a4b2c1;
        background-color: #2a2f37;
        font-weight: 700;
        border-radius: 10px;

        .el-select {
          --el-color-primary: #2a2f37;
          --el-border-color-hover: #2a2f37;
          --el-fill-color-blank: #2a2f37;
          --el-border-color: #2a2f37;
          --el-select-input-focus-border-color: #2a2f37;
          --el-text-color-regular: #a4b2c1;
          --el-text-color-placeholder: #a4b2c1;
          --el-fill-color-light: #2a2f37;
          --el-select-disabled-border: #2a2f37;

          :deep(.el-select__wrapper) {
            padding-left: 0;
          }

          :deep(.el-select__suffix) {
            display: none;
          }
        }

        &.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        &:first-child {
          cursor: pointer;
        }

        &:hover {
          color: #c2ccd6;
        }
      }
    }

    .gradient-bg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: red;
    }
  }

  .avatar-sider {
    position: relative;
    padding: 14px 0;
    width: 32%;
    height: 100%;
    transition: width 0.2s;

    .configurator-container {
      color: #a4b2c1;
    }

    .trigger {
      position: absolute;
      top: 50%;
      width: 20px;
      height: 64px;
      color: #fff;
      background-color: #1f2329;
      border-radius: 6px 0 0 6px;
      transition: width 0.2s, background-color 0.2s;
      transform: translate(-100%, -50%);
      cursor: pointer;

      .iconfont {
        font-size: 12px;
      }

      &:hover {
        width: 24px;
        background-color: #2a2f37;
      }
    }
  }

  .batch-fade-enter-active,
  .batch-fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .batch-fade-enter-from,
  .batch-fade-leave-to {
    opacity: 0;
  }

  .batch-modal {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    overflow: hidden;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);

    .batch-modal-cantainer {
      position: absolute;
      top: 50%;
      left: 50%;
      overflow: hidden;
      width: 90%;
      height: 90%;
      background-color: #252a31;
      border-radius: 16px;
      transform: translate(-50%, -50%);

      .content-title {
        padding: 0 32px;
        height: 56px;
        font-size: 16px;
        color: #a4b2c1;
        background-color: #2c323a;
      }

      .content-warpper {
        overflow: hidden;

        .batch-list {
          padding: 14px;
          gap: 14px;

          .is-loading {
            &::before {
              position: absolute;
              z-index: 2;
              width: 100%;
              height: 100%;
              background-color: rgb(0 0 0 / 20%);
              content: ' ';
            }
          }
        }
      }
    }
  }
}
</style>
