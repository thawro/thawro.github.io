import React from "react";
/** @jsxImportSource theme-ui */

import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python"
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash"
import docker from "react-syntax-highlighter/dist/esm/languages/prism/docker"

import remarkGfm from 'remark-gfm'
import style from '../css/markdown-styles.module.css';

SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('docker', docker);


const Markdown = ({ markdown }) => {
    return <div>
        <ReactMarkdown
            children={markdown}
            remarkPlugins={[remarkGfm]}
            className={style.reactMarkDown}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            {...props}
                            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                            wrapLines={true}
                            children={String(children).replace(/\n$/, '')}
                            style={dracula}
                            language={match[1]}
                            PreTag="div"
                        />
                    ) : (
                        <code {...props} className={className}>

                            {children}
                        </code>
                    )
                }
            }}
        />
    </div>
}

export default Markdown