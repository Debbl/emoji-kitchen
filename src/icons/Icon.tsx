import type { SVGProps } from 'react'

export type IIcon = (props: SVGProps<SVGSVGElement>) => React.JSX.Element

interface IProps extends SVGProps<SVGSVGElement> {
  icon: IIcon
}

function IconRandom1dice(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 256 256'
      {...props}
    >
      <g fill='currentColor' fillRule='evenodd'>
        <path d='M47.895 88.097c.001-4.416 3.064-9.837 6.854-12.117l66.257-39.858c3.785-2.277 9.915-2.277 13.707.008l66.28 39.934c3.786 2.28 6.853 7.703 6.852 12.138l-.028 79.603c-.001 4.423-3.069 9.865-6.848 12.154l-66.4 40.205c-3.781 2.29-9.903 2.289-13.69-.01l-66.167-40.185c-3.78-2.295-6.842-7.733-6.84-12.151l.023-79.72zm13.936-6.474l65.834 36.759l62.766-36.278l-62.872-36.918L61.83 81.623zM57.585 93.52c0 1.628-1.065 71.86-1.065 71.86c-.034 2.206 1.467 4.917 3.367 6.064l61.612 37.182l.567-77.413s-64.48-39.322-64.48-37.693zm76.107 114.938l60.912-38.66c2.332-1.48 4.223-4.915 4.223-7.679V93.125l-65.135 37.513v77.82z'></path>
        <path d='M77.76 132.287c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm32 21c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm-32 16c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm32 21c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm78.238-78.052c-4.783-2.762-11.122-.735-14.16 4.526c-3.037 5.261-1.623 11.765 3.16 14.526c4.783 2.762 11.123.735 14.16-4.526c3.038-5.261 1.623-11.765-3.16-14.526zm-16.238 29c-4.782-2.762-11.122-.735-14.16 4.526c-3.037 5.261-1.622 11.765 3.16 14.526c4.783 2.762 11.123.735 14.16-4.526c3.038-5.261 1.623-11.765-3.16-14.526zm-17 28c-4.782-2.762-11.122-.735-14.16 4.526c-3.037 5.261-1.622 11.765 3.16 14.526c4.783 2.762 11.123.735 14.16-4.526c3.038-5.261 1.623-11.765-3.16-14.526zM128.5 69c-6.351 0-11.5 4.925-11.5 11s5.149 11 11.5 11S140 86.075 140 80s-5.149-11-11.5-11z'></path>
      </g>
    </svg>
  )
}
function IconRandom2dice(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 256 256'
      {...props}
    >
      <g fill='currentColor' fillRule='evenodd'>
        <path d='M24.898 100.907a7.97 7.97 0 0 1 8.035-7.935l80.011.623c4.419.034 8.209 3.635 8.466 8.042l.517 8.868l26.68-42.392a7.776 7.776 0 0 1 10.94-2.349l66.996 44.369a8.03 8.03 0 0 1 2.275 11.113l-43.766 66.506c-2.432 3.695-7.447 4.8-11.197 2.47l-51.928-32.265v26.49c0 4.419-3.583 8-7.993 8H32.498a7.949 7.949 0 0 1-7.959-7.998l.36-83.542zm11.828 6.694l-.189 71.811l74.127.073l-.035-29.78l-5.954-4.119c-1.809-1.25-2.375-3.81-1.257-5.71L111 127l-.466-19.749l-73.808.35zM156.483 79L118 138.79l60.965 38.32l37.612-58.539L156.483 79z'></path>
        <circle cx='138' cy='135' r='8'></circle>
        <circle cx='165' cy='130' r='8'></circle>
        <circle cx='193' cy='125' r='8'></circle>
        <circle cx='50' cy='124' r='8'></circle>
        <circle cx='73' cy='145' r='8'></circle>
        <circle cx='95' cy='123' r='8'></circle>
        <circle cx='51' cy='165' r='8'></circle>
        <circle cx='95' cy='165' r='8'></circle>
      </g>
    </svg>
  )
}
function IconFadXlrplug(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 256 256'
      {...props}
    >
      <g fill='currentColor' fillRule='evenodd'>
        <path d='M128 220c-50.81 0-92-41.19-92-92c0-34.045 18.492-63.77 45.98-79.68c26.471 0 69.646.367 92.67.367C201.79 64.685 220 94.216 220 128c0 50.81-41.19 92-92 92zm0-15c42.526 0 77-34.474 77-77c0-26.467-13.353-49.815-33.69-63.675c-21.734 0-65.127-.18-86.353-.18C64.47 77.98 51 101.418 51 128c0 42.526 34.474 77 77 77z'></path>
        <circle cx='128' cy='176' r='16'></circle>
        <circle cx='176' cy='134' r='16'></circle>
        <circle cx='80' cy='135' r='16'></circle>
      </g>
    </svg>
  )
}
function IconFadDuplicate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 256 256'
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M47.81 91.725c0-8.328 6.539-15.315 15.568-15.33c9.03-.016 14.863.015 14.863.015s-.388-8.9-.388-15.978c0-7.08 6.227-14.165 15.262-14.165s92.802-.26 101.297.37c8.495.63 15.256 5.973 15.256 14.567c0 8.594-.054 93.807-.054 101.7c0 7.892-7.08 15.063-15.858 15.162c-8.778.1-14.727-.1-14.727-.1s.323 9.97.323 16.094c0 6.123-7.12 15.016-15.474 15.016s-93.117.542-101.205.542c-8.088 0-15.552-7.116-15.207-15.987c.345-8.871.345-93.58.345-101.906zm46.06-28.487l-.068 98.164c0 1.096.894 1.99 1.999 1.984l95.555-.51a2.007 2.007 0 0 0 1.998-2.01l-.064-97.283a2.01 2.01 0 0 0-2.01-2.007l-95.4-.326a1.99 1.99 0 0 0-2.01 1.988zM63.268 95.795l.916 96.246a2.007 2.007 0 0 0 2.02 1.982l94.125-.715a3.976 3.976 0 0 0 3.953-4.026l-.137-11.137s-62.877.578-71.054.578s-15.438-7.74-15.438-16.45c0-8.71.588-68.7.588-68.7c.01-1.1-.874-1.99-1.976-1.975l-9.027.13a4.025 4.025 0 0 0-3.97 4.067z'
      ></path>
    </svg>
  )
}
function IconFadRecord(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 256 256'
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M128 209c-44.735 0-81-36.265-81-81s36.265-81 81-81s81 36.265 81 81s-36.265 81-81 81zm.5-33c26.51 0 48-21.49 48-48s-21.49-48-48-48s-48 21.49-48 48s21.49 48 48 48z'
      ></path>
    </svg>
  )
}
function IconCarbonLogoGithub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 32 32'
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z'
      ></path>
    </svg>
  )
}

const Icon = ({ icon: IconComponent, ...props }: IProps) => {
  return <IconComponent {...props} />
}

export default Icon
export {
  Icon,
  IconCarbonLogoGithub,
  IconFadDuplicate,
  IconFadRecord,
  IconFadXlrplug,
  IconRandom1dice,
  IconRandom2dice,
}
