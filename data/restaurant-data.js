export const restaurantData = {
    "restaurantName": "Delicious Burger",
    "currency": "IDR",
    "summary": {
        "totalRevenue": 7852000,
        "revenueGrowthPercent": 2.1,
        "totalOrders": 2568,
        "orderGrowthPercent": -2.1,
        "dateRange": "1-12 Dec, 2020"
    }
}

export const revenueHistory = [
    { "day": "01", "current": 4500, "previous": 4000 },
    { "day": "02", "current": 3800, "previous": 4100 },
    { "day": "03", "current": 5200, "previous": 4800 },
    { "day": "04", "current": 3100, "previous": 3500 },
    { "day": "05", "current": 5900, "previous": 5000 },
    { "day": "06", "current": 6100, "previous": 5800 },
    { "day": "07", "current": 4200, "previous": 4000 },
    { "day": "08", "current": 4800, "previous": 4600 },
    { "day": "09", "current": 3900, "previous": 4100 },
    { "day": "10", "current": 5500, "previous": 5200 },
    { "day": "11", "current": 6300, "previous": 6000 },
    { "day": "12", "current": 6500, "previous": 6100 }
]

export const orderTimeDistribution = [
    {
        name: 'Afternoon',
        value: 40,
        orders: 1890,
        fill: '#5A78F0'
    },
    {
        name: 'Evening',
        value: 32,
        orders: 1512,
        fill: '#7C94F5'
    },
    {
        name: 'Morning',
        value: 28,
        orders: 1323,
        fill: '#E2E8F0'
    },
]

export const ratings = {
    "foodTaste": 85,
    "hygiene": 85,
    "packaging": 92
}

export const mostOrderedFood = [
    {
        id: 1,
        name: "Fresh Salad Bowl",
        price: "IDR 45.000",
        image: "🥗"
    },
    {
        id: 2,
        name: "Chicken Noodles",
        price: "IDR 75.000",
        image: "🍜"
    },
    {
        id: 3,
        name: "Smoothie Fruits",
        price: "IDR 45.000",
        image: "🥤"
    },
    {
        id: 4,
        name: "Hot Chicken Wings",
        price: "IDR 45.000",
        image: "🍗"
    },
]

export const orderHistory = [
    { day: '01', lastSixDays: 120, lastWeek: 140 },
    { day: '02', lastSixDays: 190, lastWeek: 130 },
    { day: '03', lastSixDays: 150, lastWeek: 180 },
    { day: '04', lastSixDays: 170, lastWeek: 160 },
    { day: '05', lastSixDays: 140, lastWeek: 190 },
    { day: '06', lastSixDays: 210, lastWeek: 150 },
]
