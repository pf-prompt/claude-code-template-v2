async function main() {
  const SENTRY_ORG = process.env.SENTRY_ORG
  const SENTRY_PROJECT = process.env.SENTRY_PROJECT
  const SENTRY_EVENT_AUTH_TOKEN = process.env.SENTRY_EVENT_AUTH_TOKEN
  const resp = await fetch(`https://sentry.io/api/0/projects/${SENTRY_ORG}/${SENTRY_PROJECT}/events/`, {
    headers: {
      'Authorization': `Bearer ${SENTRY_EVENT_AUTH_TOKEN}`
    }
  })
  console.log(resp.status)
  console.log(await resp.json())
}

main().catch(console.error)