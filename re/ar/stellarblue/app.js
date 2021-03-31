// Copyright (c) 2020 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

import './index.css'

import {reComponent} from './next-button'
import {tapPlaceComponent} from './next-button'
import {cubeEnvMapComponent} from './cubemap-static'

AFRAME.registerComponent('cubemap-static', cubeEnvMapComponent)
AFRAME.registerComponent('rec', reComponent())
AFRAME.registerComponent('tap-place', tapPlaceComponent)