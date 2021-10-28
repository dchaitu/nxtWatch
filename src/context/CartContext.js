import React from 'react'

const CartContext = React.createContext({
  videosList: [
    {
      channel: {
        name: 'iB Cricket',
        profile_image_url:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
      },
      channelName: 'iB Cricket',
      id: '30b642bd-7591-49f4-ac30-5c538f975b15',
      profileImage:
        'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
      published: 'Apr 19, 2019',
      thumbnail:
        'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png',
      title:
        'Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League',
      views: '1.4K',
    },
  ],
  isDarkTheme: false,
  toggleTheme: () => {},
  addCartItem: () => {},
})

export default CartContext
