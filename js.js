const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

const days = ['SA', 'MO', 'TU', 'WE', 'TH', 'FR', 'SAT']

setInterval(() => {
	const date = new Date()

	day.innerHTML = days[date.getDay()]
	hour.innerHTML = date.getHours()
	minutes.innerHTML = date.getMinutes()
	seconds.innerHTML = date.getSeconds()
}, 1000)
