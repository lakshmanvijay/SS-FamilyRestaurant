import { menuImages } from './images'

export type MenuCategory = 'Starters' | 'Mains' | 'Desserts'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: MenuCategory
  tags?: string[]
}

export const menuItems: MenuItem[] = [
  {
    id: 'soup',
    name: 'Roasted Tomato & Basil Soup',
    description: 'Slow-roasted vine tomatoes, fresh basil, and a swirl of cream.',
    price: 8,
    image: menuImages.soup,
    category: 'Starters',
    tags: ['Vegetarian'],
  },
  {
    id: 'salad',
    name: 'Garden Harvest Salad',
    description: 'Crisp greens, heirloom tomatoes, candied walnuts, citrus vinaigrette.',
    price: 11,
    image: menuImages.salad,
    category: 'Starters',
    tags: ['Vegetarian', 'Gluten-Free'],
  },
  {
    id: 'pasta',
    name: "Nonna's Slow-Simmered Ragù",
    description: 'House-made tagliatelle tossed in a rich, all-day beef and tomato ragù.',
    price: 19,
    image: menuImages.pasta,
    category: 'Mains',
  },
  {
    id: 'steak',
    name: 'Char-Grilled Ribeye',
    description: 'Herb-butter basted ribeye, roasted garlic mash, red wine jus.',
    price: 29,
    image: menuImages.steak,
    category: 'Mains',
    tags: ['Chef’s Pick'],
  },
  {
    id: 'pizza',
    name: 'Wood-Fired Margherita',
    description: 'San Marzano tomato, fresh mozzarella, basil, extra-virgin olive oil.',
    price: 16,
    image: menuImages.pizza,
    category: 'Mains',
    tags: ['Vegetarian'],
  },
  {
    id: 'seafood',
    name: 'Pan-Seared Seafood Platter',
    description: 'Market catch, saffron butter, charred lemon, seasonal greens.',
    price: 26,
    image: menuImages.seafood,
    category: 'Mains',
  },
  {
    id: 'burger',
    name: 'Family Smokehouse Burger',
    description: 'Smoked cheddar, crispy onions, house sauce, brioche bun.',
    price: 17,
    image: menuImages.burger,
    category: 'Mains',
  },
  {
    id: 'dessert',
    name: 'Warm Chocolate Fondant',
    description: 'Molten dark chocolate cake, vanilla bean ice cream, berry compote.',
    price: 9,
    image: menuImages.dessert,
    category: 'Desserts',
    tags: ['Vegetarian'],
  },
]

export const menuCategories: MenuCategory[] = ['Starters', 'Mains', 'Desserts']

export function formatPrice(value: number) {
  return `$${value.toFixed(2).replace(/\.00$/, '')}`
}
