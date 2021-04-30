module.exports.theme = {
  fontFamily: {
    display: 'Source Sans Pro, sans-serif',
    body: 'Source Serif Pro, serif'
  },
  fontSize: {
    xs: '.8rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem'
  },
  extend: {
    colors: {
      primaryGradient: 'linear-gradient(to right, #8a2387, #e94057, #f27121)',
      bodyTextColor: '#fff',
      secondary: '#00a1ff', // 'rgb(255 150 125)',
      anchor: '#f27121', // rgb(255 150 125)',
      anchorUnderline: '#00a1ff', // rgb(255 150 125)',
      buttons: {
        color: '#fff',
        borderColor: 'gray',
        hover: {
          color: '#00a1ff',
          borderColor: '#00a1ff'
        }
      },
      backgrounds: {
        page: '#2e3d50', // '#0f041b', // #0f041b
        nav: '#2e3d50', // '#0f041b',
        footer: '#2e3d50'
      }
    }
  }
}
