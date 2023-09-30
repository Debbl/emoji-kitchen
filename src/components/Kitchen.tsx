/* eslint-disable no-alert */
"use client";
import { useMemo, useState } from "react";
import random1dice from "@iconify/icons-fad/random-1dice";
import copy from "@iconify/icons-fad/copy";
import { Icon, type IconifyIcon } from "@iconify/react";
import xlrplugIcon from "@iconify/icons-fad/xlrplug";
import random2dice from "@iconify/icons-fad/random-2dice";
import recordIcon from "@iconify/icons-fad/record";
import { useGitHubInfo } from "@debbl/ahooks";
import * as clipboard from "clipboard-polyfill";

import Cell from "./Cell";
import { emojiData, knownSupportedEmoji } from "~/constants";

const rawUrl = "/api/emoji";
const rootUrl = "/api/emojikitchen";

const getRawUrl = (v?: string) => {
  if (!v) return "";
  return `${`${rawUrl}/${v.split("-")[0].padStart(4, "0")}`}.svg`;
};

const Kitchen = () => {
  const [emoji, setEmoji] = useState({
    left: "1fa84",
    right: "1f522",
  });
  const [current, setCurrent] = useState<"left" | "right">("left");
  const [toIcon, setToIcon] = useState<IconifyIcon>(copy);

  const { GitHubInfo } = useGitHubInfo(
    "https://github.com/Debbl/emoji-kitchen"
  );

  const toUrl = useMemo(() => {
    if (!emoji.left || !emoji.right) return "";

    const url =
      emojiData?.[emoji.left]?.[emoji.right]?.url ??
      emojiData?.[emoji.right]?.[emoji.left]?.url;
    if (!url) return "";

    return rootUrl + url;
  }, [emoji]);
  const allowList = useMemo(() => {
    if (!emoji.left && !emoji.right) return knownSupportedEmoji;
    else
      return Object.keys(
        emojiData?.[current === "left" ? emoji.right : emoji.left] ?? {}
      );
  }, [current, emoji.left, emoji.right]);

  // left and right
  const handleClick = (v: string) => {
    if (current === "left") {
      setEmoji({ left: v, right: emoji.right });
      if (emoji.right === "") setCurrent("right");
    } else {
      setEmoji({ left: emoji.left, right: v });
      if (emoji.left === "") setCurrent("left");
    }
  };
  const handleRandom = (c: "left" | "right") => {
    const allowList = Object.keys(
      emojiData[c === "left" ? emoji.right : emoji.left] ?? {}
    );
    const randomEmoji = allowList[Math.floor(Math.random() * allowList.length)];

    randomEmoji &&
      setEmoji((v) => ({
        ...v,
        [c]: randomEmoji,
      }));
  };

  // to
  const copyImg = async (imgUrl: string) => {
    const response = await fetch(imgUrl, {
      cache: "force-cache",
    });
    const blob = await response.blob();

    try {
      const clipboardItem = new clipboard.ClipboardItem({ "image/png": blob });
      await clipboard.write([clipboardItem]);

      setToIcon(xlrplugIcon);
      const id = setTimeout(() => {
        setToIcon(copy);
        clearTimeout(id);
      }, 600);
      if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        alert("部分浏览器可能无法复制图片，建议使用电脑端复制!");
      }
    } catch {
      alert("浏览器暂不支持复制命令");
    }
  };
  const random = () => {
    const left =
      Object.keys(emojiData)[
        Math.floor(Math.random() * Object.keys(emojiData).length)
      ];
    const right = Object.keys(emojiData[left])[
      Math.floor(Math.random() * Object.keys(emojiData[left]).length)
    ];
    setEmoji({ left, right });
  };
  const reset = () => {
    setEmoji({
      left: "",
      right: "",
    });
  };

  return (
    <div className="flex select-none flex-col items-center">
      <div className="sticky top-4 z-10 inline-flex flex-col items-center justify-center rounded-lg border bg-gray-50 p-3 md:p-8">
        <GitHubInfo className="absolute right-3 top-3 w-4" />
        <div className="flex gap-x-2 md:gap-x-4">
          <Cell
            icon={random1dice}
            isCurrent={current === "left"}
            rawUrl={getRawUrl(emoji.left)}
            onClick={() => setCurrent("left")}
            iconClick={() => handleRandom("left")}
          />
          <div className="mt-4 text-3xl">+</div>
          <Cell
            icon={random1dice}
            isCurrent={current === "right"}
            rawUrl={getRawUrl(emoji.right)}
            onClick={() => setCurrent("right")}
            iconClick={() => handleRandom("right")}
          />
          <div className="mt-4 text-3xl">=</div>
          <Cell
            icon={toIcon}
            rawUrl={toUrl}
            iconClick={() => copyImg(toUrl)}
            onClick={() => copyImg(toUrl)}
          />
        </div>
        <div className="mt-3 flex items-center gap-x-2 md:gap-x-3">
          <div
            onClick={random}
            className="flex cursor-pointer items-center rounded-xl border px-3 py-1"
          >
            <Icon className="text-2xl md:text-3xl" icon={random2dice} />
            <span>随机</span>
          </div>
          <div
            className="flex cursor-pointer items-center rounded-xl border px-3 py-1"
            onClick={reset}
          >
            <Icon className="text-2xl md:text-3xl" icon={recordIcon} />
            全部清除
          </div>
        </div>
      </div>

      <div className="mt-10 grid w-full grid-cols-fill-12 gap-1 px-12 pb-12 md:gap-2">
        {knownSupportedEmoji.map((v) => (
          <img
            className={`z-0 h-12 w-12 ${
              allowList.includes(v)
                ? "cursor-pointer"
                : "cursor-not-allowed opacity-50"
            }`}
            key={v}
            onClick={() => allowList.includes(v) && handleClick(v)}
            src={`${`${rawUrl}/${v.split("-")[0].padStart(4, "0")}`}.svg`}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Kitchen;
