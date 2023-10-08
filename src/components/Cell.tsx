import Image from "next/image";
import type { IIcon } from "~/icons";
import Icon from "~/icons";

interface IProps {
  isCurrent?: boolean;
  rawUrl: string;
  icon: IIcon;
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
          <Image
            width={48}
            height={48}
            className="h-12 w-12"
            onClick={onClick}
            src={rawUrl}
            alt="emoji"
          />
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
