import * as React from 'react'

/**
 * @interface IDiv
 */
export interface IDiv extends React.DetailedHTMLProps
  <React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

/**
 * @interface IButton
 */
export interface IButton extends React.DetailedHTMLProps
  <React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> { }

/**
 * @interface IElement
 */
export interface IElement extends React.DetailedHTMLProps
  <React.HTMLAttributes<HTMLElement>, HTMLElement> { }

/**
 * @interface ILink
 */
export interface ILink extends React.DetailedHTMLProps
  <React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> { }

/**
 * @interface IInput
 */
export interface IInput extends React.DetailedHTMLProps
  <React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }
/**
 * @interface ITextarea
 */
export interface ITextarea extends React.DetailedHTMLProps
  <React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> { }

/**
 * @interface ISelect
 */
export interface ISelect extends React.DetailedHTMLProps
  <React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> { }

/**
 * @interface IOption
 */
export interface IOption extends React.DetailedHTMLProps
  <React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement> { }

/**
 * @interface ILiElement
 */
export interface ILiElement extends React.DetailedHTMLProps
  <React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> { }

/**
 * @interface IUlElement
 */
export interface IUlElement extends React.DetailedHTMLProps
  <React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> { }

/**
 * @interface IParagraph
 */
export interface IParagraph extends React.DetailedHTMLProps
  <React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> { }

/**
 * @interface IHeading
 */
export interface IHeading extends React.DetailedHTMLProps
  <React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> { }

/**
 * @interface ITable
 */
export interface ITable extends React.DetailedHTMLProps
  <React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> { }