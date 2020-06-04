module.exports = (componentName) => ({
  content: `
import * as React from 'react'
import classNames from 'classnames'
// Types
import {  } from './${componentName}.types'

interface I${componentName} extends React.DetailedHTMLProps<React.{{ButtonHTMLAttributes}}<{{HTMLButtonElement}}>, {{HTMLButtonElement}}> { }

interface ${componentName}Props extends I${componentName}{
  variant?: variant,
  size?: size,
  loading?: boolean,
  disabled?: boolean,
  block?: boolean,
  danger?: boolean,
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