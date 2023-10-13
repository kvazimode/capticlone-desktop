import defaultEl from '../data/default-el.js';
import {createReducer} from '@reduxjs/toolkit';
import * as actions from './actions.js';


const initState = {
    name: '',
    imgList: [],
    bgList: [],
    elementList: [],
    currentSlideID: 0,
    slideName: '',
    scale: 1,
    currentBg: null,
    currentEl: {...defaultEl, position: {...defaultEl.position}},
    slides: [],
    idCount: 0,
    showCreateDialog: false,
    showProjectDialog: true,
}

const reducer = createReducer()

