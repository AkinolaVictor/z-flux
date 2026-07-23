import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { hybrid } from 'react-syntax-highlighter/dist/esm/styles/hljs'

// for more styles, use https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/
// check documentation here, https://www.npmjs.com/package/react-syntax-highlighter

function CodeBlock_Custom(props) {
    const {children, startNumber} = props

    return (

        <SyntaxHighlighter
            language="javascript" 
            style={hybrid} 
            // style={monokai} 
            // style={rainbow} 
            customStyle={{background: "black", border: "none"}}
            showLineNumbers
            // useInlineStyles
            startingLineNumber={startNumber}
        >
            {children}
        </SyntaxHighlighter>
    )
}

export default CodeBlock_Custom
