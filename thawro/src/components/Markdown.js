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
import { getThemeColor } from "../theme";
import { useThemeUI } from "theme-ui";

SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('docker', docker);


const Markdown = ({ markdown }) => {
    const context = useThemeUI()
    var isDark = context.colorMode === "dark"

    return <div>

        <ReactMarkdown
            linkTarget="_blank"
            children={markdown}
            remarkPlugins={[remarkGfm]}
            className={style.reactMarkDown}
            sx={{ color: "textPrimary" }}

            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            {...props}
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
        <style>{`
        h1{
            color: ${getThemeColor(isDark, "textPrimary")}
        }
        a{
            color: ${getThemeColor(isDark, "textTertiary")}
        }
        `}</style>
    </div>
}

export default Markdown