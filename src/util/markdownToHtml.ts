import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import { unified } from 'unified'

export default async function markdownToHtml(raw: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remark2rehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(raw)
  return result.toString()
}
