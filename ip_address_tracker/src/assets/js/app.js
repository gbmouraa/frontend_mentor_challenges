const ipAddressInputEl = document.querySelector('#address-input')
const ipAddressEl = document.querySelector('#ip-address')
const ipLocationEl = document.querySelector('#location')
const timezoneEl = document.querySelector('#timezone')
const ispEl = document.querySelector('#isp')

const form = document.querySelector('#form')
const ipContentEl = document.querySelector('#ip-content')

const mapContainer = document.querySelector('#map')
let map;

// this function is to search for the ip entered in the form
const getUserIpAddress = async (ip) => {
  try {
    const response = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_8Xb1FNkFbIZY8bCGNoBSjfBlUK0jq&ipAddress=' + ip)
    const data = await response.json()
    const lat = data.location.lat
    const lng = data.location.lng

    showIpInfo(data)
    showMap(lat, lng)
    showError(false)
    preLoading(false)
  } catch (e) {
    showError(true)
    preLoading(true)
  }
}

const showError = (arg) => {
  if (arg) {
    ipAddressInputEl.value = ''
    ipAddressInputEl.setAttribute('placeholder', 'Invalid IP Address')
    ipAddressInputEl.classList.add('bg-red-200', 'ring-1', 'ring-inset', 'ring-red-500')
    return
  }

  ipAddressInputEl.classList.remove('bg-red-200', 'ring-1', 'ring-inset', 'ring-red-500', 'text-red-500')
  ipAddressInputEl.setAttribute('placeholder', 'Search for any IP addres or domain')
}

const showIpInfo = data => {
  if (ipContentEl.classList.contains('hidden')) {
    ipContentEl.classList.add('flex')
    ipContentEl.classList.remove('hidden')
  }

  ipAddressEl.innerHTML = data.ip
  ipLocationEl.innerText = `${data.location.city}, ${data.location.region}`
  timezoneEl.innerHTML = `UTC${data.location.timezone}`
  ispEl.innerHTML = data.isp
}

const showMap = (lat, lng) => {
  if (map !== undefined) map.remove()
  if (mapContainer.classList.contains('opacity-50')) {
    mapContainer.classList.remove('opacity-50')
  }

  map = L.map(mapContainer).setView([lat, lng], 12)
  map.zoomControl.remove()

  let mapIcon = L.icon({
    iconUrl: './assets/images/icon-location.svg',
    iconSize: [40, 50],
    iconAnchor: [10, 70]
  })

  L.marker([lat, lng], { icon: mapIcon }).addTo(map)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
  }).addTo(map);
}

// this function will get the user's ip when he accesses the page
const getInitialUserIp = async (callback) => {
  const reponse = await fetch('https://api.ipify.org?format=json')
  const data = await reponse.json()
  const ip = data.ip
  callback(ip)
}

getInitialUserIp(function (ipAddress) {
  if (ipAddress) {
    getUserIpAddress(ipAddress)
    preLoading(false)
  }
})

const preLoading = (arg) => {
  const loading = document.querySelector('#loading')
  if (arg) {
    loading.classList.add('block')
    loading.classList.remove('hidden')
    return
  }
  loading.classList.add('hidden')
  loading.classList.remove('block')
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const ip = ipAddressInputEl.value.trim()

  preLoading(true)
  mapContainer.classList.add('opacity-50')
  getUserIpAddress(ip)

})