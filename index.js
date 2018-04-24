export default (text, replacement = ' ') =>
  text.replace(
    /[^,./;'[\]{}\\|=\-()*&^%$#@!`~，。/；‘’“”【】「」、！：《》（）～·¥%…—]/g,
    replacement
  )
