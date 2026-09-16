// forcehp.pages.dev -> https://forcehp.org へ 301 リダイレクト
// カスタムドメイン(forcehp.org)でのリクエストはそのまま静的アセットへ流す
export async function onRequest(context) {
  const url = new URL(context.request.url)
  if (url.hostname === 'forcehp.pages.dev') {
    url.hostname = 'forcehp.org'
    url.port = ''
    return Response.redirect(url.toString(), 301)
  }
  return context.next()
}
