let selectedIcon = 0
let isPlaced = false
const reComponent = () => ({
  init() {
    const remodel = document.querySelector('#remodel')
    const rednaC = document.querySelector('#rednaC')
    const accessC = document.querySelector('#accessC')
    const engineC = document.querySelector('#engineC')
    const displayC = document.querySelector('#displayC')
    const headlampC = document.querySelector('#headlampC')
    const brakeC = document.querySelector('#brakeC')
    const wheelC = document.querySelector('#wheelC')
    const loader = new THREE.TextureLoader()

    this.disp1Array = []
    for (let i = 0; i <= 46; i++) {
      const str = i.toString().padStart(2, '0')
      console.log(str)
      this.disp1Array.push(loader.load(`https://webardata.s3.ap-south-1.amazonaws.com/RE/meter_1_Animation_sequence/Royalenfield_display_meter_animation_${str}.png`))
    }
    this.disp2Array = []
    for (let i = 0; i <= 93; i++) {
      const str = i.toString().padStart(2, '0')
      console.log(str)
      this.disp2Array.push(loader.load(`https://webardata.s3.ap-south-1.amazonaws.com/RE/meter_2_Animation_sequence/Royal_enfield_navigation_instrument_cluster_${str}.png`))
    }
    // const displayColor = document.querySelector('#displayColor')

    remodel.object3D.visible = false
    rednaC.object3D.visible = false
    accessC.object3D.visible = false
    engineC.object3D.visible = false
    displayC.object3D.visible = false
    headlampC.object3D.visible = false
    brakeC.object3D.visible = false
    wheelC.object3D.visible = false
    // displayColor.object3D.visible = false
    console.log('model')
    // remodel.addEventListener('model-loaded', (e) => {
    //   const objs = remodel.getObject3D('mesh')
    //   objs.traverse((node) => {
    //     if (node.material) {
    //     console.log(node.name)
    //       if (node.name === 'inch_18_Numbers_0' ||
    //       node.name === 'inch_21_Numbers_0' ||
    //       node.name === 'inch_42_Numbers_0' ||
    //       node.name === 'Arrow1_Arrows_0' ||
    //       node.name === 'Arrow2_Arrows_0' ||
    //       node.name === 'Arrow3_Arrows_0') {
    //         node.material.transparent = true
    //         node.material.opacity = 0
    //       }
    //     }
    //   })
    // })
    const animationList = ['Wheel_rotation', 'still']

    const colorE = document.getElementById('colorIcon')
    const colorE1 = document.getElementById('colorIcon1')
    const colorE2 = document.getElementById('colorIcon2')
    const colorE3 = document.getElementById('colorIcon3')
    const colorE4 = document.getElementById('colorIcon4')
    const dnaE = document.getElementById('dnaIcon')
    const accessE = document.getElementById('accessIcon')
    const engineE = document.getElementById('engineIcon')
    const displayE = document.getElementById('displayIcon')
    const headlampE = document.getElementById('headlampIcon')
    const brakeE = document.getElementById('brakeIcon')
    const wheelE = document.getElementById('wheelIcon')
    const testride = document.getElementById('testride')
    const motorcycle = document.getElementById('motorcycle')
    const arrow = document.getElementById('arrow')

    const colorI = document.getElementById('colorIconI')

    const colorEI1 = document.getElementById('colorIconI1')
    const colorEI2 = document.getElementById('colorIconI2')
    const colorEI3 = document.getElementById('colorIconI3')
    const colorEI4 = document.getElementById('colorIconI4')
    const dnaI = document.getElementById('dnaIconI')
    const accessI = document.getElementById('accessIconI')
    const engineI = document.getElementById('engineIconI')
    const displayI = document.getElementById('displayIconI')
    const headlampI = document.getElementById('headlampIconI')
    const brakeI = document.getElementById('brakeIconI')
    const wheelI = document.getElementById('wheelIconI')
    const displayImage1 = document.querySelector('#displayImage1')
    const displayImage2 = document.querySelector('#displayImage2')
    const displayImg1Plane = document.querySelector('#displayImg1Plane')
    const displayImg2Plane = document.querySelector('#displayImg2Plane')

    const buttonList = [colorE, colorI, dnaE, dnaI, wheelE, wheelI, brakeE, brakeI, accessE, accessI, engineE, engineI, displayE, displayI, headlampE, headlampI]
    // const bike1 = document.getElementById('bike1')
    // const bike2 = document.getElementById('bike2')
    // const bike3 = document.getElementById('bike3')
    // bike1.style.display = "none";
    // bike2.style.display = "none";
    // bike3.style.display = "none";
    testride.style.display = 'block'
    motorcycle.style.display = 'block'
    arrow.style.display = 'block'

    colorE1.style.display = 'block'
    colorEI1.style.display = 'none'
    // colorE2.style.display = 'block'
    // colorEI2.style.display = 'none'
    // colorE3.style.display = 'block'
    // colorEI3.style.display = 'none'
    // colorE4.style.display = 'block'
    // colorEI4.style.display = 'none'

    const disableAll = () => {
      console.log('disableAll called')
      colorI.style.display = 'block'
      colorEI1.style.display = 'none'
      colorEI2.style.display = 'none'
      colorEI3.style.display = 'none'
      colorEI4.style.display = 'none'
      dnaI.style.display = 'block'
      accessI.style.display = 'block'
      engineI.style.display = 'block'
      displayI.style.display = 'block'
      headlampI.style.display = 'block'
      brakeI.style.display = 'block'
      wheelI.style.display = 'block'
      colorE.style.display = 'none'
      colorE1.style.display = 'none'
      colorE2.style.display = 'none'
      colorE3.style.display = 'none'
      colorE4.style.display = 'none'
      dnaE.style.display = 'none'
      accessE.style.display = 'none'
      engineE.style.display = 'none'
      displayE.style.display = 'none'
      headlampE.style.display = 'none'
      brakeE.style.display = 'none'
      wheelE.style.display = 'none'
    }
    const enableAll = () => {
      colorI.style.display = 'none'
      colorEI1.style.display = 'none'
      colorEI2.style.display = 'none'
      colorEI3.style.display = 'none'
      colorEI4.style.display = 'none'
      dnaI.style.display = 'none'
      accessI.style.display = 'none'
      engineI.style.display = 'none'
      displayI.style.display = 'none'
      headlampI.style.display = 'none'
      brakeI.style.display = 'none'
      wheelI.style.display = 'none'
      colorE.style.display = 'block'
      colorE1.style.display = 'none'
      colorE2.style.display = 'none'
      colorE3.style.display = 'none'
      colorE4.style.display = 'none'
      dnaE.style.display = 'block'
      accessE.style.display = 'block'
      engineE.style.display = 'block'
      displayE.style.display = 'block'
      headlampE.style.display = 'block'
      brakeE.style.display = 'block'
      wheelE.style.display = 'block'
    }
    const hideCallouts = () => {
      remodel.setAttribute('rotation', {x: 0, y: 0, z: 0})
      rednaC.object3D.visible = false
      accessC.object3D.visible = false
      engineC.object3D.visible = false
      displayC.object3D.visible = false
      headlampC.object3D.visible = false
      brakeC.object3D.visible = false
      wheelC.object3D.visible = false
    }

    // const bike1Clicked = () => {
    //   if(selectedIcon === 1){
    //     selectedIcon = 0
    //     bike1.style.display = "block";
    //     bike2.style.display = "block";
    //     bike3.style.display = "block";
    //   }
    //   else{
    //     selectedIcon = 1
    //     bike1.style.display = "none";
    //     bike2.style.display = "none";
    //     bike3.style.display = "none";

    //   }
    // }

    // const bike2Clicked = () => {
    //   if(selectedIcon === 1){
    //     selectedIcon = 0
    //     bike1.style.display = "block";
    //     bike2.style.display = "block";
    //     bike3.style.display = "block";
    //   }
    //   else{
    //     selectedIcon = 1
    //     bike1.style.display = "none";
    //     bike2.style.display = "none";
    //     bike3.style.display = "none";
    //     remodel.removeAttribute('gltf-model')
    //     remodel.setAttribute('gltf-model', '#rered')
    //   }
    // }

    // const bike3Clicked = () => {
    //   if(selectedIcon === 1){
    //     selectedIcon = 0
    //     bike1.style.display = "block";
    //     bike2.style.display = "block";
    //     bike3.style.display = "block";
    //   }
    //   else{
    //     selectedIcon = 1
    //     bike1.style.display = "none";
    //     bike2.style.display = "none";
    //     bike3.style.display = "none";
    //     remodel.removeAttribute('gltf-model')
    //     remodel.setAttribute('gltf-model', '#rebrown')
    //   }
    // }

    const disableOnClickOfButtons = (enableIndex, disableIndex) => {
      for (let i = 0; i < buttonList.length; i++) {
        if (i !== enableIndex || i !== disableIndex) {
          buttonList[i].onclick = null
        }
      }
    }

    const colorClicked = () => {
      hideCallouts()
      if (selectedIcon === 1) {
        enableAll()
        selectedIcon = 0
      } else {
        selectedIcon = 1
        disableTimeout()
        colorI.style.display = 'none'
        colorE.style.display = 'block'
        colorE1.style.display = 'block'
        colorE2.style.display = 'block'
        colorE3.style.display = 'block'
        colorE4.style.display = 'block'
      }
    }

    const subColor2click = () => {
      selectedIcon = 1
      // disableAll()
      disableTimeout()
      colorE.style.display = 'block'
      colorE1.style.display = 'block'
      colorEI3.style.display = 'none'
      colorE3.style.display = 'block'
      colorEI4.style.display = 'none'
      colorE4.style.display = 'block'
      colorE2.style.display = 'none'
      colorEI2.style.display = 'block'
      // textureChange(1)
      remodel.removeAttribute('gltf-model')
      remodel.setAttribute('gltf-model', '#reblue')
    }
    const subColor2unclick = () => {
      colorE2.style.display = 'block'
      colorEI2.style.display = 'none'
      selectedIcon = 0
    }

    const subColor3click = () => {
      selectedIcon = 1
      // disableAll()
      disableTimeout();
      colorE.style.display = 'block'
      colorE1.style.display = 'block'
      colorEI2.style.display = 'none'
      colorE2.style.display = 'block'
      colorEI4.style.display = 'none'
      colorE4.style.display = 'block'
      colorE3.style.display = 'none'
      colorEI3.style.display = 'block'
      remodel.removeAttribute('gltf-model')
      remodel.setAttribute('gltf-model', '#reblack')
    }
    const subColor3unclick = () => {
      colorE3.style.display = 'block'
      colorEI3.style.display = 'none'
      selectedIcon = 0
    }
    const subColor4click = () => {
      selectedIcon = 1
      // disableAll()
      disableTimeout();
      colorE.style.display = 'block'
      colorE1.style.display = 'block'
      colorEI2.style.display = 'none'
      colorE2.style.display = 'block'
      colorEI3.style.display = 'none'
      colorE3.style.display = 'block'
      colorE4.style.display = 'none'
      colorEI4.style.display = 'block'
      remodel.removeAttribute('gltf-model')
      remodel.setAttribute('gltf-model', '#rered')
    }
    const subColor4unclick = () => {
      colorE3.style.display = 'block'
      colorEI3.style.display = 'none'
      selectedIcon = 0

      const objs = remodel.getObject3D('mesh')
      objs.traverse((node) => {
        if (node.material) {
          console.log(node.name)
          if (node.name === 'fuelTank_pasted__tank2_0' ||
          node.name === 'inch_21_Numbers_0' ||
          node.name === 'inch_42_Numbers_0' ||
          node.name === 'Arrow1_Arrows_0' ||
          node.name === 'Arrow2_Arrows_0' ||
          node.name === 'Arrow3_Arrows_0') {
            // node.material.transparent = true
            // node.material.opacity = 0
            // node.material.color = 0xffffff
          }
        }
      })
    }

    const dnaClicked = () => {
      disableOnClickOfButtons(2, 3)

      hideCallouts()
      if (selectedIcon === 2) {
        enableAll()
        selectedIcon = 0
      } else {
        selectedIcon = 2
        // disableAll()
        disableTimeout1()
        dnaI.style.display = 'none'
        dnaE.style.display = 'block'
        rednaC.object3D.visible = true
      }
    }

    const accessClicked = () => {
      hideCallouts()
      if (selectedIcon === 3) {
        enableOnClickOfButtons()
        selectedIcon = 0
      } else {
        selectedIcon = 3
        // disableAll()
        disableTimeout()
        accessI.style.display = 'none'
        accessE.style.display = 'block'
        accessC.object3D.visible = true
      }
    }

    const engineClicked = () => {
      hideCallouts()
      if (selectedIcon === 4) {
        enableOnClickOfButtons()
        selectedIcon = 0
      } else {
        selectedIcon = 4
        // disableAll()
        disableTimeout()

        engineI.style.display = 'none'
        engineE.style.display = 'block'
        engineC.object3D.visible = true
      }
    }

    const displayClicked = () => {
      hideCallouts()
      if (selectedIcon === 5) {
        enableAll()
        selectedIcon = 0
      } else {
        selectedIcon = 5
        // disableAll()
        disableTimeout()
        displayI.style.display = 'none'
        displayE.style.display = 'block'
        remodel.setAttribute('rotation', {x: 0, y: -90, z: 0})
        displayC.object3D.visible = true

        // Speedometer sequence

        displayImg1Plane.object3D.visible = true
        displayImg2Plane.object3D.visible = true

        const display1 = (step) => {
          if (step === 0) {
            console.log(`B:  ${displayImg1Plane.getObject3D('mesh').material.src}`)
          }
          if (step > 46) {
            return
          }
          displayImg1Plane.getObject3D('mesh').material.map = this.disp1Array[step]
          displayImg1Plane.getObject3D('mesh').material.needsUpdate = true
          // let time2
          setTimeout(() => {
            display1(step + 1)
            console.log(step)
          // console.log(idName + String(i));
          // remodel.setAttribute('animation-mixer', {timeScale: 1});
          }, 142)
        }

        const display2 = (step) => {
          if (step === 0) {
            console.log(`B:  ${displayImg2Plane.getObject3D('mesh').material.src}`)
          }
          if (step > 93) {
            return
          }
          displayImg2Plane.getObject3D('mesh').material.map = this.disp2Array[step]
          displayImg2Plane.getObject3D('mesh').material.needsUpdate = true
          // let time2
          setTimeout(() => {
            display2(step + 1)
            console.log(step)
          // console.log(idName + String(i));
          // remodel.setAttribute('animation-mixer', {timeScale: 1});
          }, 71)
        }

        display1(0)
        display2(0)
      }
    }

    const headlampClicked = () => {
      hideCallouts()
      if (selectedIcon === 6) {
        enableAll()
        selectedIcon = 0
      } else {
        selectedIcon = 6
        // disableAll()
        disableTimeout()

        headlampI.style.display = 'none'
        headlampE.style.display = 'block'
        remodel.setAttribute('rotation', {x: 0, y: 50, z: 0})
        headlampC.object3D.visible = true
      }
    }

    // const brakeClicked = () => {
    //   hideCallouts()
    //   if(selectedIcon === 7){
    //     enableAll()
    //     selectedIcon = 0
    //   }else{
    //     selectedIcon = 7
    //     disableAll()

    //     brakeI.style.display = "none";
    //     brakeE.style.display = "block";
    //     brakeC.object3D.visible = true

    //   }
    // }
    /// ////////////start code////////////////////
    let idx1 = 1
    const brakeClicked = () => {
      hideCallouts()
      if (selectedIcon === 7) {
        enableAll()
        selectedIcon = 0

        // remodel.setAttribute('animation-mixer', {
        //   clip: animationList[1],
        //   // loop: 'once',
        //   crossFadeDuration: 2,
        //   clampWhenFinished: true,
        // })
        // brakeI.style.display = "none";
        // brakeE.style.display = "block";
      } else {
        // console.log(selectedIcon)
        selectedIcon = 7

        // disableAll()
        disableTimeout()

        brakeI.style.display = 'none'
        brakeE.style.display = 'block'
        brakeC.object3D.visible = true

        remodel.setAttribute('animation-mixer', {
          clip: animationList[0],
          // loop: 'once',
          crossFadeDuration: 2,
          clampWhenFinished: true,
        })
        idx1 = (idx1 + 1) % animationList.length
      }
    }
    /// ////////////end code////////////////////

    const wheelClicked = () => {
      hideCallouts()
      if (selectedIcon === 8) {
        enableAll()
        selectedIcon = 0
      } else {
        selectedIcon = 8
        // disableAll()
        disableTimeout()

        wheelI.style.display = 'none'
        wheelE.style.display = 'block'
        wheelC.object3D.visible = true
        remodel.setAttribute('animation-mixer', {
          clip: animationList[0],
          // loop: 'once',
          crossFadeDuration: 2,
          clampWhenFinished: true,
        })
      }
    }

    testride.addEventListener('click', () => {
      window.open('https://www.facebook.com/', 'name', 'width=100%,height=100%')
      // window.location.replace('https://www.facebook.com/')
    })

    motorcycle.addEventListener('click', () => {
      window.open('https://www.instagram.com/', 'name', 'width=100%,height=100%')
      // window.location.replace('https://www.instagram.com/')
    })

    arrow.addEventListener('click', () => {
      window.open('http://http//3.7.244.224/re/', 'name', 'width=100%,height=100%')
      // window.location.replace('https://www.instagram.com/')
    })

    colorE.onclick = colorClicked
    dnaE.onclick = dnaClicked
    accessE.onclick = accessClicked
    engineE.onclick = engineClicked
    displayE.onclick = displayClicked
    headlampE.onclick = headlampClicked
    brakeE.onclick = brakeClicked
    wheelE.onclick = wheelClicked

    colorI.onclick = colorClicked
    dnaI.onclick = dnaClicked
    accessI.onclick = accessClicked
    engineI.onclick = engineClicked
    displayI.onclick = displayClicked
    headlampI.onclick = headlampClicked
    brakeI.onclick = brakeClicked
    wheelI.onclick = wheelClicked
    // bike1.onclick = bike1Clicked
    // bike2.onclick = bike2Clicked
    // bike3.onclick = bike3Clicked
    colorE2.onclick = subColor2click
    colorEI2.onclick = subColor2unclick
    colorE3.onclick = subColor3click
    colorEI3.onclick = subColor3unclick
    colorE4.onclick = subColor4click
    colorEI4.onclick = subColor4unclick

    const ground = document.getElementById('ground')
    const tapT = document.getElementById('tapT')
    const animationList1 = ['360 animation', 'still']
    let idx2 = 1

    const enableOnClickOfButtons = () => {
      colorE.onclick = colorClicked

      colorE2.onclick = subColor2click
      colorEI2.onclick = subColor2unclick
      colorE3.onclick = subColor3click
      colorEI3.onclick = subColor3unclick
          
      dnaE.onclick = dnaClicked
      accessE.onclick = accessClicked
      engineE.onclick = engineClicked
      displayE.onclick = displayClicked
      headlampE.onclick = headlampClicked
      brakeE.onclick = brakeClicked
      wheelE.onclick = wheelClicked

      colorI.onclick = colorClicked
      dnaI.onclick = dnaClicked
      accessI.onclick = accessClicked
      engineI.onclick = engineClicked
      displayI.onclick = displayClicked
      headlampI.onclick = headlampClicked
      brakeI.onclick = brakeClicked
      wheelI.onclick = wheelClicked
    }

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max)
    }

    function disableTimeout1() {
      for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].onclick = null
      }
      setTimeout(() => {
        for (let i = 0; i < buttonList.length; i++) {
          enableOnClickOfButtons()
        }
      }, 1000)
    }

    function disableTimeout() {
      for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].onclick = null
      }
      setTimeout(() => {
        for (let i = 0; i < buttonList.length; i++) {
          enableOnClickOfButtons()
        }
      }, 5000)
    }

    ground.addEventListener('click', (event) => {
      // The raycaster gives a location of the touch in the scene
      if (!isPlaced) {
        const touchPoint = event.detail.intersection.point
        //touchPoint.z = clamp(touchPoint.z, 40, -80)  // touchPoint.z*4   If want to remove the limit then remove clame function and uncomment the part written after that
        console.log(touchPoint)
        remodel.setAttribute('position', touchPoint)
        remodel.setAttribute('visible', true)

        remodel.setAttribute('animation-mixer', {
          clip: animationList1[0],
          loop: 'once',
          crossFadeDuration: 2,
          clampWhenFinished: true,
        })
        idx2 = (idx2 + 1) % animationList1.length

        remodel.setAttribute('xrextras-hold-drag', '')
        remodel.setAttribute('xrextras-two-finger-rotate', '')
        tapT.style.visibility = 'hidden'
        isPlaced = true
        enableAll()
      }
    })
  },
})

export {reComponent}

// export const tapPlaceComponent = {
//   init() {
//     const remodel = document.getElementById('remodel')
//     const ground = document.getElementById('ground')
//     const tapT = document.getElementById('tapT')
//     const animationList1 = ['360 animation', 'still']
//     let idx1 = 1

//     ground.addEventListener('click', (event) => {
//       // The raycaster gives a location of the touch in the scene
//       if (!isPlaced) {
//         const touchPoint = event.detail.intersection.point
//         touchPoint.z *= 4
//         console.log(touchPoint)
//         remodel.setAttribute('position', touchPoint)
//         remodel.setAttribute('visible', true)

//         remodel.setAttribute('animation-mixer', {
//           clip: animationList1[0],
//           loop: 'once',
//           crossFadeDuration: 2,
//           clampWhenFinished: true,
//         })
//         idx1 = (idx1 + 1) % animationList1.length

//         remodel.setAttribute('xrextras-hold-drag', '')
//         remodel.setAttribute('xrextras-two-finger-rotate', '')
//         tapT.style.visibility = 'hidden'
//         isPlaced = true
//       }
//     })
//   },
// }

AFRAME.registerComponent('next-button', nextButtonComponent())
const swapCameraComponent = {
  init() {
    
    const scene = this.el.sceneEl
    this.raycaster = new THREE.Raycaster()
    this.camera = document.getElementById('camera')
    this.threeCamera = this.camera.getObject3D('camera')
    // const dofBtn = document.getElementById('swap-dof-btn')
    const selfieButton = document.getElementById('selfieButton')
    const captureBtn = document.getElementById('captureBtn')
    const selfiui = document.getElementById('selfiui')
    const flipcam = document.getElementById('flipcam')
    //all back
    const backcamui = document.getElementById('backcamui')

    const vanishVideo = document.getElementById('vanishVideo')
    const firstFrameImage = document.getElementById('firstFrameImage')
    const Hotspot1 = document.getElementById('Hotspot1')
    const Hotspot2 = document.getElementById('Hotspot2')
    const Hotspot3 = document.getElementById('Hotspot3')
    const BuynowButton = document.getElementById('BuyNow')
    const MoreMagicButton = document.getElementById('MoreMagic')
    const recorderBtn = document.getElementById('recorder')
    recorderBtn.style.display = 'none';
    //all front
    const selfiplane = document.getElementById('selfiplane')

    console.log("captureBtn: "+captureBtn.style.display)





    // initially hide plane in back cam
    //planeFrontCam.setAttribute('visible', 'false')
    selfiplane.object3D.visible = false
   // selfieButton.style.display = 'none'
    const swapCam = () => {
      let direction = 'front'

      if (this.el.getAttribute('xrweb') === null) {
        direction = 'back'
      }
      
      // Stop xrweb
      scene.removeAttribute('xrweb')
      scene.removeAttribute('xrface')
      // // Restart xrweb
      if (direction === 'back') {
              //**************************************** Analytics Code ************************************//
        gtag( 'event', 'Back Cam', {
            'event_category': 'Selfie Closed',
            'event_label': 'Opened',
        });

        //**************************************** Analytics End ************************************//
  
        scene.setAttribute('xrweb', '')
        //disable all front
        selfiplane.object3D.visible = false
        captureBtn.style.display = 'none'
        recorderBtn.style.display = 'none';
        selfiui.style.display = 'none'
        //enable back
        //firstFrameImage.object3D.visible = true
        //vanishVideo.object3D.visible = true
        //BuynowButton.style.display = 'block'
        //MoreMagicButton.style.display = 'block'
        backcamui.style.display = 'block'
      }
      else {
             //**************************************** Analytics Code ************************************//
        gtag( 'event', 'Front Cam', {
            'event_category': 'Selfie',
            'event_label': 'Opened',
        });

        //**************************************** Analytics End ************************************//
  
        scene.setAttribute('xrface', 'disableWorldTracking: true; cameraDirection: front; mirroredDisplay: true};')
        let cameraEl = document.getElementById('camera');
cameraEl.setAttribute('look-controls', "enabled: false;");
      this.threeCamera.lookAt(selfiplane.object3D.position)
//console.log(this.threeCamera.rotation)
cameraEl.setAttribute('look-controls', "enabled: true;")


        //enable all front
            selfiplane.object3D.visible = true
            captureBtn.style.display = 'block'
            recorderBtn.style.display = 'block';
           // selfiui.style.display = 'block'
        //disable all back
        firstFrameImage.object3D.visible = false
        vanishVideo.object3D.visible = false
        BuynowButton.style.display = 'none'
        MoreMagicButton.style.display = 'none'
        Hotspot1.object3D.visible = false
        Hotspot2.object3D.visible = false
        Hotspot3.object3D.visible = false
        backcamui.style.display = 'none'
        selfieButton.style.display = 'none'
      }

      // dofBtn.innerHTML = `Disable World Tracking: true`
    }
    

    selfieButton.addEventListener('click', swapCam)
    flipcam.addEventListener('click', swapCam)
  },
}

AFRAME.registerComponent('swap-camera', swapCameraComponent)

AFRAME.registerComponent('auto-play-video', {
  schema: {
    video: {type: 'string'},
  },
  init() {
    const v = document.querySelector(this.data.video)
    v.play()
  },
})

AFRAME.registerComponent('alpha', {
  schema: {
    type: 'number', default: 0.5,
  },
  dependencies: ['material'],
  init() {
    this.el.getObject3D('mesh').material.alphaTest = this.data
  },
})

AFRAME.registerComponent('unlit', {

    init: function () {

        function recursivelySetChildrenUnlit(mesh) {

            if (mesh.material && mesh.material.map) {
                mesh.material = new THREE.MeshBasicMaterial({ map: mesh.material.map });
            }

            if (mesh.children) {
        for (let i = 0; i < mesh.children.length; i++) {
                    recursivelySetChildrenUnlit(mesh.children[i]);
                }
            }
        }

        this.el.addEventListener('model-loaded', (e) => {

            const mesh = e.target.getObject3D('mesh');
            for (let i = 0; i < mesh.children.length; i++) {
                recursivelySetChildrenUnlit(mesh.children[i]);
            }

        });
    }
});
AFRAME.registerComponent('foo',{
schema : {},
dependencies :["position" , "rotation"],
init:function(){
    this.camera = this.el.sceneEl.camera;
    /*get the absolute distance from the camera to the plane,
    the reason why I use Vector3 instead of this.camera.getWorldPosition() is the camera position had not initlized when this component initialized. 
    */
    this.distance = 35;
    var height = 2 * this.distance * Math.tan(this.camera.fov / 2 / 180 * Math.PI);
    var width = height * this.camera.aspect;
    //get the plane's absolute height and width
    console.log("a1: "+width+"  "+height+"  "+this.camera.fov+"  "+this.camera.aspect)
    height = height / 3.5;
    width = width/3.625;
    console.log("a2: "+width+"  "+height)

    this.el.setAttribute("width",width);
    this.el.setAttribute("height",height);
    //this.el.object3D.children[0].lookAt(this.camera.getWorldPosition());
}
})
AFRAME.registerComponent("animate-arrow", {
        init: function() {
          // load the .pngs
          let loader = new THREE.TextureLoader()
          this.pngArray = []
          for (let i = 0; i <= 6; i++) {
            let str = i.toString().padStart(2, "0")
            console.log(str);
            this.pngArray.push(loader.load('./assets/arrow/vanish_pink_arrow_animation_'+str+'.png'))
          }

          this.el.addEventListener('loaded', e => {
            let mesh = this.el.getObject3D("mesh")
            this.material = mesh.material

            var i = 0
            this.id = setInterval(e => {
              if (i >= this.pngArray.length) i = 0;
              this.material.map = this.pngArray[i++]
              this.material.needsUpdate = true
            }, 200 )
          })
        },
        remove: function() {
          clearInterval(this.id);
          // free the memory
          for (let i = 0; i < this.pngArray.length; i++) {
            this.pngArray[i].dispose();
          }
        }
      })
/**
 * @param  {Array<THREE.Material>|THREE.Material} material
 * @return {Array<THREE.Material>}
 */
const ensureMaterialArray = (material) => {
  if (!material) {
    return []
  }
  if (Array.isArray(material)) {
    return material
  }
  if (material.materials) {
    return material.materials
  }
  return [material]
}
/**
 * @param  {THREE.Object3D} mesh
 * @param  {Array<string>} materialNames
 * @param  {THREE.Texture} envMap
 * @param  {number} reflectivity  [description]
 */
const applyEnvMap = (mesh, materialNames, envMap, reflectivity) => {
  if (!mesh) return
  materialNames = materialNames || []
  mesh.traverse((node) => {
    if (!node.isMesh) {
      return
    }
    const meshMaterials = ensureMaterialArray(node.material)
    meshMaterials.forEach((material) => {
      if (material && !('envMap' in material)) return
      if (materialNames.length && materialNames.indexOf(material.name) === -1) return
      material.envMap = envMap
      material.reflectivity = reflectivity
      material.needsUpdate = true
    })
  })
}
const toUrl = (urlOrId) => {
  const img = document.querySelector(urlOrId)
  return img ? img.src : urlOrId
}
const cubeEnvMapComponent = {
  multiple: true,
  schema: {
    posx: {default: '#posx'},
    posy: {default: '#posy'},
    posz: {default: '#posz'},
    negx: {default: '#negx'},
    negy: {default: '#negy'},
    negz: {default: '#negz'},
    extension: {default: 'jpg', oneOf: ['jpg', 'png']},
    format: {default: 'RGBFormat', oneOf: ['RGBFormat', 'RGBAFormat']},
    enableBackground: {default: false},
    reflectivity: {default: 1, min: 0, max: 1},
    materials: {default: []},
  },
  init() {
    const {data} = this
    this.texture = new THREE.CubeTextureLoader().load([
      toUrl(data.posx), toUrl(data.negx),
      toUrl(data.posy), toUrl(data.negy),
      toUrl(data.posz), toUrl(data.negz),
    ])
    this.texture.format = THREE[data.format]
    this.object3dsetHandler = () => {
      const mesh = this.el.getObject3D('mesh')
      applyEnvMap(mesh, data.materials, this.texture, data.reflectivity)
    }
    this.el.addEventListener('object3dset', this.object3dsetHandler)
  },
  update(oldData) {
    const {data} = this
    const mesh = this.el.getObject3D('mesh')
    let addedMaterialNames = []
    let removedMaterialNames = []
    if (data.materials.length) {
      if (oldData.materials) {
        addedMaterialNames = data.materials.filter(name => !oldData.materials.includes(name))
        removedMaterialNames = oldData.materials.filter(name => !data.materials.includes(name))
      } else {
        addedMaterialNames = data.materials
      }
    }
    if (addedMaterialNames.length) {
      applyEnvMap(mesh, addedMaterialNames, this.texture, data.reflectivity)
    }
    if (removedMaterialNames.length) {
      applyEnvMap(mesh, removedMaterialNames, null, 1)
    }
    if (oldData.materials && data.reflectivity !== oldData.reflectivity) {
      const maintainedMaterialNames =
        data.materials.filter(name => oldData.materials.includes(name))
      if (maintainedMaterialNames.length) {
        applyEnvMap(mesh, maintainedMaterialNames, this.texture, data.reflectivity)
      }
    }
    if (this.data.enableBackground && !oldData.enableBackground) {
      this.setBackground(this.texture)
    } else if (!this.data.enableBackground && oldData.enableBackground) {
      this.setBackground(null)
    }
  },
  remove() {
    this.el.removeEventListener('object3dset', this.object3dsetHandler)
    const mesh = this.el.getObject3D('mesh')
    const {data} = this
    applyEnvMap(mesh, data.materials, null, 1)
    if (data.enableBackground) {
      this.setBackground(null)
    }
  },
  setBackground(texture) {
    this.el.sceneEl.object3D.background = texture
  },
}
export {cubeEnvMapComponent}
AFRAME.registerComponent('cubemap-static', cubeEnvMapComponent)
