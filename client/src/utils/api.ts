  
export async function callApi(method: string, url: string, path: string, data?: any) {
    const res = await fetch(`${url}/api${path}`, {
      method: 'post',
      headers: {
        Accept: '"authorName": "Mark Twain"'
      },
      body: JSON.stringify(data)
    })
    return res.json()
  }