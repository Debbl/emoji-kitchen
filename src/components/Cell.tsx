import type { IconifyIcon } from "@iconify/react";
import { Icon } from "@iconify/react";

interface IProps {
  isCurrent?: boolean;
  rawUrl: string;
  icon: IconifyIcon;
  iconClick?: () => any;
  onClick?: () => any;
}

const Cell = ({
  isCurrent = false,
  rawUrl,
  onClick,
  icon,
  iconClick,
}: IProps) => {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <div
        className={`cursor-pointer rounded-lg p-3 hover:bg-gray-100${
          isCurrent ? " bg-gray-200" : ""
        }`}
      >
        {rawUrl ? (
          <img className="h-12 w-12" onClick={onClick} src={rawUrl} alt="" />
        ) : (
          <div className="h-12 w-12" onClick={onClick}></div>
        )}
      </div>

      <Icon
        onClick={iconClick}
        className="cursor-pointer rounded-full text-2xl hover:bg-gray-300 md:text-3xl"
        icon={icon}
      />
    </div>
  );
};

export default Cell;