import { useEffect, useRef, useState } from 'react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/menu'
import { restaurant } from '../data/restaurant'
import { IconCheck, IconClose, IconMinus, IconPlus, IconTrash } from './icons'
import './CartDrawer.css'

type OrderType = 'pickup' | 'delivery'

function buildOrderMessage(
  items: ReturnType<typeof useCart>['items'],
  total: number,
  orderType: OrderType,
) {
  const lines = items.map(
    (item) => `• ${item.qty}x ${item.name} — ${formatPrice(item.price * item.qty)}`,
  )
  return [
    `Hi ${restaurant.name}! I'd like to place an order:`,
    '',
    `Order type: ${orderType === 'pickup' ? 'Pickup' : 'Delivery'}`,
    '',
    ...lines,
    '',
    `Total: ${formatPrice(total)}`,
    '',
    orderType === 'delivery'
      ? "I'll share my delivery address here. Please let me know the delivery time. Thank you!"
      : 'Please let me know when it will be ready for pickup. Thank you!',
  ].join('\n')
}

export default function CartDrawer() {
  const { items, isOpen, totalPrice, closeCart, incrementItem, decrementItem, removeItem, clearCart } =
    useCart()
  const [placed, setPlaced] = useState(false)
  const [orderType, setOrderType] = useState<OrderType>('pickup')
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, closeCart])

  useEffect(() => {
    if (!isOpen) setPlaced(false)
  }, [isOpen])

  function handlePlaceOrder() {
    const message = buildOrderMessage(items, totalPrice, orderType)
    window.open(`https://wa.me/${restaurant.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setPlaced(true)
    clearCart()
  }

  function handleStartNewOrder() {
    setPlaced(false)
    closeCart()
  }

  return (
    <>
      <div
        className={`cart-backdrop ${isOpen ? 'cart-backdrop--open' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <div
        className={`cart-drawer ${isOpen ? 'cart-drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Your order"
      >
        <div className="cart-drawer__header">
          <h2>{placed ? 'Order Sent' : 'Your Order'}</h2>
          <button
            type="button"
            className="cart-drawer__close"
            aria-label="Close cart"
            onClick={closeCart}
            ref={closeButtonRef}
          >
            <IconClose width={20} height={20} />
          </button>
        </div>

        {placed ? (
          <div className="cart-drawer__success">
            <span className="cart-drawer__success-icon">
              <IconCheck width={28} height={28} />
            </span>
            <h3>Sent to {restaurant.name}!</h3>
            <p>
              We opened WhatsApp with your {orderType} order details for{' '}
              {restaurant.whatsappDisplay}. Send the message to confirm — we'll get right back to
              you.
            </p>
            <button type="button" className="btn btn-primary" onClick={handleStartNewOrder}>
              Start a new order
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="cart-drawer__empty">
            <p>Your cart is empty.</p>
            <a href="#menu" className="btn btn-outline-dark" onClick={closeCart}>
              Browse the menu
            </a>
          </div>
        ) : (
          <>
            <ul className="cart-drawer__items">
              {items.map((item) => (
                <li className="cart-item" key={item.id}>
                  <img src={item.image} alt="" className="cart-item__image" width={64} height={64} />
                  <div className="cart-item__body">
                    <div className="cart-item__row">
                      <h3>{item.name}</h3>
                      <button
                        type="button"
                        className="cart-item__remove"
                        aria-label={`Remove ${item.name} from cart`}
                        onClick={() => removeItem(item.id)}
                      >
                        <IconTrash width={16} height={16} />
                      </button>
                    </div>
                    <div className="cart-item__row">
                      <div className="cart-item__stepper">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.name}`}
                          onClick={() => decrementItem(item.id)}
                        >
                          <IconMinus width={14} height={14} />
                        </button>
                        <span aria-live="polite">{item.qty}</span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.name}`}
                          onClick={() => incrementItem(item.id)}
                        >
                          <IconPlus width={14} height={14} />
                        </button>
                      </div>
                      <span className="cart-item__price">{formatPrice(item.price * item.qty)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-drawer__footer">
              <div className="cart-drawer__order-type" role="radiogroup" aria-label="Order type">
                <label
                  className={`cart-drawer__order-type-option ${orderType === 'pickup' ? 'is-checked' : ''}`}
                >
                  <input
                    type="radio"
                    name="orderType"
                    value="pickup"
                    checked={orderType === 'pickup'}
                    onChange={() => setOrderType('pickup')}
                  />
                  Pickup
                </label>
                <label
                  className={`cart-drawer__order-type-option ${orderType === 'delivery' ? 'is-checked' : ''}`}
                >
                  <input
                    type="radio"
                    name="orderType"
                    value="delivery"
                    checked={orderType === 'delivery'}
                    onChange={() => setOrderType('delivery')}
                  />
                  Delivery
                </label>
              </div>

              <div className="cart-drawer__total">
                <span>Total</span>
                <strong>{formatPrice(totalPrice)}</strong>
              </div>
              <button type="button" className="btn btn-primary cart-drawer__place-order" onClick={handlePlaceOrder}>
                Place Order on WhatsApp
              </button>
              <div className="cart-drawer__meta">
                <p className="cart-drawer__hint">Sends to {restaurant.whatsappDisplay}</p>
                <button type="button" className="cart-drawer__clear" onClick={clearCart}>
                  Clear cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
