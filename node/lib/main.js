'use strict';

import * as THREE from 'three';
import WEBGL from './webgl.js';

export default {
    name: 'Main',
    init() {
        if (WEBGL.isWebGLAvailable()) {
            const scene = new THREE.Scene();
        } else {
            const warning = WEBGL.getWebGLErrorMessage();
            document.getElementById('container').appendChild(warning);
        }
    },
}
