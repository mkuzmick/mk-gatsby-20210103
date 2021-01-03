import React from "react"
import { MDXProvider } from "@mdx-js/react"
import SketchPicker from "./color-picker/sketch"
import SimpleKeyboard from "./piano/simple-keyboard"
import SuperBigHeadline from "./ui/super-big-headline"

const shortcodes = { SketchPicker, SimpleKeyboard, SuperBigHeadline }

export default function MDXLayout ({ children }) {
  return (
    <MDXProvider components={shortcodes}>
      <div style={{
        width: "80%",
        margin: "auto",
        marginTop: "3em"
      }}>
        {children}
      </div>
    </MDXProvider>
  )
}