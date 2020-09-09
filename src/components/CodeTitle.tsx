import React from "react"

type CodeTitleTypes = {
  title: string
  language: string
}
const CodeTitle = ({ title, language }: CodeTitleTypes) => {
  return (
    <div>
      <span className="custom-filename">{title}</span>
    </div>
  )
}

export default CodeTitle
