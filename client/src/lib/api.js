export async function getApiHealth() {
  const response = await fetch('/api/health')

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`)
  }

  return response.json()
}
