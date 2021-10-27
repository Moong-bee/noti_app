const color = (color: string) => {
  let color_code = '#ffffff'
  switch (color) {
    case 'primary':
      color_code = '#0077b6'
      break
    case 'danger':
      color_code = '#d00000'
      break
    case 'warning':
      color_code = '#fca311'
      break
    case 'light':
      color_code = '#ffffff'
      break
    case 'dark':
      color_code = '#353535'
      break
    case 'success':
      color_code = '#00a358'
      break
    case 'info':
      color_code = '#4ecdc4'
      break
    case 'secondary':
      color_code = '#8d99ae'
      break
  }

  return color_code
}

const background_color = (color: string) => {
  let color_code = '#ffffff'
  switch (color) {
    case 'primary':
      color_code = '#00a7ff'
      break
    case 'danger':
      color_code = '#ff7575'
      break
    case 'warning':
      color_code = '#fca311'
      break
    case 'light':
      color_code = '#ffffff'
      break
    case 'dark':
      color_code = '#353535'
      break
    case 'success':
      color_code = '#00a358'
      break
    case 'info':
      color_code = '#4ecdc4'
      break
    case 'secondary':
      color_code = '#8d99ae'
      break
  }

  return color_code
}

export default color
