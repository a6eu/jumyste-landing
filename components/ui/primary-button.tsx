import React from 'react'

interface ButtonProps {
    disabled?: boolean
    onClick?: () => void
    text?: string
}

const PrimaryButton: React.FC<ButtonProps> = ({
    disabled = false,
    onClick,
    text = 'Button',
}) => {
    return (
        <button className="py-3 px-4 min-w-40 bg-[#8B5DFF] text-2xl rounded-xl text-white font-light hover:opacity-85 transform duration-300" disabled={disabled} onClick={onClick}>
            {text}
        </button>
    )
}

export { PrimaryButton }
