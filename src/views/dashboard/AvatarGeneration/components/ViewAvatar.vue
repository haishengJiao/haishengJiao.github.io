<template>
  <div
    class="view-avatar"
    :class="[avatarData.shape]"
    :style="{
      background: avatarData.bgColor,
      transform: isFlipHorizontal ? 'rotateY(180deg)' : 'rotateY(0deg)'
    }"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMax meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(100, 65)">
        <g id="avatar-face">
          <component
            :is="avatarData.faceComponent"
            :transform="avatarData.faceTransform"
          ></component>
        </g>
        <g id="avatar-hair">
          <component
            :is="avatarData.hairComponent"
            :transform="avatarData.hairTransform"
            :color="avatarData.hairColor"
          ></component>
        </g>
        <g id="avatar-ear">
          <component :is="avatarData.earComponent" :transform="avatarData.earTransform"></component>
        </g>
        <g id="avatar-earring">
          <component
            v-if="avatarData.earring !== 'earringNone'"
            :is="avatarData.earringComponent"
            :transform="avatarData.earringTransform"
          ></component>
        </g>
        <g id="avatar-eyebrow">
          <component
            :is="avatarData.eyebrowComponent"
            :transform="avatarData.eyebrowTransform"
          ></component>
        </g>
        <g id="avatar-eye">
          <component :is="avatarData.eyeComponent" :transform="avatarData.eyeTransform"></component>
        </g>
        <g id="avatar-nose">
          <component
            :is="avatarData.noseComponent"
            :transform="avatarData.noseTransform"
          ></component>
        </g>
        <g id="avatar-glasses">
          <component
            v-if="avatarData.earring !== 'glassesNone'"
            :is="avatarData.glassesComponent"
            :transform="avatarData.glassesTransform"
            :color="avatarData.glassesColor"
          ></component>
        </g>
        <g id="avatar-mouth">
          <component
            :is="avatarData.mouthComponent"
            :transform="avatarData.mouthTransform"
          ></component>
        </g>
        <g id="avatar-mustache">
          <component
            v-if="avatarData.mustache !== 'mustacheNone'"
            :is="avatarData.mustacheComponent"
            :transform="avatarData.mustacheTransform"
          ></component>
        </g>
        <g id="avatar-clothes">
          <component
            :is="avatarData.clothesComponent"
            :transform="avatarData.clothesTransform"
            :color="avatarData.clothesColor"
          ></component>
        </g>
      </g>
    </svg>
    <div
      class="download-avatar"
      v-if="isBatch"
      @click="downloadSingle"
      :class="{ disabled: isDownloading }"
    >
      下载头像
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  avatarData: {
    type: Object,
    default: () => ({})
  },
  isBatch: {
    type: Boolean,
    default: false
  },
  isFlipHorizontal: {
    type: Boolean,
    default: false
  },
  isDownloading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['download'])

const downloadSingle = () => {
  emit('download')
}
</script>

<style scoped lang="scss">
.view-avatar {
  position: relative;
  overflow: hidden;
  width: 280px;
  height: 280px;

  .download-avatar {
    position: absolute;
    bottom: 15%;
    left: 50%;
    display: none;
    padding: 0 12px;
    height: 32px;
    text-align: center;
    color: #a4b2c1;
    background-color: #2a2f37;
    border-radius: 6px;
    line-height: 32px;
    cursor: pointer;
    transform: translateX(-50%);

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover {
      color: #c2ccd6;
    }
  }

  &:hover .download-avatar {
    display: block;
    height: 32px;
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
</style>
