import {ExcelStateComponent} from '@/core/ExcelStateComponent';
import {createToolbar} from '@/components/toolbar/toolbar.template'
import {defaultStyles} from '@/constants';
import {$} from '@core/dom'

export class Toolbar extends ExcelStateComponent {
  static className = 'excel__toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options
    })
  }

  prepare() {
    this.initState(defaultStyles)
  }

  get template() {
    return createToolbar(this.state)
  }

  toHTML() {
    return this.template
  }

  onClick(event) {
    const $target = $(event.target)
    if ($target.data.type === 'button') {
      const value = JSON.parse($target.data.value)
      this.$emit('toolbar:applyStyle', value)

      const key = Object.keys(value)[0]
      this.setState({[key]: value[key]})
    }
  }
}
