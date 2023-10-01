import * as React from "react"
import { SVGProps } from "react"
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
  </svg>
)
export default ArrowLeft