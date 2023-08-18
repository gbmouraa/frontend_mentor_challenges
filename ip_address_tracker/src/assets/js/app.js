const ipAddress = document.querySelector('#ip-address')
const ipLocation = document.querySelector('#location')
const timezone = document.querySelector('#timezone')
const isp = document.querySelector('#isp')

const form = document.querySelector('#form')
const ipContent = document.querySelector('#ip-content')
const mapContainer = document.querySelector('#map')
let map;

const getApiAddress = async (ip) => {
  try {
    const response = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_8Xb1FNkFbIZY8bCGNoBSjfBlUK0jq&ipAddress=' + ip)
    const data = await response.json()
    const lat = data.location.lat
    const lng = data.location.lng

    showIpInfo(data)
    showMap(lat, lng)
    showError(false)
  } catch (e) {
    showError(true)
  }
}

const showError = (arg) => {
  const errorEl = document.querySelector('#error')
  if (arg) {
    errorEl.classList.remove('hidden')
    errorEl.classList.add('block')
    return
  }
  errorEl.classList.add('hidden')
  errorEl.classList.remove('block')
}

const showIpInfo = data => {

  if (ipContent.classList.contains('hidden')) {
    ipContent.classList.add('flex')
    ipContent.classList.remove('hidden')
  }

  ipAddress.innerHTML = data.ip
  ipLocation.innerText = `${data.location.city}, ${data.location.region}`
  timezone.innerHTML = `UTC${data.location.timezone}`
  isp.innerHTML = data.isp
}

const showMap = (lat, lng) => {
  if (map != undefined) map.remove()

  map = L.map(mapContainer).setView([lat, lng], 12)
  let mapIcon = L.icon({
    iconUrl: './assets/images/icon-location.svg',
    iconSize: [40, 50],
    iconAnchor: [10, 70]
  })

  L.marker([lat, lng], { icon: mapIcon }).addTo(map)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

}

const getUserIp = async (callback) => {
  const reponse = await fetch('https://api.ipify.org?format=json')
  const data = await reponse.json()
  const ip = data.ip
  callback(ip)
}

getUserIp(function (ipAddress) {
  if (ipAddress) {
    getApiAddress(ipAddress)
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputIP = document.querySelector('#address-input')
  const ip = inputIP.value.trim()

  getApiAddress(ip)
})