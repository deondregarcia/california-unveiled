import React, { useState } from "react";
import { SVGProps } from "react";

import "./SoCalCountiesSVG.css";

// import images
import Kern from "../images/Kern/LavaTubeTrail.jpg";
import BAPS from "../images/SanBernardino/BAPS.jpg";
import { ImageDir } from "../images/ImageDirectory";

const SoCalCountiesSVG = ({
  // props,
  kernHover,
  setKernHover,
  sanLuisHover,
  setSanLuisHover,
  sanBarHover,
  setSanBarHover,
  venHover,
  setVenHover,
  losAngHover,
  setLosAngHover,
  sanBernHover,
  setSanBernHover,
  riverHover,
  setRiverHover,
  orangeHover,
  setOrangeHover,
  imperialHover,
  setImperialHover,
  sanDiegoHover,
  setSanDiegoHover,
  indexCounter,
}: {
  // props: SVGProps<SVGSVGElement>;
  kernHover: boolean;
  setKernHover: React.Dispatch<React.SetStateAction<boolean>>;
  sanLuisHover: boolean;
  setSanLuisHover: React.Dispatch<React.SetStateAction<boolean>>;
  sanBarHover: boolean;
  setSanBarHover: React.Dispatch<React.SetStateAction<boolean>>;
  venHover: boolean;
  setVenHover: React.Dispatch<React.SetStateAction<boolean>>;
  losAngHover: boolean;
  setLosAngHover: React.Dispatch<React.SetStateAction<boolean>>;
  sanBernHover: boolean;
  setSanBernHover: React.Dispatch<React.SetStateAction<boolean>>;
  riverHover: boolean;
  setRiverHover: React.Dispatch<React.SetStateAction<boolean>>;
  orangeHover: boolean;
  setOrangeHover: React.Dispatch<React.SetStateAction<boolean>>;
  imperialHover: boolean;
  setImperialHover: React.Dispatch<React.SetStateAction<boolean>>;
  sanDiegoHover: boolean;
  setSanDiegoHover: React.Dispatch<React.SetStateAction<boolean>>;
  indexCounter: number;
}) => {
  const calcIndex = (countyID: number) => {
    const modVal = indexCounter - (indexCounter % 10) + countyID;
    let modValFirstDigit = 0;

    if (modVal < 10) {
      modValFirstDigit = 0;
    } else if (10 < modVal && modVal < 20) {
      modValFirstDigit = 1;
    } else {
      modValFirstDigit = 2;
    }

    if (indexCounter >= modVal) {
      return (modValFirstDigit + 1) % 3;
    } else {
      return modValFirstDigit;
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="100%"
      height="100%"
      // original width/height vals below, keeping just in case
      // width={806.368}
      // height={372.983}
      viewBox="0 0 213.352 98.685"
      className="counties-svg"
      // {...props}
    >
      {/* images must be defined as pattern tags, then used in 'fill' as url(#id) */}
      <defs>
        <pattern id="kern-image" width={1} height={1}>
          <image
            href={ImageDir.Kern[calcIndex(0)]}
            x="0"
            y="-25%"
            width={80}
            height={70}
          />
        </pattern>
        <pattern id="SanLuis-image" width={1} height={1}>
          <image
            href={ImageDir.SanLuis[calcIndex(1)]}
            x="0"
            y="-15%"
            width={55}
            height={55}
          />
        </pattern>
        <pattern id="SanBar-image" width={1} height={1}>
          <image
            href={ImageDir.SanBar[calcIndex(2)]}
            x="0"
            y="-20%"
            width={60}
            height={60}
          />
        </pattern>
        <pattern id="Ven-image" width={1} height={1}>
          <image
            href={ImageDir.Ven[calcIndex(3)]}
            x="-9%"
            y="-9%"
            width={45}
            height={45}
          />
        </pattern>
        <pattern id="LosAng-image" width={1} height={1}>
          <image
            href={ImageDir.LosAng[calcIndex(5)]}
            x="0"
            y="-15%"
            width={58}
            height={63}
          />
        </pattern>
        <pattern id="SanBern-image" width={1} height={1}>
          <image
            href={ImageDir.SanBern[calcIndex(9)]}
            x="-5%"
            y="-40%"
            width={130}
            height={130}
          />
        </pattern>
        <pattern id="River-image" width={1} height={1}>
          <image
            href={ImageDir.River[calcIndex(8)]}
            x="0"
            y="-15%"
            width={95}
            height={70}
          />
        </pattern>
        <pattern id="Orange-image" width={1} height={1}>
          <image
            href={ImageDir.Orange[calcIndex(4)]}
            x="-4%"
            y="-9%"
            width={30}
            height={30}
          />
        </pattern>
        <pattern id="Imperial-image" width={1} height={1}>
          <image
            href={ImageDir.Imperial[calcIndex(6)]}
            x="0"
            y="-15%"
            width={50}
            height={50}
          />
        </pattern>
        <pattern id="SanDiego-image" width={1} height={1}>
          <image
            href={ImageDir.SanDiego[calcIndex(7)]}
            x="0"
            y="-10%"
            width={50}
            height={50}
          />
        </pattern>
      </defs>

      {/* Kern County */}
      <path
        className={kernHover ? "kern-yes-hover" : "kern-no-hover"}
        onMouseEnter={() => setKernHover(true)}
        onMouseLeave={() => setKernHover(false)}
        d="M107.084 126.598H71.496s-.557.929-1.114.929h-1.98v-.557h-8.17v-1.3h-.805v-.371h-3.342v-.62l-2.385.084v-5.26h-2.662l.186-2.724-3.59.248v-2.29h-3.961v-2.848h-1.919v-2.228h-3.466l-2.537-2.537v-2.662h-3.343s-.365 5.592.656 6.52c1.022.928 3.002 2.6 3.683 2.661.68.062 3.837 1.022 3.868 2.26.031 1.237-1.237 2.846.31 3.527 1.547.681 2.476-.03 2.692 1.238.217 1.269 1.238 2.6 2.816 2.662 1.579.061 1.424 1.454 1.424 1.454s-.093 2.042 2.847.99c2.94-1.052 1.207 3.373 1.207 3.373s-.929 1.022.897.99c1.826-.03 4.797 1.64 5.756 1.64.96 0 44.578 1.63 46.942-.296 2.363-1.926 1.578-4.883 1.578-4.883z"
        style={{
          fill: "#666",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: ".350119px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
      <path
        className={kernHover ? "kern-yes-hover" : "kern-no-hover"}
        onMouseEnter={() => setKernHover(true)}
        onMouseLeave={() => setKernHover(false)}
        d="M53.74 124.77v-5.261h-2.662l.186-2.723-3.59.247v-2.29h-3.961v-2.847h-1.919v-2.228h-3.466l-2.537-2.538v-2.661h-3.343v-5.261h74.057v1.464s-1.733 1.485-.061 1.609c1.67.124.68 1.733.68 1.733v22.59H71.536s-.557.93-1.114.93h-1.98v-.558h-8.17v-1.3h-.805v-.371h-3.342v-.619z"
        style={{
          fill: "url(#kern-image)",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: "1px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
      {/* San Luis Obispo County */}
      <path
        className={sanLuisHover ? "sanLuis-yes-hover" : "sanLuis-no-hover"}
        onMouseEnter={() => setSanLuisHover(true)}
        onMouseLeave={() => setSanLuisHover(false)}
        d="M53.46 116.958c-2.582.482-3.676-.13-3.72-.7-.043-.569-.13-.569-.962-.525-.832.044-.963-.175-.963-.175s.481-.656-2.845-.569c-3.326.088-3.239-.919-3.239-.919.044-1.97-2.538-1.182-2.538-1.182s.088-.481-1.4-.612c-1.488-.132-2.67-1.27-3.327-1.445-.656-.175-2.625 1.664-2.844 2.101-.22.438.656.57-2.495.7-3.15.132-.875 1.4-.7 2.276.175.875-1.4 2.1-.963 1.05.438-1.05-4.201-3.37-4.683-2.538-.481.832-4.157.875-4.551.744 0 0 1.166-4.353-.258-4.787-1.423-.433-1.857-2.228-2.909-.928-1.052 1.3-1.114.557-2.166-.31-1.052-.866-1.547-1.547-1.547-1.547s-1.362-.743-.805-1.238 1.485-4.518.124-4.146c-1.362.37-2.847-.31-4.085-1.733-1.238-1.424-2.662-3.528-2.662-3.528s.124-1.3-1.795-.929C.21 96.39-.78 94.78-.78 94.78s-.62-.557-.434-1.794c.186-1.238-1.35-1.54-1.35-1.54-1.041 1.461-.058 4.816-.058 4.816s1.61.372 1.424 1.61c-.186 1.238.433 1.795.433 1.795s.99 1.609 2.909 1.237c1.919-.37 1.795.929 1.795.929s1.016 2.359 2.836 1.865c1.85-.502.842 4.905 2.203 4.534 1.362-.372 2.14 2.513 1.583 3.009-.557.495.805 1.237.805 1.237s-.249-.37.803.497c1.053.867.98 2.02 2.56.529 2.099-1.98-1.85 4.565-.308 4.804 2.147.332 2.711 11.955 2.711 11.955 9.47-1.315 7.66-6.845 8.141-7.676.482-.832 3.214.483 2.776 1.534-.437 1.05 1.74-1.073.394-3.327-.491-.822-2.45-2.144.7-2.275 3.152-.132 2.276-.263 2.495-.7.219-.438 2.188-2.276 2.845-2.101.656.175 1.838 1.313 3.326 1.444s1.4.613 1.4.613 2.583-.788 2.539 1.181c0 0-.088 1.007 3.238.92 3.327-.088 2.845.568 2.845.568s.132.22.963.175c.832-.043.92-.043.963.525.044.57 1.138 1.182 3.72.7z"
        style={{
          fill: "#666",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: ".350119px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(3.221 -89.914)"
      />
      <path
        className={sanLuisHover ? "sanLuis-yes-hover" : "sanLuis-no-hover"}
        onMouseEnter={() => setSanLuisHover(true)}
        onMouseLeave={() => setSanLuisHover(false)}
        d="M53.46 116.999c-2.582.481-3.676-.131-3.72-.7-.043-.57-.131-.57-.962-.526-.832.044-.963-.175-.963-.175s.481-.656-2.845-.569c-3.326.088-3.239-.919-3.239-.919.044-1.969-2.538-1.181-2.538-1.181s.088-.482-1.4-.613-2.67-1.27-3.327-1.444c-.656-.175-2.626 1.663-2.844 2.1-.22.438.656.57-2.495.7-3.151.132-.875 1.401-.7 2.277.175.875-1.4 2.1-.963 1.05.438-1.05-4.201-3.37-4.683-2.538-.481.831-4.158.875-4.551.744 0 0 1.166-4.354-.258-4.787-1.424-.434-1.857-2.228-2.909-.929-1.052 1.3-1.114.557-2.166-.31-1.052-.866-1.548-1.546-1.548-1.546s-1.361-.743-.804-1.238c.557-.495 1.485-4.518.124-4.147-1.362.371-2.847-.31-4.085-1.733-1.238-1.424-2.662-3.528-2.662-3.528s.124-1.3-1.795-.928C.21 96.429-.782 94.82-.782 94.82s-.618-.557-.433-1.795c.186-1.238-1.423-1.61-1.423-1.61H31.34v5.261h3.342v2.662l2.538 2.538h3.466v2.228h1.918v2.847h3.962v2.29l3.59-.248-.186 2.723h2.661v5.261"
        style={{
          fill: "url(#SanLuis-image)",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: "1px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(3.221 -89.914)"
      />
      {/* Santa Barbara County */}
      <path
        className={sanBarHover ? "sanBar-yes-hover" : "sanBar-no-hover"}
        onMouseEnter={() => setSanBarHover(true)}
        onMouseLeave={() => setSanBarHover(false)}
        d="M53.751 139.687s-2.144.044-2.494-1.007c-.35-1.05-4.377-.612-4.333 0 .044.613-1.576 1.007-1.97 0-.393-1.006-1.312-.656-1.444-.087-.13.569-2.494.919-2.45 0 .043-.92-5.821-2.407-9.585-1.62-3.764.788-6.784 1.532-7.134.963-.35-.569-1.619-4.157-5.142-3.15.635 1.269-2.867 5.733.328 4.857 3.195-.875 4.464 2.714 4.814 3.283.35.569 3.37-.175 7.134-.963 3.764-.788 9.628.7 9.585 1.62-.044.918 2.32.568 2.45 0 .132-.57 1.05-.92 1.445.087.393 1.006 2.013.612 1.969 0-.044-.613 3.983-1.05 4.333 0 .35 1.05 2.494 1.006 2.494 1.006l.963-1.05-.7-.525.613-.438v-3.715z"
        style={{
          fill: "#666",
          stroke: "#000",
          strokeWidth: ".350119px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
      <path
        className={sanBarHover ? "sanBar-yes-hover" : "sanBar-no-hover"}
        onMouseEnter={() => setSanBarHover(true)}
        onMouseLeave={() => setSanBarHover(false)}
        d="M54.626 124.75v12.999l-.613.437.7.525-.963 1.05s-2.144.045-2.494-1.006c-.35-1.05-4.377-.612-4.333 0 .044.613-1.576 1.007-1.97 0-.393-1.006-1.312-.656-1.444-.087-.131.569-2.494.919-2.45 0 .043-.92-5.821-2.407-9.585-1.62-3.764.788-6.784 1.532-7.134.963-.35-.569-1.62-4.157-4.814-3.282-3.195.875 2.013-3.282 1.05-4.42-.962-1.138-1.488-.92-.175-3.151 1.313-2.232-1.531-2.67-1.531-2.67s.13-1.663.525-1.532c.394.131 4.07.088 4.551-.744.482-.831 5.12 1.488 4.683 2.539-.437 1.05 1.138-.176.963-1.05-.175-.876-2.45-2.145.7-2.277 3.151-.13 2.276-.262 2.495-.7.219-.438 2.188-2.276 2.845-2.1.656.174 1.838 1.312 3.326 1.444 1.488.13 1.4.612 1.4.612s2.582-.787 2.539 1.182c0 0-.088 1.007 3.238.919 3.326-.087 2.845.569 2.845.569s.131.219.963.175c.831-.044.919-.044.963.525.043.57 1.137 1.182 3.72.7z"
        style={{
          fill: "url(#SanBar-image)",
          stroke: "#000",
          strokeWidth: "1px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
      {/* Ventura County */}
      <path
        className={venHover ? "ven-yes-hover" : "ven-no-hover"}
        onMouseEnter={() => setVenHover(true)}
        onMouseLeave={() => setVenHover(false)}
        d="M78.299 143.269h-1.095v1.838h-2.932l-4.245 3.37v.788s-2.932-.263-4.158-1.095c-1.225-.831-2.057-.437-2.057-.437s-.962-.044-1.75-.744-3.72-2.057-3.37-3.326c.35-1.27-4.922-3.886-4.922-3.886l.914.521v2.355l-.612.438.7.525-1.023 1.017s5.247 2.6 4.896 3.87c-.35 1.269 2.583 2.625 3.37 3.326.788.7 1.751.744 1.751.744s.831-.394 2.057.437c1.225.832 4.158 1.094 4.158 1.094v-.787l4.245-3.37h2.932v-1.838h1.094z"
        style={{
          fill: "#666",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: ".350119px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
      <path
        className={venHover ? "ven-yes-hover" : "ven-no-hover"}
        onMouseEnter={() => setVenHover(true)}
        onMouseLeave={() => setVenHover(false)}
        d="m53.74 139.755.963-1.05-.7-.526.612-.438.013-13.003 1.566-.089v.62h3.342v.37h.804v1.3h8.17v.557h1.98l7.812 14.06v1.707h-1.094v1.838h-2.932l-4.245 3.37v.788s-2.932-.263-4.158-1.094c-1.225-.832-2.057-.438-2.057-.438s-.963-.044-1.75-.744c-.788-.7-3.72-2.057-3.37-3.326.35-1.27-4.956-3.902-4.956-3.902z"
        style={{
          fill: "url(#Ven-image)",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: "1px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
      {/* Los Angeles County */}
      <path
        className={losAngHover ? "losAng-yes-hover" : "losAng-no-hover"}
        onMouseEnter={() => setLosAngHover(true)}
        onMouseLeave={() => setLosAngHover(false)}
        d="M107.094 141.908c.088.612-.306 1.006-.306 1.006l-1.816 5.274s-.22.547-.613.197c-.394-.35-.35.503-.963.788-.613.284-.691.735-.366.951.324.217.064.944.064.944l-4.846.18.03 1.176-2.908 2.26-1.238 2.196s-1.645-1.622-1.49-.539c.155 1.084-.155.526-.928.898-.774.371-.805-.093-1.362.495s-.774.774-1.455.619c-.68-.155-1.794-1.021-2.352-.99-.557.03-.835.34-1.268-.217-.434-.557-.372-.774-.031-.96.34-.185.897-.587.742-.928-.154-.34-.402-1.361-2.011-3.682-1.61-2.321-1.375-2.06-1.622-2.232-.265-.184-.142-.275-1.875-.275s-5.54.31-6.56 1.362c-1.022 1.052-.496-.465-1.084-.65-.588-.186-2.804-.08-2.841-.536.064.393-1.039 3.109.011 4.916v-.027c.036.455 2.253.35 2.84.535.589.186.062 1.702 1.084.65 1.02-1.052 4.827-1.362 6.56-1.362 1.733 0 1.61.092 1.875.275.247.172.013-.089 1.622 2.232 1.61 2.321 1.857 3.342 2.012 3.683.155.34-.403.742-.743.928-.34.186-.402.402.031.96.433.556.712.247 1.269.216.557-.031 1.671.836 2.352.99.68.155.897-.03 1.454-.619.557-.588.588-.123 1.362-.495.774-.371 1.083.186.928-.897-.154-1.083 1.49.539 1.49.539l1.238-2.197 2.91-2.26-.032-1.176 4.842-.169s.256-.717-.069-.934c-.325-.216-.246-.667.367-.951.612-.285.569-1.138.962-.788.394.35.613-.197.613-.197l1.816-5.274s.394-.394.307-1.006c0 0 .661-5.027-.001-4.91z"
        style={{
          fill: "#666",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: ".350119px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
      <path
        className={losAngHover ? "losAng-yes-hover" : "losAng-no-hover"}
        onMouseEnter={() => setLosAngHover(true)}
        onMouseLeave={() => setLosAngHover(false)}
        d="M70.013 149.258v-.788l4.245-3.37h2.932v-1.838h1.095l.007.06v-1.706l-7.812-14.093c.557-.034 1.114-.962 1.114-.962l34.046-.001-.016 8.27c0 .832.044.875.657.875.612 0 .372.307.416 2.408.043 2.1.328 3.194.415 3.807.088.613-.306 1.007-.306 1.007l-1.816 5.273s-.22.547-.613.197c-.394-.35-.35.504-.963.788-.613.285-.691.735-.366.952.325.216.064.944.064.944l-4.846.18.031 1.175-2.909 2.26-1.238 2.197s-1.645-1.622-1.49-.54c.155 1.084-.155.527-.928.898-.774.372-.805-.093-1.362.495s-.774.774-1.454.62c-.681-.155-1.795-1.022-2.352-.991-.557.031-.836.34-1.27-.217-.432-.557-.37-.773-.03-.959.34-.186.897-.588.743-.928-.155-.34-.403-1.362-2.012-3.683-1.61-2.321-1.375-2.06-1.622-2.232-.265-.183-.142-.275-1.875-.275s-5.54.31-6.56 1.362c-1.022 1.052-.496-.464-1.084-.65-.588-.186-2.804-.08-2.841-.535z"
        style={{
          fill: "url(#LosAng-image)",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: "1px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
      {/* San Bernardino County */}
      <path
        className={sanBernHover ? "sanBern-yes-hover" : "sanBern-no-hover"}
        onMouseEnter={() => setSanBernHover(true)}
        onMouseLeave={() => setSanBernHover(false)}
        d="M103.052 150.146c.325.216.145.857.145.857s3.342 1.702 4.423 2.507l1.023-.946v-.92h1.313v-1.225l1.663-.7v-1.181h4.858s.147.3 1.88.27c1.733-.032 2.63-.187 2.693.278.062.464 7.736.093 7.736.093s.076-1.123 1.127-1.123h46.96v-3.02l25.523-.196c.288-.003.872-1.38 1.616-1.292.744.088 1.97-.525 2.407-1.663.438-1.138 1.67-.436 2.101-.744.613-.437-.087-1.532 1.094-2.276 0 0 .507-.472.507-.658 0-.186.464-.588.68 1.61.217 2.196.774 9.562-.401 9.933-1.176.371-.372 1.919-1.486 1.98-1.114.062-2.476 1.238-2.166 1.486.31.248 0 .619-.62.743-.618.123-3.032-.743-3.156 1.423-.123 2.166 1.3 2.476.62 3.838-.682 1.361-6.297-2.207-9.565-2.153-3.822.062-8.49 1.705-11.102 1.745-4.114.064-6.854-1.714-7.164-1.714-5.402 2.646-4.986-2.516-8.717 3.444-5.075 1.857-5.045-.208-5.911-.827-.867-.62-4.045-4.767-9.078-2.227-5.023 2.534-3.578 1.581-9.273.467-5.694-1.114-20.951-6.286-24.603-3.13-6.397 3.073-8.545 3.278-12.131 3.776.062-1.981-4.382-3.665-2.996-8.455z"
        style={{
          fill: "#666",
          stroke: "#000",
          strokeWidth: ".350119px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
      <path
        className={sanBernHover ? "sanBern-yes-hover" : "sanBern-no-hover"}
        onMouseEnter={() => setSanBernHover(true)}
        onMouseLeave={() => setSanBernHover(false)}
        d="M176.882 145.028v3.02h-46.96c-1.05 0-1.126 1.122-1.126 1.122s-7.675.371-7.737-.093c-.062-.464-.96-.31-2.692-.279-1.733.031-1.88-.27-1.88-.27h-4.858v1.182l-1.663.7v1.226h-1.313v.92l-1.023.945c-1.082-.805-4.424-2.507-4.424-2.507s.18-.64-.144-.857c-.325-.217-.247-.667.366-.952.613-.284.57-1.138.963-.788.394.35.613-.197.613-.197l1.816-5.273s.394-.394.306-1.007c-.087-.613-.372-1.707-.415-3.807-.044-2.101.196-2.408-.416-2.408-.613 0-.657-.043-.657-.875v-8.271l1.342-.011.034-22.6s.99-1.61-.68-1.734c-1.672-.124.061-1.61.061-1.61v-1.463h53.468l.434-1.288h3.807l29.399 20.393s.847.435.54 1.792c-.306 1.356-.306 1.575.35 1.882.657.306.92.393.92.919 0 .525 1.313 2.844 2.757 3.107 1.444.262 1.532.525 1.488 1.094-.044.569 1.269 1.313 1.05 2.32-.219 1.006 1.62.919 1.707 2.013.087 1.094.263 1.138-.088 2.1-.35.963 2.364-.393 2.583.394.218.788 1.488.526 1.4 1.313-.087.788 1.138.57 1.138.57s1.4-.613 1.576.568c.175 1.182.48.875.48.875s1.401.92.22 1.664c-1.182.744-.482 1.838-1.094 2.275-.43.308-1.663-.394-2.101.744-.438 1.138-1.663 1.75-2.407 1.663-.744-.087-1.329 1.29-1.617 1.292z"
        style={{
          fill: "url(#SanBern-image)",
          stroke: "#000",
          strokeWidth: "1px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
      {/* Riverside */}
      <path
        className={riverHover ? "river-yes-hover" : "river-no-hover"}
        onMouseEnter={() => setRiverHover(true)}
        onMouseLeave={() => setRiverHover(false)}
        d="M112.59 161.41c.386-.635 1.933-2.863 1.933-2.863m-6.9-5.044c1.02.711 1.33 1.795 1.701 2.228.372.433.749.233 1.58.233.832 0 .438 1.575.438 1.575l1.4.176 1.781.832s-2.444 3.466-2.29 3.62c.155.155.148.76.148.76h3.528v.495l3.342.557.805.743h35.465l43.23-.443c.624-2.932 2.878-4.114 3.272-4.77 0 0 .703 6.752-.697 7.059-1.4.306 1.619 3.063.13 3.939-1.487.875-1.437 1.246-2.012 2.1l-1.62 2.407s-2.582-3.632-4.157-2.494c-1.576 1.138-9.716 2.013-10.854-.35-1.138-2.364-2.976-5.427-5.34-3.414-2.363 2.013-15.93 5.252-25.47 4.552-9.541-.7-11.117 1.138-14.355 2.538-3.239 1.4-6.04-7.965-7.878-6.215-1.838 1.751-.438 4.027-2.801 2.889-2.363-1.138-2.626-2.538-4.552-1.488-1.925 1.05-4.026 1.138-4.201-1.313-.175-2.45 0-2.889-3.151-2.538-3.151.35-6.915.35-6.215-1.576.7-1.926 1.05-4.026-.525-4.727-1.575-.7-1.23-6.874-.703-7.375z"
        style={{
          fill: "#666",
          stroke: "#000",
          strokeWidth: ".350119px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
      <path
        className={riverHover ? "river-yes-hover" : "river-no-hover"}
        onMouseEnter={() => setRiverHover(true)}
        onMouseLeave={() => setRiverHover(false)}
        d="M112.497 162.954c-.124-.743-.248-.897.139-1.532.387-.634 1.934-2.862 1.934-2.862m84.228 5.732-43.23.443h-35.465l-.805-.743-3.342-.557v-.495h-3.528s.007-.605-.148-.76c-.155-.154 2.29-3.62 2.29-3.62l-1.78-.833-1.401-.175s.394-1.575-.438-1.575c-.832 0-1.208.2-1.58-.233-.371-.434-.68-1.517-1.702-2.229l.962-1.04v-.919h1.313v-1.225l1.663-.7v-1.182h4.858s.148.3 1.88.27c1.734-.031 2.631-.186 2.693.278.062.464 7.737.093 7.737.093s.076-1.122 1.126-1.122h46.96v-3.02h25.734l.262 1.75s-1.05 1.926-2.013 1.926c-.963 0-1.006.832-.394.963.613.131 1.16.482.722.482-.437 0-.372.109-.065.35.306.24.328.306.022.306-.307 0-.613.306-.438.394.175.087.263.175.219.372-.044.197.897.853.897 2.035 0 1.182.306 1.05.656 1.182.35.13.263.525-.13.7-.395.175-.964-.088-.745.875.219.963.263 1.488.131 1.97-.13.481.744.612.35 1.269-.393.656-2.647 1.838-3.27 4.77z"
        style={{
          fill: "url(#River-image)",
          stroke: "#000",
          strokeWidth: "1px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
      {/* Orange */}
      <path
        className={orangeHover ? "orange-yes-hover" : "orange-no-hover"}
        onMouseEnter={() => setOrangeHover(true)}
        onMouseLeave={() => setOrangeHover(false)}
        d="M94.065 156.78s2.136 2.537 3.28 2.97c1.146.433 7.304 1.888 7.861 3.714.557 1.825.898 1.609 1.547 1.547.65-.062.372-.62 1.795.835 1.424 1.455 1.517 1.455 1.764 1.3.248-.155.31-.356.325-.634.016-.279-.278-1.687.743-1.64 1.021.046 1.284-1.223 1.222-1.908-.158 1.59.467 5.123-.453 4.116-.919-1.006-1.619 1.97-1.619 1.97l-.039 4.362s-1.192.483-1.235-.918c-.044-1.4-.788-5.558-2.758-5.339-1.97.219-1.444-.744-2.275-1.313-.832-.569-1.445 1.27-2.976.306-1.532-.962-5.821-2.275-6.74-5.777-.92-3.5-.442-3.592-.442-3.592"
        style={{
          fill: "#666",
          stroke: "#000",
          strokeWidth: ".350119px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
      <path
        className={orangeHover ? "orange-yes-hover" : "orange-no-hover"}
        onMouseEnter={() => setOrangeHover(true)}
        onMouseLeave={() => setOrangeHover(false)}
        d="M112.319 162.163c-.155-.155 2.29-3.62 2.29-3.62l-1.781-.833-1.4-.175s.393-1.576-.438-1.576c-.832 0-1.209.2-1.58-.233-.372-.433-.681-1.516-1.702-2.228-1.022-.712-4.364-2.414-4.364-2.414l-5.168.093.031 1.176-2.909 2.26-1.238 2.196s2.136 2.538 3.28 2.971c1.146.433 7.304 1.888 7.861 3.714.557 1.826.897 1.609 1.547 1.547.65-.062.372-.619 1.795.836 1.424 1.454 1.517 1.454 1.764 1.3.248-.155.31-.356.325-.635.016-.279-.278-1.687.743-1.64 1.021.046 1.284-1.223 1.16-1.965-.123-.743-.247-.898.14-1.532.386-.635 1.934-2.863 1.934-2.863"
        style={{
          fill: "url(#Orange-image)",
          stroke: "#000",
          strokeWidth: "1px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
      <g
        style={{
          fill: "none",
        }}
      >
        {/* Imperial County */}
        <path
          className={imperialHover ? "imperial-yes-hover" : "imperial-no-hover"}
          onMouseEnter={() => setImperialHover(true)}
          onMouseLeave={() => setImperialHover(false)}
          d="M211.032 177.491c.657.832.394 1.62-.35 1.926-.744.306-1.357.7-.875 1.313.481.612-.744.744-.744.744s-4.508 1.706-6.171.7c-1.663-1.007-3.267.612-3.267.612l-37.434 4.158s.162 6.25-1.173 6.229c-1.335-.022-1.422.635-.24.722 1.18.088 8.096-1.488 9.146-3.239 1.05-1.75 3.939-.875 3.939-.875s2.45.263 2.713 1.488c.263 1.226 10.591 1.05 11.467-.437.875-1.488 8.84.875 8.052 3.063-.787 2.188 3.94 1.663 6.215-.613 2.276-2.275 2.276-3.5 4.727-3.326 2.45.175 3.02-1.181 3.413-2.757.394-1.576 1.995-9.613.582-9.708z"
          style={{
            fill: "#666",
            stroke: "#000",
            strokeWidth: ".350119px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
          transform="translate(-5.19 -97.149)"
        />
        <path
          className={imperialHover ? "imperial-yes-hover" : "imperial-no-hover"}
          onMouseEnter={() => setImperialHover(true)}
          onMouseLeave={() => setImperialHover(false)}
          d="M162.859 164.221v10.955l-.68.31v11.45l37.434-4.157s1.603-1.62 3.266-.613c1.663 1.007 6.17-.7 6.17-.7s1.226-.131.745-.744c-.482-.613.131-1.007.875-1.313.744-.306 1.007-1.094.35-1.926-.656-.831-.787-1.313-.437-1.444.35-.131.525-.481.569-.744.043-.263-1.094.306-1.05-.306.043-.613-.132-2.145-1.095-2.145s-1.269.175-1.269.175-1.488.372-1.838-.197c-.35-.569-.47-.722-.646-.426-.175.295-1.061 1.236-.886.186.175-1.05-.788-.526-1.225-.963-.438-.438.919-1.4.919-1.4s.441-.252.38-1.335c-.063-1.083.247-1.362.247-1.362s.433-.464-.093-.495c-.526-.031-.975-.557-.526-.882.448-.325.557-.31.526-.79-.031-.479-.712-.293-.65-.556.062-.263.882-.48 1.052-.186.17.294.96-.835.96-.835z"
          style={{
            fill: "url(#Imperial-image)",
            stroke: "#000",
            strokeWidth: "1px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
          transform="translate(-5.19 -97.149)"
        />
      </g>
      {/* San Diego County */}
      <path
        className={sanDiegoHover ? "sanDiego-yes-hover" : "sanDiego-no-hover"}
        onMouseEnter={() => setSanDiegoHover(true)}
        onMouseLeave={() => setSanDiegoHover(false)}
        d="M154.366 193.111c-.613 1.138-1.488.307-5.558.963-4.07.657.218-1.444-1.357-1.62-1.576-.174-4.158.438-6.609 2.32-2.45 1.882-9.19 1.75-10.547.394-1.357-1.356-8.491.773-8.491.773-.99.062-2.104.619-1.424-2.29.124-1.919-1.794-2.414-2.475-1.238-.681 1.176-.743-4.085-1.733-5.57-.99-1.486 1.238 1.3.866-3.404-.371-4.704-7.365-9.656-6.684-10.027v-6.261c-.665.276 9.176 6.651 9.547 11.355.371 4.704-1.857 1.919-.866 3.404.99 1.485 1.052 6.746 1.733 5.57.68-1.176 2.6-.68 2.475 1.238-.68 2.91.434 2.352 1.424 2.29l30.245-3.588s.066 4.553-.546 5.691z"
        style={{
          fill: "#666",
          stroke: "#000",
          strokeWidth: ".350119px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
      <path
        className={sanDiegoHover ? "sanDiego-yes-hover" : "sanDiego-no-hover"}
        onMouseEnter={() => setSanDiegoHover(true)}
        onMouseLeave={() => setSanDiegoHover(false)}
        d="m124.659 191.044 30.265-3.59v-11.45l.681-.309V164.74h-35.464l-.805-.743-3.342-.557v-.495h-3.528s.31 1.98-1.114 1.98c-1.424 0-.31 1.796-.99 2.167-.681.371 9.16 6.746 9.53 11.45.372 4.704-1.856 1.919-.866 3.404.99 1.486 1.053 6.746 1.733 5.57.681-1.175 2.6-.68 2.476 1.238-.68 2.91.433 2.352 1.424 2.29z"
        style={{
          fill: "url(#SanDiego-image)",
          stroke: "#000",
          strokeWidth: "1px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(2.052 -97.678)"
      />
    </svg>
  );
};
export default SoCalCountiesSVG;
