import React, { useEffect, useRef } from "react";
import "./Dragon.css";

export function Dragon (){
  const screenRef = useRef(null);

  useEffect(() => {
    const screen = screenRef.current;
    const xmlns = "http://www.w3.org/2000/svg";
    const xlinkns = "http://www.w3.org/1999/xlink";

    let width = window.innerWidth;
    let height = window.innerHeight;
    const pointer = { x: width / 2, y: height / 2 };
    const elems = [];
    const N = 40;
    let rad = 0;
    const radm = Math.min(pointer.x, pointer.y) - 20;
    let frm = Math.random();

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
    };

    const prepend = (use, i) => {
      const elem = document.createElementNS(xmlns, "use");
      elems[i].use = elem;
      elem.setAttributeNS(xlinkns, "xlink:href", `#${use}`);
      screen.prepend(elem);
    };

    for (let i = 0; i < N; i++) {
      elems[i] = { use: null, x: width / 2, y: 0 };
    }

    for (let i = 1; i < N; i++) {
      if (i === 1) prepend("Cabeza", i);
      else if (i === 8 || i === 14) prepend("Aletas", i);
      else prepend("Espina", i);
    }

    const run = () => {
      requestAnimationFrame(run);
      let e = elems[0];
      const ax = (Math.cos(3 * frm) * rad * width) / height;
      const ay = (Math.sin(4 * frm) * rad * height) / width;
      e.x += (ax + pointer.x - e.x) / 10;
      e.y += (ay + pointer.y - e.y) / 10;
      for (let i = 1; i < N; i++) {
        let e = elems[i];
        let ep = elems[i - 1];
        const a = Math.atan2(e.y - ep.y, e.x - ep.x);
        e.x += (ep.x - e.x + (Math.cos(a) * (100 - i)) / 5) / 4;
        e.y += (ep.y - e.y + (Math.sin(a) * (100 - i)) / 5) / 4;
        const s = (162 + 4 * (1 - i)) / 50;
        e.use.setAttributeNS(
          null,
          "transform",
          `translate(${(ep.x + e.x) / 2},${(ep.y + e.y) / 2}) rotate(${
            (180 / Math.PI) * a
          }) translate(0,0) scale(${s},${s})`
        );
      }
      if (rad < radm) rad++;
      frm += 0.003;
      if (rad > 60) {
        pointer.x += (width / 2 - pointer.x) * 0.05;
        pointer.y += (height / 2 - pointer.y) * 0.05;
      }
    };

    window.addEventListener("pointermove", (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      rad = 0;
    });

    window.addEventListener("resize", resize);

    run();

    return () => {
      window.removeEventListener("pointermove", null);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <svg ref={screenRef} id="screen">
        <defs>
    <g id="Cabeza" transform="matrix(1, 0, 0, 1, 0, 0)">
        <path
        style={{ fill: "#FFFFFF", fillOpacity: 1 }}
        d="M-28.9,-1.1L-28.55 -1.95Q-28.1 -3.1 -27.25 -2.95L-26.7 -2.95Q-27.7 -1.65 -28.9 -1.1M-18.35,-1.8Q-15.1 -10.3 -9.6 -6.05Q-15.1 -6.2 -18.35 -1.8M-18.35,1.1Q-15.1 5.45 -9.6 5.35Q-15.1 9.55 -18.35 1.1M-26.7,2.2L-27.25 2.25Q-28.1 2.4 -28.55 1.2L-28.9 0.35Q-27.7 0.9 -26.7 2.2"
        />
        <path
        style={{ fill: "#000000", fillOpacity: 1 }}
        d="M-21.05,-8.25Q-13.6 -15.95 -1.3 -12.1Q-7.85 -8.5 -5.85 -4.35Q-2.3 -4.85 10.5 0.15Q0 4.35 -5.85 3.65Q-7.85 7.75 -1.25 12.45Q-13.6 15.2 -21.05 7.5Q-29.55 4.05 -30.2 -0.35Q-29.55 -4.8 -21.05 -8.25M-26.7,-2.95L-27.25 -2.95Q-28.1 -3.1 -28.55 -1.95L-28.9 -1.1Q-27.7 -1.65 -26.7 -2.95M-9.6,-6.05Q-15.1 -10.3 -18.35 -1.8Q-15.1 -6.2 -9.6 -6.05M-9.6,5.35Q-15.1 5.45 -18.35 1.1Q-15.1 9.55 -9.6 5.35M-28.9,0.35L-28.55 1.2Q-28.1 2.4 -27.25 2.25L-26.7 2.2Q-27.7 0.9 -28.9 0.35"
        />
    </g>
    <g id="Aletas" transform="matrix(1, 0, 0, 1, 0, 0)">
  <linearGradient
    id="LinearGradID_1"
    gradientUnits="userSpaceOnUse"
    gradientTransform="matrix(0.0936, 0, 0, 0.1888, -20.55, 0)"
    spreadMethod="pad"
    x1="-819.2"
    y1="0"
    x2="819.2"
    y2="0"
  >
    <stop offset="0" style={{ stopColor: "#CCCCCC", stopOpacity: 1 }} />
    <stop offset="1" style={{ stopColor: "#000000", stopOpacity: 1 }} />
  </linearGradient>
  <path
    style={{ fill: "url(#LinearGradID_1)" }}
    d="M29.75,-36.85Q-17.75 -61.45 -42.05 -40.95L-45.35 -38.35L-53.7 -41.15L-51.15 -44.85Q-34.85 -68.4 21 -57.8Q-32.2 -72.1 -50.25 -50Q-53.85 -45.65 -56.05 -41.95L-64.7 -43.35L-60.6 -50.3Q-45.9 -75.55 5.1 -79.35Q-2.2 -79.8 -9.45 -79.15Q-16.2 -78.55 -22.85 -77.15Q-29.85 -75.65 -36.5 -73Q-43.05 -70.4 -48.8 -66.85Q-54.55 -63.35 -56.8 -60.3L-60.5 -55.4Q-62.95 -52.1 -67 -43.55L-70.55 -43.55L-76.35 -42.95Q-74.6 -49.1 -71.85 -54.85Q-68.9 -61.25 -64.8 -67.1Q-60.8 -73 -55.45 -77.55Q-49.9 -82.35 -43.65 -85.85L-30.6 -92.7Q-24.05 -95.95 -17 -98.25Q-63.75 -86.35 -73.65 -57.1Q-75.75 -50.75 -77.45 -42.75Q-82.9 -41.75 -88 -39.65Q-87.65 -46.65 -86.3 -53.05Q-79.8 -89.8 -36.65 -117.2Q-80.65 -94.5 -87.55 -59.55Q-88.65 -54.15 -88.95 -39.4L-89.8 -38.85L-92.7 -37.6Q-93.75 -44.35 -94.1 -51.15Q-94.4 -58.2 -93.25 -65.1Q-92.15 -72.5 -90.05 -79.65Q-88.05 -86.55 -85 -93Q-82.1 -99.3 -78.45 -105.15Q-74.6 -111.35 -70.25 -117.25Q-65.95 -123.1 -61.1 -128.55Q-70.3 -119.35 -77.9 -108.7Q-86 -97.3 -90.8 -84.05Q-95.8 -70.5 -96 -56.15Q-96.1 -46 -94.05 -36.05L-93.25 -31.55Q-93.5 -35.65 -92.35 -36Q-79.85 -42 -66.6 -40.45Q-52.45 -38.85 -39.2 -33.25Q-28.3 -29.9 -21.25 -24.15Q-17.8 -23.3 -8.6 -15.6Q-12.1 -20.75 -16.75 -24.5Q-24.55 -30.7 -34.25 -34.05L-42.55 -37Q-38.9 -41.25 -31.5 -43.25Q-24.05 -45.3 -16.2 -46.3Q-8.35 -47.35 -1 -46Q5.95 -44.75 12.75 -42.85Q19.85 -40.9 29.75 -36.85"
  />
</g>


    <g id="Espina" transform="matrix(1, 0, 0, 1, 0, 0)">
        <linearGradient
        id="LinearGradID_2"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.0229492, 0, 0, -0.0152893, 0, 0.05)"
        spreadMethod="pad"
        x1="-819.2"
        y1="0"
        x2="819.2"
        y2="0"
        >
        <stop offset="0" style={{ stopColor: "#CCCCCC", stopOpacity: 1 }} />
        <stop offset="1" style={{ stopColor: "#333333", stopOpacity: 1 }} />
        </linearGradient>
        <path
        style={{ fill: "url(#LinearGradID_2)" }}
        d="M-18.8,0Q-17.85 -5.7 -12.3 -9.6Q-11.2 -5.35 -6.5 -8.25L-6.45 -8.2L-6.2 -8.3Q1.25 -16.25 6.65 -12.4Q0.05 -12.55 0 -5.95Q2.7 -2.4 7.75 -4.1Q18 -1.45 18.8 0L-18.8 0"
        />
        <linearGradient
        id="LinearGradID_3"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.0229492, 0, 0, 0.0152893, 0, -0.05)"
        spreadMethod="pad"
        x1="-819.2"
        y1="0"
        x2="819.2"
        y2="0"
        >
        <stop offset="0" style={{ stopColor: "#CCCCCC", stopOpacity: 1 }} />
        <stop offset="1" style={{ stopColor: "#333333", stopOpacity: 1 }} />
        </linearGradient>
        <path
        style={{ fill: "url(#LinearGradID_3)" }}
        d="M18.8,0Q18 1.45 7.75 4.1Q2.7 2.4 0 5.95Q0.05 12.55 6.65 12.4Q1.25 16.25 -6.2 8.35Q-6.35 8.25 -6.45 8.25L-6.5 8.25Q-11.2 5.35 -12.3 9.6Q-17.85 5.7 -18.8 0L18.8 0"
        />
    </g>
    </defs>

    </svg>
  );
};
