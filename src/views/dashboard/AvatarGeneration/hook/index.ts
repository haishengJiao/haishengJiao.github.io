import { markRaw, ref } from 'vue'
import type { DefineComponent, ComponentOptionsMixin, Ref } from 'vue'
import FaceBase from '../components/FaceBase.vue'
import HairFonze from '../components/HairFonze.vue'
import HairFunny from '../components/HairFunny.vue'
import HairClean from '../components/HairClean.vue'
import HairPunk from '../components/HairPunk.vue'
import HairDanny from '../components/HairDanny.vue'
import HairWave from '../components/HairWave.vue'
import HairTurban from '../components/HairTurban.vue'
import HairPixie from '../components/HairPixie.vue'
import HairCap from '../components/HairCap.vue'
import EarAttached from '../components/EarAttached.vue'
import EarDetached from '../components/EarDetached.vue'
import EarringHoop from '../components/EarringHoop.vue'
import EarringStud from '../components/EarringStud.vue'
import None from '../components/None.vue'
import EyebrowUp from '../components/EyebrowUp.vue'
import EyebrowDown from '../components/EyebrowDown.vue'
import EyebrowEyelashesup from '../components/EyebrowEyelashesup.vue'
import EyebrowEyelashesdown from '../components/EyebrowEyelashesdown.vue'
import EyeEllipse from '../components/EyeEllipse.vue'
import EyeSmiling from '../components/EyeSmiling.vue'
import EyeEyeshadow from '../components/EyeEyeshadow.vue'
import EyeRound from '../components/EyeRound.vue'
import NoseCurve from '../components/NoseCurve.vue'
import NoseRound from '../components/NoseRound.vue'
import NosePointed from '../components/NosePointed.vue'
import GlassesRound from '../components/GlassesRound.vue'
import GlassesSquare from '../components/GlassesSquare.vue'
import MouthFrown from '../components/MouthFrown.vue'
import MouthLaughing from '../components/MouthLaughing.vue'
import MouthNervous from '../components/MouthNervous.vue'
import MouthPucker from '../components/MouthPucker.vue'
import MouthSad from '../components/MouthSad.vue'
import MouthSmile from '../components/MouthSmile.vue'
import MouthSmirk from '../components/MouthSmirk.vue'
import MouthSurprised from '../components/MouthSurprised.vue'
import MustacheScruff from '../components/MustacheScruff.vue'
import ClothesCrew from '../components/ClothesCrew.vue'
import ClothesCollared from '../components/ClothesCollared.vue'
import ClothesOpen from '../components/ClothesOpen.vue'

export interface List {
  component: DefineComponent<
    {
      transform: { type: StringConstructor; default: string }
      color: { type: StringConstructor; default: string }
    },
    object,
    unknown,
    // eslint-disable-next-line @typescript-eslint/ban-types
    {},
    // eslint-disable-next-line @typescript-eslint/ban-types
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin
  >
  name: string
  transform: string
  viewTransform: string
  viewBox: string
  width: string
  height: string
}

export type Key =
  | 'face'
  | 'hair'
  | 'ear'
  | 'earring'
  | 'eyebrow'
  | 'eye'
  | 'nose'
  | 'glasses'
  | 'mouth'
  | 'mustache'
  | 'clothes'

export const useAvatarData = () => {
  const faceList: List[] = [
    {
      component: markRaw(FaceBase),
      name: 'faceBase',
      transform: 'translate(0, 0)',
      viewTransform: '',
      viewBox: '0 0 200 320',
      width: '200',
      height: '320'
    }
  ]
  const hairList: List[] = [
    {
      component: markRaw(HairFonze),
      name: 'hairFonze',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(-34, -19)',
      viewBox: '0 0 240 200',
      width: '240',
      height: '200'
    },
    {
      component: markRaw(HairFunny),
      name: 'hairFunny',
      transform: 'translate(-10, 60)',
      viewTransform: 'translate(-30, -12)',
      viewBox: '0 0 240 200',
      width: '240',
      height: '200'
    },
    {
      component: markRaw(HairClean),
      name: 'hairClean',
      transform: 'translate(-35, 40)',
      viewTransform: 'translate(-35, -10)',
      viewBox: '0 0 240 200',
      width: '240',
      height: '200'
    },
    {
      component: markRaw(HairPunk),
      name: 'hairPunk',
      transform: 'translate(10, 30)',
      viewTransform: 'translate(-31, -15)',
      viewBox: '0 0 240 203',
      width: '240',
      height: '203'
    },
    {
      component: markRaw(HairDanny),
      name: 'hairDanny',
      transform: 'translate(10, -1)',
      viewTransform: 'translate(-31.5, -13.5)',
      viewBox: '0 0 240 270',
      width: '240',
      height: '270'
    },
    {
      component: markRaw(HairWave),
      name: 'hairWave',
      transform: 'translate(-5, 0)',
      viewTransform: 'translate(-57, -13)',
      viewBox: '0 0 306 340',
      width: '306',
      height: '340'
    },
    {
      component: markRaw(HairTurban),
      name: 'hairTurban',
      transform: 'translate(0, 15)',
      viewTransform: 'translate(-30, -25.5)',
      viewBox: '0 0 240 212',
      width: '240',
      height: '212'
    },
    {
      component: markRaw(HairPixie),
      name: 'hairPixie',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(-46, -13)',
      viewBox: '0 0 261 249',
      width: '261',
      height: '249'
    },
    {
      component: markRaw(HairCap),
      name: 'hairCap',
      transform: 'translate(40, 40) scale(0.27)',
      viewTransform: 'translate(0, -2) scale(0.27)',
      viewBox: '0 0 240 200',
      width: '240',
      height: '200'
    }
  ]
  const earList: List[] = [
    {
      component: markRaw(EarAttached),
      name: 'earAttached',
      transform: 'translate(5, 2)',
      viewTransform: 'translate(5, 130.5)',
      viewBox: '0 0 48 48',
      width: '48',
      height: '48'
    },
    {
      component: markRaw(EarDetached),
      name: 'earDetached',
      transform: 'translate(5, 0)',
      viewTransform: 'translate(2.5, 129)',
      viewBox: '0 0 48 52',
      width: '48',
      height: '52'
    }
  ]
  const earringList: List[] = [
    {
      component: markRaw(EarringHoop),
      name: 'earringHoop',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(4, 163)',
      viewBox: '0 0 52 52',
      width: '52',
      height: '52'
    },
    {
      component: markRaw(EarringStud),
      name: 'earringStud',
      transform: 'translate(0, 24)',
      viewTransform: 'translate(-1, 167)',
      viewBox: '0 0 48 50',
      width: '48',
      height: '50'
    },
    {
      component: markRaw(None),
      name: 'earringNone',
      transform: '',
      viewTransform: '',
      viewBox: '',
      width: '',
      height: ''
    }
  ]
  const eyebrowList: List[] = [
    {
      component: markRaw(EyebrowUp),
      name: 'eyebrowUp',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(33, 78)',
      viewBox: '0 0 149 48',
      width: '149',
      height: '48'
    },
    {
      component: markRaw(EyebrowDown),
      name: 'eyebrowDown',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(26, 80)',
      viewBox: '0 0 149 48',
      width: '149',
      height: '48'
    },
    {
      component: markRaw(EyebrowEyelashesup),
      name: 'eyebrowEyelashesup',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(30, 75)',
      viewBox: '0 0 149 51',
      width: '149',
      height: '51'
    },
    {
      component: markRaw(EyebrowEyelashesdown),
      name: 'eyebrowEyelashesdown',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(30, 75)',
      viewBox: '0 0 149 51',
      width: '149',
      height: '51'
    }
  ]
  const eyeList: List[] = [
    {
      component: markRaw(EyeEllipse),
      name: 'eyeEllipse',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(60, 95)',
      viewBox: '0 0 96 48',
      width: '96',
      height: '48'
    },
    {
      component: markRaw(EyeSmiling),
      name: 'eyeSmiling',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(61, 92)',
      viewBox: '0 0 96 48',
      width: '96',
      height: '48'
    },
    {
      component: markRaw(EyeEyeshadow),
      name: 'eyeEyeshadow',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(60, 95)',
      viewBox: '0 0 96 49',
      width: '96',
      height: '49'
    },
    {
      component: markRaw(EyeRound),
      name: 'eyeRound',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(62, 97)',
      viewBox: '0 0 96 48',
      width: '96',
      height: '48'
    }
  ]
  const noseList: List[] = [
    {
      component: markRaw(NoseCurve),
      name: 'noseCurve',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(98, 128)',
      viewBox: '0 0 32 40',
      width: '32',
      height: '40'
    },
    {
      component: markRaw(NoseRound),
      name: 'noseRound',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(98, 123)',
      viewBox: '0 0 32 40',
      width: '32',
      height: '40'
    },
    {
      component: markRaw(NosePointed),
      name: 'nosePointed',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(99, 128)',
      viewBox: '0 0 32 40',
      width: '32',
      height: '40'
    }
  ]
  const glassesList: List[] = [
    {
      component: markRaw(GlassesRound),
      name: 'glassesRound',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(22, 89)',
      viewBox: '0 0 152 65',
      width: '152',
      height: '65'
    },
    {
      component: markRaw(GlassesSquare),
      name: 'glassesSquare',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(14, 87)',
      viewBox: '0 0 160 74',
      width: '160',
      height: '74'
    },
    {
      component: markRaw(None),
      name: 'glassesNone',
      transform: '',
      viewTransform: '',
      viewBox: '',
      width: '',
      height: ''
    }
  ]
  const mouthList: List[] = [
    {
      component: markRaw(MouthFrown),
      name: 'mouthFrown',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(75, 160)',
      viewBox: '0 0 77 64',
      width: '77',
      height: '64'
    },
    {
      component: markRaw(MouthLaughing),
      name: 'mouthLaughing',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(85, 158)',
      viewBox: '0 0 73 64',
      width: '73',
      height: '64'
    },
    {
      component: markRaw(MouthNervous),
      name: 'mouthNervous',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(75, 165)',
      viewBox: '0 0 80 64',
      width: '80',
      height: '64'
    },
    {
      component: markRaw(MouthPucker),
      name: 'mouthPucker',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(87, 163)',
      viewBox: '0 0 64 64',
      width: '64',
      height: '64'
    },
    {
      component: markRaw(MouthSad),
      name: 'mouthSad',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(90, 160)',
      viewBox: '0 0 64 64',
      width: '64',
      height: '64'
    },
    {
      component: markRaw(MouthSmile),
      name: 'mouthSmile',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(87, 163)',
      viewBox: '0 0 67 64',
      width: '67',
      height: '64'
    },
    {
      component: markRaw(MouthSmirk),
      name: 'mouthSmirk',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(90, 160)',
      viewBox: '0 0 64 64',
      width: '64',
      height: '64'
    },
    {
      component: markRaw(MouthSurprised),
      name: 'mouthSurprised',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(85, 165)',
      viewBox: '0 0 64 64',
      width: '64',
      height: '64'
    }
  ]
  const mustacheList: List[] = [
    {
      component: markRaw(MustacheScruff),
      name: 'mustacheScruff',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(34, 101)',
      viewBox: '0 0 164 154',
      width: '164',
      height: '154'
    },
    {
      component: markRaw(None),
      name: 'mustacheNone',
      transform: '',
      viewTransform: '',
      viewBox: '',
      width: '',
      height: ''
    }
  ]
  const clothesList: List[] = [
    {
      component: markRaw(ClothesCrew),
      name: 'clothesCrew',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(-43.5, 250)',
      viewBox: '0 0 281 93',
      width: '281',
      height: '93'
    },
    {
      component: markRaw(ClothesCollared),
      name: 'clothesCollared',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(-43.5, 247)',
      viewBox: '0 0 281 93',
      width: '281',
      height: '93'
    },
    {
      component: markRaw(ClothesOpen),
      name: 'clothesOpen',
      transform: 'translate(0, 0)',
      viewTransform: 'translate(-43.5, 247)',
      viewBox: '0 0 281 93',
      width: '281',
      height: '93'
    }
  ]

  const avatarData = ref({
    shape: 'circle',
    bgColor: '#6cdaea',
    face: 'faceBase',
    faceTransform: '',
    faceComponent: markRaw(FaceBase),
    hair: 'hairFonze',
    hairTransform: 'translate(-34, -19)',
    hairComponent: markRaw(HairFonze),
    hairColor: '#6cdaea',
    ear: 'earAttached',
    earTransform: 'translate(5, 130.5)',
    earComponent: markRaw(EarAttached),
    earring: 'earringHoop',
    earringTransform: 'translate(4, 163)',
    earringComponent: markRaw(EarringHoop),
    eyebrow: 'eyebrowUp',
    eyebrowTransform: 'translate(33, 78)',
    eyebrowComponent: markRaw(EyebrowUp),
    eye: 'eyeEllipse',
    eyeTransform: 'translate(60, 95)',
    eyeComponent: markRaw(EyeEllipse),
    nose: 'noseCurve',
    noseTransform: 'translate(98, 128)',
    noseComponent: markRaw(NoseCurve),
    glasses: 'glassesRound',
    glassesTransform: 'translate(22, 89)',
    glassesComponent: markRaw(GlassesRound),
    glassesColor: 'black',
    mouth: 'mouthFrown',
    mouthTransform: 'translate(75, 160)',
    mouthComponent: markRaw(MouthFrown),
    mustache: 'mustacheScruff',
    mustacheTransform: 'translate(34, 101)',
    mustacheComponent: markRaw(MustacheScruff),
    clothes: 'clothesCrew',
    clothesTransform: 'translate(-43.5, 250)',
    clothesComponent: markRaw(ClothesCrew),
    clothesColor: '#6cdaea',
    isFlipHorizontal: false
  })

  const avatarDataHistory: Ref<(typeof avatarData.value)[]> = ref([])
  const historyIndex = ref(0)

  const shapeList = [
    { value: 'circle', lable: 'avatar.round' },
    { value: 'square', lable: 'avatar.square' },
    { value: 'squircle', lable: 'avatar.Squircle' }
  ]

  const bgColorList = [
    '#6cdaea',
    '#fc909f',
    '#f4d150',
    '#e0ddff',
    '#d2eff3',
    '#ffedef',
    '#ffeba4',
    '#506af4',
    '#f48150',
    '#48a99a',
    '#c09fff',
    '#fd6f5d',
    'linear-gradient(45deg, rgb(227, 100, 140), rgb(217, 117, 103))',
    'linear-gradient(62deg, rgb(142, 197, 252), rgb(224, 195, 252))',
    'linear-gradient(90deg, rgb(255, 236, 210), rgb(252, 182, 159))',
    'linear-gradient(120deg, rgb(161, 196, 253), rgb(194, 233, 251))',
    'linear-gradient(-135deg, rgb(252, 203, 144), rgb(213, 126, 235))',
    'transparent'
  ]

  const otherColorList = [
    '#6cdaea',
    '#fc909f',
    '#f4d150',
    '#e0ddff',
    '#d2eff3',
    '#ffedef',
    '#ffeba4',
    '#506af4',
    '#f48150',
    '#48a99a',
    '#c09fff',
    '#fd6f5d'
  ]

  const downloadSizeOptions = [
    { value: '80', label: '80*80' },
    { value: '100', label: '100*100' },
    { value: '150', label: '150*150' },
    { value: '180', label: '180*180' },
    { value: '200', label: '200*200' },
    { value: '280', label: '280*280' },
    { value: '380', label: '380*380' },
    { value: '480', label: '480*480' }
  ]

  const options = {
    face: faceList,
    hair: hairList,
    ear: earList,
    earring: earringList,
    eyebrow: eyebrowList,
    eye: eyeList,
    nose: noseList,
    glasses: glassesList,
    mouth: mouthList,
    mustache: mustacheList,
    clothes: clothesList
  }
  const generateRandomAvatar = () => {
    const shapeListRandom = Math.floor(Math.random() * shapeList.length)
    const bgColorListRandom = Math.floor(Math.random() * bgColorList.length)
    const hairColorListRandom = Math.floor(Math.random() * otherColorList.length)
    const clothesColorListRandom = Math.floor(Math.random() * otherColorList.length)
    const obj: typeof avatarData.value = {} as typeof avatarData.value
    for (const key in options) {
      const key1 = key as keyof typeof options
      if (Object.prototype.hasOwnProperty.call(options, key)) {
        const optionList = options[key1]
        const randomIndex = Math.floor(Math.random() * optionList.length)
        const selectedOption = optionList[randomIndex]
        obj[key1] = selectedOption.name
        const transformKey: keyof typeof avatarData.value = `${key1}Transform`
        const componentKey: keyof typeof avatarData.value = `${key1}Component`
        obj[transformKey] = selectedOption.viewTransform
        obj[componentKey] = selectedOption.component
      }
    }
    obj['shape'] = shapeList[shapeListRandom].value
    obj['bgColor'] = bgColorList[bgColorListRandom]
    obj['glassesColor'] = 'black'
    obj['hairColor'] = otherColorList[hairColorListRandom]
    obj['clothesColor'] = otherColorList[clothesColorListRandom]
    obj['isFlipHorizontal'] = false
    return obj
  }

  return {
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
    avatarData,
    shapeList,
    bgColorList,
    otherColorList,
    downloadSizeOptions,
    generateRandomAvatar,
    avatarDataHistory,
    historyIndex
  }
}
