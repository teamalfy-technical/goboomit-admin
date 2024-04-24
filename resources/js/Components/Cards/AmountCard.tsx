import React from "react";
interface Props {
    title: string;
    amount: number;
}

const AmountCard = ({ title, amount }: Props) => {
    return (
        <div className="px-2 py-4">
            <h6 className="text-sm font-semibold text-[#757575]">{title}</h6>
            <p className="text-4xl font-bold mt-4">${amount.toFixed(2)}</p>
        </div>
    );
};

export default AmountCard;
