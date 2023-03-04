import React from 'react'

/** Red colored tailwind css button
 * @prop text - Text/JSX Component to display inside button
 * @prop onClick - Click event on button
 */
const Button = ({ text, onClick, className }) => {
    return (
        <button onClick={onClick} type="button" className={`my-2 bg-red-700 text-white rounded-lg border border-red-800 px-2 py-1 w-full hover:bg-red-500 transition-all ease-in-out ${className}`}>{text}</button>
    )
}

export default Button