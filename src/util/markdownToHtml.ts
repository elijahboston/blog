import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import { unified } from 'unified'

export default async function markdownToHtml(raw: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remark2rehype)
    .use(rehypeStringify)
    .process(raw)
  return result.toString()
}
