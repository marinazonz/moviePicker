"use client";

import clsx from "clsx";

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    children?: React.ReactNode;
    onClick?: () => void;
    primary?: boolean;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    type,
    children,
    onClick,
    primary,
    secondary,
    danger,
    disabled,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                "flex justify-center rounded-sm px-3 py-1.5 lg:py-2 text-sm lg:text-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                disabled && "opacity-50 cursor-default",
                primary &&
                    "bg-teal-600 hover:bg-teal-700 focus-visible:outline-teal-700",
                secondary ? "text-gray-900" : "text-white",
                danger &&
                    "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600"
            )}
        >
            {children}
        </button>
    );
};

export default Button;
