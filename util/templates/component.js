module.exports = (componentName) => ({
  content: `
import * as React from 'react'
import classNames from 'classnames'
// Types
import {  } from './${componentName}.types'
// Styles
import '../../styles/components/_${componentName.toLowerCase()}.scss'

interface I${componentName} extends React.DetailedHTMLProps<React.{{ButtonHTMLAttributes}}<{{HTMLButtonElement}}>, {{HTMLButtonElement}}> { }

interface ${componentName}Props extends I${componentName}{
  className?: string,
}

export class ${componentName} extends React.PureComponent<${componentName}Props> {

  public render(){
    return(
      {/* 
        Compose your Component
      */}
    )
  }
}
  
`,
  extension: `.tsx`
});