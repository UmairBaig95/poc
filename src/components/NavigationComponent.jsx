import React, { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useLocation, Link } from "react-router-dom";

const NavigationComponent = ({ navData, hidden, onClose }) => {
  const location = useLocation();
  const [activeNested, setActiveNested] = React.useState({});

  useEffect(() => {
    navData.forEach((item) => {
      if (item.nested && item.nestedLinks) {
        const isNestedActive = item.nestedLinks.some((subItem) =>
          location.pathname.includes(subItem.to)
        );
        if (isNestedActive) {
          setActiveNested({ [item.label]: true });
        }
      }
    });
  }, [location.pathname, navData]);

  return (
    <ul className="space-y-3">
      {navData?.map((item) => (
        <li key={item.label}>
          <Link
            to={item.to}
            onClick={() => {
              onClose();
            }}
            className={
              location.pathname.split("/").slice(-1)[0] ===
              item.to.split("/").slice(-1)[0]
                ? `py-1 px-2 rounded-[4.54px] flex ${
                    hidden ? "items-start" : "items-center"
                  } space-x-3 bg-light-darkBorder text-lg font-medium dark:bg-dark-border w-fit text-white`
                : "py-1 px-2 rounded-[4.54px] flex items-center space-x-3 hover:bg-light-darkBorder text-lg dark:hover:bg-dark-border transition-colors text-light-textGray w-fit"
            }
          >
            {/* <span>{item.icon(location.pathname.includes(item.to))}</span> */}
            <span className={`${hidden ? "hidden" : ""}`}>{item.label}</span>
            {item.nested && item.nestedLinks && (
              <FiChevronDown
                className={`${hidden ? "hidden" : ""} ${
                  activeNested[item.label]
                    ? "transform rotate-180 transition-transform duration-300"
                    : "transition-transform duration-300"
                }`}
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationComponent;
