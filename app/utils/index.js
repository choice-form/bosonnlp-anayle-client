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
  if (handleStatus(json.status)) {
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
  if (handleStatus(json.status)) {
    console.log(json)
    return null
  } else {
    return json
  }
}

function handleStatus(status) {
  if(status){
    switch (status) {
      case 'NOT FOUND':
        return false
      case 'RECEIVED':
        return false
      case 'RUNNING':
        return false
      case 'ERROR':
        return false
      case 'DONE':
        return false
      default:
        return true
    }
  } else {
    return false
  }
}
