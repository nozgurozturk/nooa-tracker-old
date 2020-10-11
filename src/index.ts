import { Nooa } from './nooa'

(window => {
  if (!window.nooa) {
    const nooa = new Nooa()
    nooa.set()
    window.nooa = nooa
  }
})(window)