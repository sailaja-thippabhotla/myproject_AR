let selectedIcon = 0;
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
    console.log("model")
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
    // const bike1 = document.getElementById('bike1')
    // const bike2 = document.getElementById('bike2')
    // const bike3 = document.getElementById('bike3')
    // bike1.style.display = "none";
    // bike2.style.display = "none";
    // bike3.style.display = "none";
    colorE1.style.display = "block";
    colorEI1.style.display = "none";
    colorE2.style.display = "block";
    colorEI2.style.display = "none";
    colorE3.style.display = "block";
    colorEI3.style.display = "none";
    colorE4.style.display = "block";
    colorEI4.style.display = "none";
    
    const disableAll = () => {
      colorI.style.display = "block";
      colorEI1.style.display = "none";
      colorEI2.style.display = "none";
      colorEI3.style.display = "none";
      colorEI4.style.display = "none";
      dnaI.style.display = "block";
      accessI.style.display = "block";
      engineI.style.display = "block";
      displayI.style.display = "block";
      headlampI.style.display = "block";
      brakeI.style.display = "block";
      wheelI.style.display = "block";
      colorE.style.display = "none";
      colorE1.style.display = "none";
      colorE2.style.display = "none";
      colorE3.style.display = "none";
      colorE4.style.display = "none";
      dnaE.style.display = "none";
      accessE.style.display = "none";
      engineE.style.display = "none";
      displayE.style.display = "none";
      headlampE.style.display = "none";
      brakeE.style.display = "none";
      wheelE.style.display = "none";
    }
    const enableAll = () => {
      colorI.style.display = "none";
      colorEI1.style.display = "none";
      colorEI2.style.display = "none";
      colorEI3.style.display = "none";
      colorEI4.style.display = "none";
      dnaI.style.display = "none";
      accessI.style.display = "none";
      engineI.style.display = "none";
      displayI.style.display = "none";
      headlampI.style.display = "none";
      brakeI.style.display = "none";
      wheelI.style.display = "none";
      colorE.style.display = "block";
      colorE1.style.display = "none";
      colorE2.style.display = "none";
      colorE3.style.display = "none";
      colorE4.style.display = "none";
      dnaE.style.display = "block";
      accessE.style.display = "block";
      engineE.style.display = "block";
      displayE.style.display = "block";
      headlampE.style.display = "block";
      brakeE.style.display = "block";
      wheelE.style.display = "block";
      
    }
    const hideCallouts = () => {
        remodel.setAttribute('rotation', {x: 0, y: 0, z: 0});
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



    
    const colorClicked = () => {
      hideCallouts()
      console.log(selectedIcon)
        if(selectedIcon === 1){
          enableAll()
          selectedIcon = 0
        }else{
          selectedIcon = 1
          disableAll()
          colorI.style.display = "none";
          colorE.style.display = "block";
          colorE1.style.display = "block";
          colorE2.style.display = "block";
          colorE3.style.display = "block";
          colorE4.style.display = "block";
        }
    }
      
      const subColor2click = () => {
          selectedIcon = 1
          disableAll()
          colorE.style.display = "block";
          colorE1.style.display = "block";
          colorEI3.style.display = "none";
          colorE3.style.display = "block";
          colorEI4.style.display = "none";
          colorE4.style.display = "block";
          colorE2.style.display = "none";
          colorEI2.style.display = "block";
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
          disableAll()
          colorE.style.display = "block";
          colorE1.style.display = "block";
          colorEI2.style.display = "none";
          colorE2.style.display = "block";
          colorEI4.style.display = "none";
          colorE4.style.display = "block";
          colorE3.style.display = "none";
          colorEI3.style.display = "block";
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
          disableAll()
          colorE.style.display = "block";
          colorE1.style.display = "block";
          colorEI2.style.display = "none";
          colorE2.style.display = "block";
          colorEI3.style.display = "none";
          colorE3.style.display = "block";
          colorE4.style.display = "none";
          colorEI4.style.display = "block";
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
      hideCallouts()
      if(selectedIcon === 2){
        enableAll()
        selectedIcon = 0
      }else{
        selectedIcon = 2
        disableAll()
        dnaI.style.display = "none";
        dnaE.style.display = "block";
        rednaC.object3D.visible = true;
      }
    }

    const accessClicked = () => {
      hideCallouts()
      if(selectedIcon === 3){
        enableAll()
        selectedIcon = 0
      }else{
        selectedIcon = 3
        disableAll()
        accessI.style.display = "none";
        accessE.style.display = "block";
        accessC.object3D.visible = true
        
      }
    }

    const engineClicked = () => {
      hideCallouts()
      if(selectedIcon === 4){
        enableAll()
        selectedIcon = 0
      }else{
        selectedIcon = 4
        disableAll()
        
        engineI.style.display = "none";
        engineE.style.display = "block";
        engineC.object3D.visible = true
        
      }
    }

    const displayClicked = () => {
      hideCallouts()
      if(selectedIcon === 5){
        enableAll()
        selectedIcon = 0
      }else{
        selectedIcon = 5
        disableAll()
        
        displayI.style.display = "none";
        displayE.style.display = "block";
        remodel.setAttribute('rotation', {x: 0, y: -90, z: 0});
        displayC.object3D.visible = true

        
      //Speedometer sequence

        displayImg1Plane.object3D.visible = true
        displayImg2Plane.object3D.visible = true

        const display1 = (step) => {
        if(step === 0){
            console.log("B:  "+displayImg1Plane.getObject3D('mesh').material.src)
        }
        if(step > 46){
          return
        }
          displayImg1Plane.getObject3D('mesh').material.map = this.disp1Array[step]
          displayImg1Plane.getObject3D('mesh').material.needsUpdate = true
          // let time2
          setTimeout(function() {
            display1(step +1)
            console.log(step)
          // console.log(idName + String(i));
          // remodel.setAttribute('animation-mixer', {timeScale: 1});
        }, 142);
        }

        

        const display2 = (step) => {
        if(step === 0){
            console.log("B:  "+displayImg2Plane.getObject3D('mesh').material.src)
        }
        if(step > 93){
          return
        }
          displayImg2Plane.getObject3D('mesh').material.map = this.disp2Array[step]
          displayImg2Plane.getObject3D('mesh').material.needsUpdate = true
          // let time2
          setTimeout(function() {
            display2(step +1)
            console.log(step)
          // console.log(idName + String(i));
          // remodel.setAttribute('animation-mixer', {timeScale: 1});
        }, 71);
        }
        
        display1(0)
        display2(0)
      }
    }


    const headlampClicked = () => {
      hideCallouts()
      if(selectedIcon === 6){
        enableAll()
        selectedIcon = 0
      }else{
        selectedIcon = 6
        disableAll()
        
        headlampI.style.display = "none";
        headlampE.style.display = "block";
        remodel.setAttribute('rotation', {x: 0, y: 50, z: 0});
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
   ///////////////start code//////////////////// 
    let idx1 = 1 
    const brakeClicked = () => {
      hideCallouts()
      if(selectedIcon === 7){
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
      
      }else{
        // console.log(selectedIcon)
        selectedIcon = 7
       
        disableAll()
        
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
///////////////end code//////////////////// 
    
    const wheelClicked = () => {
      hideCallouts()
      if(selectedIcon === 8){
        enableAll()
        selectedIcon = 0
      }else{
        selectedIcon = 8
        disableAll()
        
        wheelI.style.display = "none";
        wheelE.style.display = "block";
        wheelC.object3D.visible = true
        remodel.setAttribute('animation-mixer', {
        clip: animationList[0],
        // loop: 'once',
        crossFadeDuration: 2,
        clampWhenFinished: true,
      })
      }
    }

   
    
    enableAll()
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

  },
})

export {reComponent}

export const tapPlaceComponent = {
  init() {
      const remodel = document.getElementById('remodel')
     const ground = document.getElementById('ground')
     const tapT = document.getElementById('tapT')
     const animationList1 = ['360 animation', 'still']
     let idx1 = 1
     
    ground.addEventListener('click', (event) => {
      // The raycaster gives a location of the touch in the scene
      if(!isPlaced){
        let touchPoint = event.detail.intersection.point
        touchPoint.z = touchPoint.z*4
        console.log(touchPoint)
        remodel.setAttribute('position', touchPoint)
        remodel.setAttribute("visible",true);

        remodel.setAttribute('animation-mixer', {
        clip: animationList1[0],
        loop: 'once',
        crossFadeDuration: 2,
        clampWhenFinished: true,
      })
      idx1 = (idx1 + 1) % animationList1.length


    
        remodel.setAttribute("xrextras-hold-drag","")
        remodel.setAttribute("xrextras-two-finger-rotate","")
        tapT.style.visibility = "hidden"
        isPlaced = true;  
      }
      
      
    })
    
  }
}