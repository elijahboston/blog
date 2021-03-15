module.exports.theme = {
  fontFamily: {
    display: 'Source Sans Pro, sans-serif',
    body: 'Source Serif Pro, serif'
  },
  extend: {
    colors: {
      bodyTextColor: '#000',
      secondary: '#00a1ff', // 'rgb(255 150 125)',
      anchor: '#00a1ff', // rgb(255 150 125)',
      buttons: {
        color: '#000',
        borderColor: 'gray',
        hover: {
          color: '#00a1ff',
          borderColor: '#00a1ff'
        }
      },
      backgrounds: {
        page: '#fff',
        nav: '#fff',
        footer: '#2e3d50'
      }
    }
  }
}
