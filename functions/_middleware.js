// forcehp.pages.dev / www.forcehp.org -> https://forcehp.org へ 301 リダイレクト
// カスタムドメイン(forcehp.org)でのリクエストはそのまま静的アセットへ流す
const REDIRECT_HOSTS = new Set(['forcehp.pages.dev', 'www.forcehp.org'])

export async function onRequest(context) {
  const url = new URL(context.request.url)
  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.hostname = 'forcehp.org'
    url.port = ''
    return Response.redirect(url.toString(), 301)
  }
  return context.next()
}
