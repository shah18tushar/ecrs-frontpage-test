import React from "react";
import { cn } from "@/lib/utils"; // Optional helper to combine classNames
import PropTypes from "prop-types";

const ContactCard = ({
  title,
  address,
  phones,
  emails,
  isSelected,
  onClick,
}) => {
  const maxLength = Math.max(phones.length, emails.length);

  return (
    <div
      onClick={onClick}
      className={cn(
        "border rounded-xl p-4 shadow-sm cursor-pointer transition-all h-[20rem]",
        isSelected ? "border-red-500 shadow-lg bg-red-50" : "hover:shadow-md"
      )}
    >
      <h3 className="font-bold text-lg text-red-600">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{address}</p>
      <div className="mt-2 text-sm">
        {Array.from({ length: maxLength }).map((_, idx) => (
          <div key={idx} className={idx > 0 ? "mt-4" : ""}>
            {phones[idx] && <p>📞 {phones[idx]}</p>}
            {emails[idx] && <p>✉️ {emails[idx]}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phones: PropTypes.arrayOf(PropTypes.string).isRequired,
  emails: PropTypes.arrayOf(PropTypes.string).isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ContactCard;
