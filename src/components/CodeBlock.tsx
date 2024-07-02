import hljs from 'highlight.js/lib/core';
import hljsJavascript from 'highlight.js/lib/languages/javascript';

import 'highlight.js/styles/tokyo-night-dark.css';

hljs.registerLanguage('javascript', hljsJavascript);

interface Props {
  text: string;
  hlLines?: number[];
}

function CodeBlock(props: Props) {
  const {text, hlLines = []} = props;

  const html = hljs.highlight(text, {language: 'javascript'}).value;
  const htmlLines = html.split('\n').map(text => text || ' ');

  const lines = htmlLines.map((lineHtml, index) => {
    const isHighlighted = hlLines.includes(index);
    return (
      <p
        key={index + lineHtml}
        dangerouslySetInnerHTML={{__html: lineHtml}}
        className={
          isHighlighted
            ? 'border-l-4 border-l-tertiary bg-gradient-to-r from-tertiary/10 pl-2'
            : 'border-l-4 border-l-transparent pl-2'
        }
      />
    );
  });

  return (
    <pre className="flex flex-1 overflow-auto">
      <code className="hljs flex-1 overflow-auto rounded-xl">{lines}</code>
    </pre>
  );
}

export default CodeBlock;
