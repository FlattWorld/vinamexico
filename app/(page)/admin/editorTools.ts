import Quote from '@editorjs/quote'
import List from '@editorjs/list'
import CheckList from '@editorjs/checklist'
import SimpleImage from '@editorjs/simple-image'
import Raw from '@editorjs/raw'
import Link from '@editorjs/link'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'

export const EDITOR_TOOLS = {
  header: Header,
  paragraph: Paragraph,
  checklist: CheckList,
  image: SimpleImage,
  link: Link,
  list: List,
  quote: Quote,
  raw: Raw
};
export default EDITOR_TOOLS;