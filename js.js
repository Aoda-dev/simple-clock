const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

const days = ['SA', 'TU', 'WE', 'TH', 'FR', 'SAT', 'MO']

setInterval(() => {
	const date = new Date()

	day.innerHTML = days[date.getDay() - 1]
	hour.innerHTML = date.getHours()
	minutes.innerHTML = date.getMinutes()
	seconds.innerHTML = date.getSeconds()
}, 1000)
