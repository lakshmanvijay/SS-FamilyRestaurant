import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  qty: number
}

interface CartContextValue {
  items: CartItem[]
  isOpen: boolean
  totalCount: number
  totalPrice: number
  addItem: (item: { id: string; name: string; price: number; image: string }) => void
  removeItem: (id: string) => void
  incrementItem: (id: string) => void
  decrementItem: (id: string) => void
  getQty: (id: string) => number
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'ss-family-restaurant-cart'

function loadStoredItems(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => loadStoredItems())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore storage failures (private browsing, quota, etc.)
    }
  }, [items])

  const addItem = useCallback((item: { id: string; name: string; price: number; image: string }) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const incrementItem = useCallback((id: string) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)))
  }, [])

  const decrementItem = useCallback((id: string) => {
    setItems((prev) =>
      prev.flatMap((i) => {
        if (i.id !== id) return [i]
        if (i.qty <= 1) return []
        return [{ ...i, qty: i.qty - 1 }]
      }),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const getQty = useCallback((id: string) => items.find((i) => i.id === id)?.qty ?? 0, [items])

  const totalCount = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])
  const totalPrice = useMemo(() => items.reduce((sum, i) => sum + i.qty * i.price, 0), [items])

  const value: CartContextValue = {
    items,
    isOpen,
    totalCount,
    totalPrice,
    addItem,
    removeItem,
    incrementItem,
    decrementItem,
    getQty,
    clearCart,
    openCart,
    closeCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
