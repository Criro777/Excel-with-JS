import {TABLE_RESIZE, CHANGE_TEXT, CHANGE_STYLES, APPLY_STYLE} from './types'

// Action Creator
export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data
  }
}

// Action Creator
export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data
  }
}

export function changeStyles(data) {
  return {
    type: CHANGE_STYLES,
    data
  }
}

export function applyStyle(data) {
  return {
    type: APPLY_STYLE,
    data
  }
}
