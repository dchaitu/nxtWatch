import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const Videos = props => (
  <CartContext.Consumer>
    {value => {
      const {removeCartItem} = value
      const {videoDetails} = props
      const {
        id,
        thumbnail,
        title,
        totalViews,
        subscribers,
        profileImage,
        channelName,
        showVideo,
        published,
      } = videoDetails

      const onRemoveCartItem = () => {
        removeCartItem(id)
      }

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={thumbnail} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by </p>
            </div>

            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs /-</p>
              <button
                className="remove-button"
                type="button"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
            testid="remove"
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default Videos
