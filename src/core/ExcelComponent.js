import {DOMListener} from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.subscribe = options.subscribe || []
    this.store = options.store
    this.unsubscribers = []

    this.prepare()
  }

  // Настраивает компонент до инициализации
  prepare() {}

  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  // Уведомление слушателей о событии event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Подписка на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  $dispatch(action) {
    this.store.dispatch(action)
  }

  // Сюда приходят только изменения по тем полям, на которыебыла подписка
  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key)
  }

  // Инициализация обработчиков событий компонента
  // Добавление DOM слушателей
  init() {
    this.initDOMListeners()
  }

  // Удаление компонент
  // Очистка слушателей
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
    this.storeSub.unsubscribe()
  }
}
