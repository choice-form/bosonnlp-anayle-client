export const baseUrl = 'http://192.168.50.127:3000'

export async function post(url, body) {
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body)
  })
  const json = await res.json()
  if (json.status) {
    console.log(json) //eslint-disable-line
    return null
  } else {
    return json
  }
}

export async function get(url) {
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
  const json = await res.json()
  if (json.status) {
    console.log(json)
    return null
  } else {
    return json
  }
}
