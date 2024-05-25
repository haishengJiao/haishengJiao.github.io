<template>
  <div class="setting-section">
    <div class="section-title">头像形状</div>
    <ul class="shape-wrapper display-flex flex-align">
      <li
        class="shape"
        :class="[item.value, item.value === avatarData.shape ? 'active' : '']"
        :title="item.lable"
        v-for="item in shapeList"
        :key="item.value"
        @click="handleShape(item.value)"
      ></li>
    </ul>
  </div>
  <div class="setting-section">
    <div class="section-title">背景颜色</div>
    <ul class="color-wrapper color-wrapper-bg display-flex flex-wrap">
      <li
        class="color-item display-flex flex-align flex-justify"
        v-for="(item, i) in bgColorList"
        :key="item"
        :style="{ '--bg-color': item }"
        :class="{ active: avatarData.bgColor === item }"
      >
        <div class="circle"></div>
        <div
          class="bg-color display-flex flex-align flex-justify"
          @click="handleChangeBgColor(item)"
        >
          <i class="iconfont icon-duihao" v-if="i !== bgColorList.length - 1"></i>
          <i v-else>\</i>
        </div>
      </li>
    </ul>
  </div>
  <div class="setting-section">
    <div class="section-title">脸蛋</div>
    <ul class="widget-list display-flex flex-wrap">
      <li
        class="list-item display-flex flex-align flex-justify"
        v-for="item in faceList"
        :key="item.name"
        :class="{ selected: avatarData.face === item.name }"
        @click="handleChangeComponent(item, 'face')"
      >
        <svg
          :width="item.width"
          :height="item.height"
          :viewBox="item.viewBox"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <component :is="item.component" :transform="item.transform" />
        </svg>
      </li>
    </ul>
  </div>
  <div class="setting-section">
    <div class="section-title">头发/头饰</div>
    <div class="colour-container display-flex flex-align" @click="handleOpenHairColor">
      <i class="iconfont icon-sanjiaoxing" :class="{ open: isOpenHairColor }"></i>
      <span>颜色</span>
    </div>
    <transition name="colour-fade">
      <div v-show="isOpenHairColor" class="colour-fade">
        <ul class="color-wrapper display-flex flex-wrap">
          <li
            class="color-item display-flex flex-align flex-justify"
            v-for="item in otherColorList"
            :key="item"
            :style="{ '--bg-color': item }"
            :class="{ active: avatarData.hairColor === item }"
          >
            <div class="circle"></div>
            <div
              class="bg-color display-flex flex-align flex-justify"
              @click="handleChangeHairColor(item)"
            >
              <i class="iconfont icon-duihao"></i>
            </div>
          </li>
        </ul>
      </div>
    </transition>
    <ul class="widget-list display-flex flex-wrap">
      <li
        class="list-item display-flex flex-align flex-justify"
        v-for="item in hairList"
        :key="item.name"
        :class="{ selected: avatarData.hair === item.name }"
        @click="handleChangeComponent(item, 'hair')"
      >
        <svg
          :width="item.width"
          :height="item.height"
          :viewBox="item.viewBox"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <component :is="item.component" :transform="item.transform" />
        </svg>
      </li>
    </ul>
  </div>
  <div class="setting-section">
    <div class="section-title">耳朵</div>
    <ul class="widget-list display-flex flex-wrap">
      <li
        class="list-item display-flex flex-align flex-justify"
        v-for="item in earList"
        :key="item.name"
        :class="{ selected: avatarData.ear === item.name }"
        @click="handleChangeComponent(item, 'ear')"
      >
        <svg
          :width="item.width"
          :height="item.height"
          :viewBox="item.viewBox"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <component :is="item.component" :transform="item.transform" />
        </svg>
      </li>
    </ul>
  </div>
  <div class="setting-section">
    <div class="section-title">耳环</div>
    <ul class="widget-list display-flex flex-wrap">
      <li
        class="list-item display-flex flex-align flex-justify"
        v-for="item in earringList"
        :key="item.name"
        :class="{ selected: avatarData.earring === item.name }"
        @click="handleChangeComponent(item, 'earring')"
      >
        <svg
          :width="item.width"
          :height="item.height"
          :viewBox="item.viewBox"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          v-if="item.name !== 'earringNone'"
        >
          <component :is="item.component" :transform="item.transform" />
        </svg>
        <template v-else>
          <component :is="item.component" :transform="item.transform" />
        </template>
      </li>
    </ul>
  </div>
  <div class="setting-section">
    <div class="section-title">眉毛</div>
    <ul class="widget-list display-flex flex-wrap">
      <li
        class="list-item display-flex flex-align flex-justify"
        v-for="item in eyebrowList"
        :key="item.name"
        :class="{ selected: avatarData.eyebrow === item.name }"
        @click="handleChangeComponent(item, 'eyebrow')"
      >
        <svg
          :width="item.width"
          :height="item.height"
          :viewBox="item.viewBox"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <component :is="item.component" :transform="item.transform" />
        </svg>
      </li>
    </ul>
  </div>
  <div class="setting-section">
    <div class="section-title">眼睛</div>
    <ul class="widget-list display-flex flex-wrap">
      <li
        class="list-item display-flex flex-align flex-justify"
        v-for="item in eyeList"
        :key="item.name"
        :class="{ selected: avatarData.eye === item.name }"
        @click="handleChangeComponent(item, 'eye')"
      >
        <svg
          :width="item.width"
          :height="item.height"
          :viewBox="item.viewBox"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <component :is="item.component" :transform="item.transform" />
        </svg>
      </li>
    </ul>
  </div>
  <div class="setting-section">
    <div class="section-title">鼻子</div>
    <ul class="widget-list display-flex flex-wrap">
      <li
        class="list-item display-flex flex-align flex-justify"
        v-for="item in noseList"
        :key="item.name"
        :class="{ selected: avatarData.nose === item.name }"
        @click="handleChangeComponent(item, 'nose')"
      >
        <svg
          :width="item.width"
          :height="item.height"
          :viewBox="item.viewBox"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <component :is="item.component" :transform="item.transform" />
        </svg>
      </li>
    </ul>
  </div>
  <div class="setting-section">
    <div class="section-title">眼镜</div>
    <ul class="widget-list display-flex flex-wrap">
      <li
        class="list-item display-flex flex-align flex-justify"
        v-for="item in glassesList"
        :key="item.name"
        :class="{ selected: avatarData.glasses === item.name }"
        @click="handleChangeComponent(item, 'glasses')"
      >
        <svg
          :width="item.width"
          :height="item.height"
          :viewBox="item.viewBox"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          v-if="item.name !== 'glassesNone'"
        >
          <component :is="item.component" :transform="item.transform" />
        </svg>
        <template v-else>
          <component :is="item.component" :transform="item.transform" />
        </template>
      </li>
    </ul>
  </div>
  <div class="setting-section">
    <div class="section-title">嘴巴</div>
    <ul class="widget-list display-flex flex-wrap">
      <li
        class="list-item display-flex flex-align flex-justify"
        v-for="item in mouthList"
        :key="item.name"
        :class="{ selected: avatarData.mouth === item.name }"
        @click="handleChangeComponent(item, 'mouth')"
      >
        <svg
          :width="item.width"
          :height="item.height"
          :viewBox="item.viewBox"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <component :is="item.component" :transform="item.transform" />
        </svg>
      </li>
    </ul>
  </div>
  <div class="setting-section">
    <div class="section-title">胡子</div>
    <ul class="widget-list display-flex flex-wrap">
      <li
        class="list-item display-flex flex-align flex-justify"
        v-for="item in mustacheList"
        :key="item.name"
        :class="{ selected: avatarData.mustache === item.name }"
        @click="handleChangeComponent(item, 'mustache')"
      >
        <svg
          :width="item.width"
          :height="item.height"
          :viewBox="item.viewBox"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          v-if="item.name !== 'mustacheNone'"
        >
          <component :is="item.component" :transform="item.transform" />
        </svg>
        <template v-else>
          <component :is="item.component" :transform="item.transform" />
        </template>
      </li>
    </ul>
  </div>
  <div class="setting-section">
    <div class="section-title">衣着</div>
    <div class="colour-container display-flex flex-align" @click="handleOpenClothesColor">
      <i class="iconfont icon-sanjiaoxing" :class="{ open: isOpenClothesColor }"></i>
      <span>颜色</span>
    </div>
    <transition name="colour-fade">
      <div v-show="isOpenClothesColor" class="colour-fade">
        <ul class="color-wrapper display-flex flex-wrap">
          <li
            class="color-item display-flex flex-align flex-justify"
            v-for="item in otherColorList"
            :key="item"
            :style="{ '--bg-color': item }"
            :class="{ active: avatarData.clothesColor === item }"
          >
            <div class="circle"></div>
            <div
              class="bg-color display-flex flex-align flex-justify"
              @click="handleChangeClothesColor(item)"
            >
              <i class="iconfont icon-duihao"></i>
            </div>
          </li>
        </ul>
      </div>
    </transition>
    <ul class="widget-list display-flex flex-wrap">
      <li
        class="list-item display-flex flex-align flex-justify"
        v-for="item in clothesList"
        :key="item.name"
        :class="{ selected: avatarData.clothes === item.name }"
        @click="handleChangeComponent(item, 'clothes')"
      >
        <svg
          :width="item.width"
          :height="item.height"
          :viewBox="item.viewBox"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <component :is="item.component" :transform="item.transform" />
        </svg>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAvatarData, type List, type Key } from '../hook'
defineProps({
  avatarData: {
    type: Object,
    default: () => ({})
  }
})

const {
  faceList,
  hairList,
  earList,
  earringList,
  eyebrowList,
  eyeList,
  noseList,
  glassesList,
  mouthList,
  mustacheList,
  clothesList,
  shapeList,
  bgColorList,
  otherColorList
} = useAvatarData()
const emit = defineEmits([
  'handleShape',
  'handleChangeBgColor',
  'handleChangeComponent',
  'handleChangeHairColor',
  'handleChangeClothesColor'
])

const handleShape = (value: string) => {
  emit('handleShape', value)
}

const handleChangeBgColor = (value: string) => {
  emit('handleChangeBgColor', value)
}

const handleChangeComponent = (item: List, key: Key) => {
  emit('handleChangeComponent', item, key)
}

const handleChangeHairColor = (value: string) => {
  emit('handleChangeHairColor', value)
}
const handleChangeClothesColor = (value: string) => {
  emit('handleChangeClothesColor', value)
}

const isOpenHairColor = ref(false)
const handleOpenHairColor = () => {
  isOpenHairColor.value = !isOpenHairColor.value
}

const isOpenClothesColor = ref(false)
const handleOpenClothesColor = () => {
  isOpenClothesColor.value = !isOpenClothesColor.value
}
</script>

<style scoped lang="scss">
.setting-section {
  padding: 16px;

  .section-title {
    margin-bottom: 10px;
    line-height: 22px;
    font-weight: 700;
    font-size: 16px;
  }

  .widget-list {
    .list-item {
      padding: 16px;
      width: 72px;
      height: 80px;
      border-radius: 12px;
      transition: background-color 0.2s;
      cursor: pointer;

      svg {
        width: 100% !important;
        height: 100% !important;
      }

      :deep(path) {
        stroke: #a4b2c1 !important;
      }

      &.selected {
        background-color: #2c323a;
      }
    }
  }

  .shape-wrapper {
    gap: 15px;

    .shape {
      width: 24px;
      height: 24px;
      cursor: pointer;
      background-color: #a4b2c1;
      transition: background-color 0.2s;

      &:hover {
        background-color: var(--hover-color);
      }

      &.active {
        background-color: var(--theme-color);
      }
    }

    .circle {
      border-radius: 50%;
    }

    .squircle {
      border-radius: 6px;
    }
  }

  .color-wrapper {
    padding-bottom: 10px;

    .color-item {
      position: relative;
      width: 40px;
      height: 40px;

      .circle {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0%;
        height: 0%;
        background: var(--bg-color);
        border-radius: 50%;
        opacity: 0.5;
        transition: width 0.2s, height 0.2s;
        content: '';
        transform: translate(-50%, -50%);

        &::before {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 86%;
          height: 86%;
          background-color: #15171b;
          border-radius: inherit;
          content: '';
          transform: translate(-50%, -50%);
        }
      }

      .bg-color {
        position: relative;
        width: 20px;
        height: 20px;
        background: var(--bg-color);
        border-radius: 50%;
        cursor: pointer;

        i {
          font-size: 12px;
          color: #1f2329;
          opacity: 0;
          transition: opacity 0.2s;
        }
      }

      &.active {
        i {
          opacity: 1;
        }

        .circle {
          width: 82%;
          height: 82%;
        }
      }
    }
  }

  .color-wrapper-bg {
    .color-item {
      &:last-child {
        --bg-color: #fff !important;

        .bg-color i {
          font-size: 18px;
          color: #ff4757;
          opacity: 1;
          font-weight: 700;
        }
      }
    }
  }

  .colour-container {
    margin-bottom: 10px;
    font-size: 12px;
    color: #677f98;
    cursor: pointer;

    .iconfont {
      transform: rotate(90deg);
      margin-right: 6px;
      font-size: 12px;
      transition: transform 0.2s;

      &.open {
        transform: rotate(180deg);
      }
    }
  }

  .colour-fade {
    overflow: hidden;
    height: 90px;
  }

  .colour-fade-enter-active,
  .colour-fade-leave-active {
    transition: all 0.2s linear;
  }

  .colour-fade-enter-from,
  .colour-fade-leave-to {
    height: 0;
    opacity: 0;
  }
}
</style>
