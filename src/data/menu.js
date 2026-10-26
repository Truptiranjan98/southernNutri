// All business info and menu items live here.
// To change a price or add a dish, edit this file only.

export const business = {
  name: 'Southern Nutri Kitchen',
  tagline: 'Healthy Food · Homemade · Just for You!',
  by: 'By Hotel O',
  phone: '9673923677',
  whatsapp: '919673923677',
  deliveryKm: 2,
}

export const features = [
  { icon: '🌿', title: 'No Preservatives' },
  { icon: '🚫', title: 'No Artificial Colours' },
  { icon: '🥬', title: 'Fresh Ingredients' },
  { icon: '🏠', title: 'Homemade Taste' },
  { icon: '❤️', title: 'Healthy Options' },
]

// type: 'veg' | 'nonveg' | 'egg'
export const menu = [
  {
    id: 'tiffin',
    title: 'Tiffin',
    timing: '7:00 AM – 11:00 AM',
    note: 'All tiffins served with Sambar & Chutney.',
    groups: [
      {
        title: 'Tiffin Menu',
        image: '/images/idly.jpg',
        items: [
          { name: 'Boiled Egg', qty: '1 pc', price: 30, type: 'egg' },
          { name: 'White Idly', qty: '2 pcs', price: 65, type: 'veg' },
          { name: 'Red Idly (Ragi)', qty: '2 pcs', price: 75, type: 'veg', healthy: true },
          { name: 'Millet Idly', qty: '2 pcs', price: 75, type: 'veg', healthy: true },
          { name: 'Plain Dosa', price: 75, type: 'veg' },
          { name: 'Red Dosa (Ragi)', price: 85, type: 'veg', healthy: true },
          { name: 'Green Dosa (Pesarattu)', price: 85, type: 'veg', healthy: true },
          { name: 'Millet Dosa', price: 85, type: 'veg', healthy: true },
          { name: 'Aloo Paratha', qty: '1 pc', price: 100, type: 'veg' },
        ],
      },
    ],
  },
  {
    id: 'lunch',
    title: 'Lunch & Dinner',
    timing: '12:00 PM – 3:00 PM  |  7:00 PM – 11:00 PM',
    groups: [
      {
        title: 'Non-Veg Rice Bowls',
        image: '/images/biryani.jpg',
        items: [
          { name: 'Hyderabad Dum Biryani (White Rice)', price: 175, type: 'nonveg', popular: true },
          { name: 'Chicken Brown Rice Pulao', price: 195, type: 'nonveg', healthy: true },
          { name: 'Chicken Brown Rice Biryani', price: 195, type: 'nonveg', healthy: true },
          { name: 'Quinoa + Brown Rice Chicken Pulao', price: 215, type: 'nonveg', healthy: true },
          { name: 'Mutton Kheema Pulao (White Rice)', price: 235, type: 'nonveg' },
          { name: 'Mutton Pulav (White Rice)', price: 255, type: 'nonveg' },
          { name: 'Mutton Biryani (White Rice)', price: 275, type: 'nonveg' },
          { name: 'Mutton Brown Rice Biryani', price: 295, type: 'nonveg', healthy: true },
        ],
      },
      {
        title: 'Veg Rice Bowls',
        image: '/images/veg-pulao.jpg',
        items: [
          { name: 'Curd Rice', price: 105, type: 'veg' },
          { name: 'Dalcha Rice', price: 105, type: 'veg' },
          { name: 'Veg Biryani (White Rice)', price: 145, type: 'veg' },
          { name: 'Matar Paneer Pulao', price: 155, type: 'veg', popular: true },
          { name: 'Brown Rice Paneer Pulao', price: 175, type: 'veg', healthy: true },
          { name: 'Brown Rice Fried Rice', price: 185, type: 'veg', healthy: true },
          { name: 'Quinoa + Brown Rice Paneer Pulao', price: 195, type: 'veg', healthy: true },
          { name: 'White Rice', price: 35, type: 'veg' },
          { name: 'Hyderabad Pulavo', price: 55, type: 'veg' },
        ],
      },
      {
        title: 'Non-Veg Curries',
        image: '/images/nonveg-curry.jpg',
        items: [
          { name: 'Afghani Chicken Curry', price: 135, type: 'nonveg' },
          { name: 'Mutton Kurma', price: 185, type: 'nonveg' },
        ],
      },
      {
        title: 'Veg Curries',
        image: '/images/veg-curry.jpg',
        items: [
          { name: 'Matar Aloo Curry', price: 95, type: 'veg' },
          { name: 'Kaju Paneer Curry', price: 155, type: 'veg' },
        ],
      },
      {
        title: 'Breads',
        image: '/images/parota.jpg',
        items: [{ name: 'Parota', qty: '2 pcs', price: 69, type: 'veg' }],
      },
    ],
  },
  {
    id: 'beverages',
    title: 'Beverages',
    groups: [
      {
        title: 'Beverages',
        image: '/images/tea.jpg',
        items: [
          { name: 'Tea (Chai)', price: 25, type: 'veg' },
          { name: 'Coffee', price: 30, type: 'veg' },
          { name: 'Hot Milk', price: 30, type: 'veg' },
        ],
      },
    ],
  },
  {
    id: 'extras',
    title: 'Extras',
    note: 'Add extras to any meal.',
    groups: [
      {
        title: 'Add Extras to Your Meal',
        items: [
          { name: 'Boiled Egg', price: 25, type: 'egg' },
          { name: 'Chapati', qty: '1 pc', price: 25, type: 'veg' },
          { name: 'Fresh Salad', price: 20, type: 'veg' },
          { name: 'Raita', price: 20, type: 'veg' },
          { name: 'Extra Chutney', price: 10, type: 'veg' },
        ],
      },
    ],
  },
]

export const meals = [
  {
    name: 'Maharashtrian Veg Meal',
    price: 180,
    type: 'veg',
    image: '/images/veg-thali.jpg',
    includes: ['2 Chapati', '1 Bhaji', 'Dal', 'Rice', 'Salad', 'Pickle', 'Solkadhi (or Buttermilk)'],
  },
  {
    name: 'Maharashtrian Non-Veg Meal',
    price: 220,
    type: 'nonveg',
    image: '/images/nonveg-thali.jpg',
    includes: ['2 Chapati', 'Chicken Curry (or Mutton Curry)', 'Dal', 'Rice', 'Salad', 'Pickle', 'Solkadhi (or Buttermilk)'],
  },
]
