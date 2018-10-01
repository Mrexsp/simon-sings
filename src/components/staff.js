import React from "react";

export default class Staff extends React.Component {
  render() {
    if (!this.props.proStaff) {
      return (
        <svg width={this.props.width} height={this.props.height} viewBox="0 0 455 75" id="svg8">
          <defs id="defs2">
            <linearGradient
              x1={382.34}
              y1={489.14}
              gradientTransform="translate(-518.08 -281.8) scale(2.0779)"
              x2={490.53}
              gradientUnits="userSpaceOnUse"
              y2={333.89}
              id="linearGradient3019"
            >
              <stop offset={0} id="stop3015" stopOpacity={0.826} />
              <stop offset={1} id="stop3017" />
            </linearGradient>
          </defs>
          <g
            id="layer1"
            transform="translate(0 -222)"
            fill="#ececec"
            fillRule="evenodd"
          >
            <path
              id="rect4504"
              strokeWidth={0.269}
              d="M9.293 255.793h436v1.5h-436z"
            />
            <path
              id="rect4506"
              strokeWidth={0.269}
              d="M9.293 278.179h436v1.5h-436z"
            />
            <path
              id="rect4508"
              strokeWidth={0.269}
              d="M9.293 266.986h436v1.5h-436z"
            />
            <path id="rect4510" strokeWidth={0.269} d="M9.293 244.6h436v1.5h-436z" />
            <path
              id="rect4512"
              strokeWidth={0.269}
              d="M9.293 234.425h436v1.5h-436z"
            />
            <path
              id="rect4546"
              strokeWidth={0.064}
              d="M42.386 289.829h18.023v2.035H42.386z"
            />
          </g>
          <g id="layer2" transform="translate(0 21)" fill="#ececec">
            <g
              id="g4611"
              transform="matrix(.07855 0 0 .06393 .74 -15.265)"
              fillRule="evenodd"
              imageRendering="optimizeQuality"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
            >
              <g transform="matrix(.21599 0 0 .21546 -250.44 -1202.6)" id="Layer 1">
                <path
                  d="M2002 7851c-61 17-116 55-167 113-51 59-76 124-76 194 0 44 15 94 44 147 29 54 73 93 130 118 19 4 28 14 28 28 0 5-7 10-24 14-91-23-166-72-224-145-58-74-88-158-90-254 3-103 34-199 93-287 60-89 137-152 231-189l-69-355c-154 128-279 261-376 401-97 139-147 290-151 453 2 73 17 144 45 212 28 69 70 131 126 188 113 113 260 172 439 178 61-4 126-15 196-33zm72-10l156 769c154-62 231-197 231-403-9-69-29-131-63-186-33-56-77-100-133-132s-119-48-191-48zm-205-1040c33-20 71-55 112-104 41-48 81-105 119-169 39-65 70-131 93-198 23-66 34-129 34-187 0-25-2-50-7-72-4-36-15-64-34-83-19-18-43-28-73-28-60 0-114 37-162 111-37 64-68 140-90 226-23 87-36 173-38 260 5 99 21 180 46 244zm-63 58c-45-162-70-327-75-495 1-108 12-209 33-303 20-94 49-175 87-245 37-70 80-123 128-159 43-32 74-49 91-49 13 0 24 5 34 14s23 24 39 44c119 169 179 373 179 611 0 113-15 223-45 333-29 109-72 213-129 310-58 98-126 183-205 256l81 394c44-5 74-9 91-9 76 0 144 16 207 48s117 75 161 130c44 54 78 116 102 186 23 70 36 143 36 219 0 118-31 226-93 323s-155 168-280 214c8 49 22 120 43 211 20 92 35 165 45 219s14 106 14 157c0 79-19 149-57 211-39 62-91 110-157 144-65 34-137 51-215 51-110 0-206-31-288-92-82-62-126-145-130-251 3-47 14-91 34-133s47-76 82-102c34-27 75-41 122-44 39 0 76 11 111 32 34 22 62 51 83 88 20 37 31 78 31 122 0 59-20 109-60 150s-91 62-152 62h-23c39 60 103 91 192 91 45 0 91-10 137-28 47-19 86-44 119-76s55-66 64-102c17-41 25-98 25-169 0-48-5-96-14-144-9-47-23-110-42-188-19-77-33-137-41-178-60 15-122 23-187 23-109 0-212-22-309-67s-182-107-256-187c-73-80-130-170-171-272-40-101-61-207-62-317 4-102 23-200 59-292 36-93 82-181 139-263s116-157 177-224c62-66 143-151 245-254z"
                  id="path9"
                  stroke="#131516"
                  strokeWidth={53.022}
                />
              </g>
            </g>
            <g transform="matrix(.04337 0 0 .04916 38.603 11.104)" id="g891">
              <path
                id="path889"
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                fillRule="evenodd"
                stroke="#000"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 1 ? "#00C851" : "#e6e6e6")}
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g transform="matrix(.04337 0 0 .04916 418.099 -27.87)" id="g919">
              <path
                id="path917"
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                fillRule="evenodd"
                stroke="#000"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 8 ? "#00C851" : "#e6e6e6")}
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g id="g923" transform="matrix(.04337 0 0 .04916 364.672 -22.572)">
              <path
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                id="path921"
                fillRule="evenodd"
                stroke="#000"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 7 ? "#00C851" : "#e6e6e6")}
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g transform="matrix(.04337 0 0 .04916 312.287 -17.216)" id="g927">
              <path
                id="path925"
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                fillRule="evenodd"
                stroke="#000"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 6 ? "#00C851" : "#e6e6e6")}
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g id="g931" transform="matrix(.04337 0 0 .04916 258.298 -11.352)">
              <path
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                id="path929"
                fillRule="evenodd"
                stroke="#000"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 5 ? "#00C851" : "#e6e6e6")}
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g transform="matrix(.04337 0 0 .04916 202.706 -5.467)" id="g935">
              <path
                id="path933"
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                fillRule="evenodd"
                stroke="#000"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 4 ? "#00C851" : "#e6e6e6")}
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g id="g939" transform="matrix(.04337 0 0 .04916 148.183 .408)">
              <path
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                id="path937"
                fillRule="evenodd"
                stroke="#000"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 3 ? "#00C851" : "#e6e6e6")}
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g transform="matrix(.04337 0 0 .04916 92.591 5.235)" id="g943">
              <path
                id="path941"
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                fillRule="evenodd"
                stroke="#000"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 2 ? "#00C851" : "#e6e6e6")}
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      );
    } else {
      return (
        <svg width={this.props.width} height={this.props.height} viewBox="0 0 530 75" id="svg8">
          <defs id="defs2">
            <linearGradient
              x1={382.34}
              y1={489.14}
              gradientTransform="translate(-518.08 -281.8) scale(2.0779)"
              x2={490.53}
              gradientUnits="userSpaceOnUse"
              y2={333.89}
              id="linearGradient3019"
            >
              <stop offset={0} id="stop3015" stopOpacity={0.826} />
              <stop offset={1} id="stop3017" />
            </linearGradient>
          </defs>
          <g
            id="layer1"
            transform="translate(0 -222)"
            fill="#ececec"
            fillRule="evenodd"
          >
            <path
              id="rect4504"
              strokeWidth={0.281}
              d="M9.293 255.793h475v1.5h-475z"
            />
            <path
              id="rect4506"
              strokeWidth={0.281}
              d="M9.293 278.179h475v1.5h-475z"
            />
            <path
              id="rect4508"
              strokeWidth={0.281}
              d="M9.293 266.986h475v1.5h-475z"
            />
            <path id="rect4510" strokeWidth={0.281} d="M9.293 244.6h475v1.5h-475z" />
            <path
              id="rect4512"
              strokeWidth={0.281}
              d="M9.293 234.425h475v1.5h-475z"
            />
            <path
              id="rect4546"
              strokeWidth={0.064}
              d="M28.488 288.225h18.023v2.035H28.488z"
            />
          </g>
          <g id="layer2" transform="translate(0 21)" fill="#ececec">
            <g
              id="g4611"
              transform="matrix(.07855 0 0 .06393 .74 -15.265)"
              fillRule="evenodd"
              imageRendering="optimizeQuality"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
            >
              <g transform="matrix(.21599 0 0 .21546 -250.44 -1202.6)" id="Layer 1">
                <path
                  d="M2002 7851c-61 17-116 55-167 113-51 59-76 124-76 194 0 44 15 94 44 147 29 54 73 93 130 118 19 4 28 14 28 28 0 5-7 10-24 14-91-23-166-72-224-145-58-74-88-158-90-254 3-103 34-199 93-287 60-89 137-152 231-189l-69-355c-154 128-279 261-376 401-97 139-147 290-151 453 2 73 17 144 45 212 28 69 70 131 126 188 113 113 260 172 439 178 61-4 126-15 196-33zm72-10l156 769c154-62 231-197 231-403-9-69-29-131-63-186-33-56-77-100-133-132s-119-48-191-48zm-205-1040c33-20 71-55 112-104 41-48 81-105 119-169 39-65 70-131 93-198 23-66 34-129 34-187 0-25-2-50-7-72-4-36-15-64-34-83-19-18-43-28-73-28-60 0-114 37-162 111-37 64-68 140-90 226-23 87-36 173-38 260 5 99 21 180 46 244zm-63 58c-45-162-70-327-75-495 1-108 12-209 33-303 20-94 49-175 87-245 37-70 80-123 128-159 43-32 74-49 91-49 13 0 24 5 34 14s23 24 39 44c119 169 179 373 179 611 0 113-15 223-45 333-29 109-72 213-129 310-58 98-126 183-205 256l81 394c44-5 74-9 91-9 76 0 144 16 207 48s117 75 161 130c44 54 78 116 102 186 23 70 36 143 36 219 0 118-31 226-93 323s-155 168-280 214c8 49 22 120 43 211 20 92 35 165 45 219s14 106 14 157c0 79-19 149-57 211-39 62-91 110-157 144-65 34-137 51-215 51-110 0-206-31-288-92-82-62-126-145-130-251 3-47 14-91 34-133s47-76 82-102c34-27 75-41 122-44 39 0 76 11 111 32 34 22 62 51 83 88 20 37 31 78 31 122 0 59-20 109-60 150s-91 62-152 62h-23c39 60 103 91 192 91 45 0 91-10 137-28 47-19 86-44 119-76s55-66 64-102c17-41 25-98 25-169 0-48-5-96-14-144-9-47-23-110-42-188-19-77-33-137-41-178-60 15-122 23-187 23-109 0-212-22-309-67s-182-107-256-187c-73-80-130-170-171-272-40-101-61-207-62-317 4-102 23-200 59-292 36-93 82-181 139-263s116-157 177-224c62-66 143-151 245-254z"
                  id="path9"
                  stroke="#131516"
                  strokeWidth={53.022}
                />
              </g>
            </g>
            <g transform="matrix(.04337 0 0 .04916 24.705 9.5)" id="g891">
              <path
                id="path889"
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                fillRule="evenodd"
                stroke="#000"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 1 ? "#00C851" : "#e6e6e6")}
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g id="g1006">
              <text
                style={{
                  lineHeight: 32,
                  InkscapeFontSpecification: "'sans-serif, Normal'",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontFeatureSettings: "normal",
                  textAlign: "start"
                }}
                x={387.492}
                y={261.153}
                id="text952"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 13 ? "#00C851" : "#e6e6e6")}
                transform="matrix(.98179 0 0 1.01855 0 -243)"
                fontWeight={400}
                fontSize={15.787}
                fontFamily="sans-serif"
                letterSpacing={0}
                wordSpacing={0}
                strokeWidth={0.211}
              >
                <tspan id="tspan950" x={387.492} y={261.153}>
                  #
          </tspan>
              </text>
              <g id="g900" transform="matrix(.04337 0 0 .04916 386.561 -17.178)">
                <path
                  d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                  id="path917"
                  fillRule="evenodd"
                  stroke="#000"
                  fill={(this.props.isNoteActive && this.props.isNoteActiveId == 13 ? "#00C851" : "#e6e6e6")}
                  strokeWidth={5.924}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <g transform="matrix(.04337 0 0 .04916 348.101 -16.682)" id="g899">
              <path
                id="path925"
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                fillRule="evenodd"
                stroke="#000"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 6 ? "#00C851" : "#e6e6e6")}
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g id="g931" transform="matrix(.04337 0 0 .04916 268.482 -11.352)">
              <path
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                id="path929"
                fillRule="evenodd"
                stroke="#000"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 5 ? "#00C851" : "#e6e6e6")}
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g transform="matrix(.04337 0 0 .04916 194.18 -5.467)" id="g896">
              <path
                id="path933"
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                fillRule="evenodd"
                stroke="#000"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 4 ? "#00C851" : "#e6e6e6")}
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g transform="matrix(.04337 0 0 .04916 92.591 5.235)" id="g893">
              <path
                id="path941"
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                fillRule="evenodd"
                stroke="#000"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 2 ? "#00C851" : "#e6e6e6")}
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g> {/*where i last left off..*/}
            <g id="g974">
              <path
                id="rect887"
                transform="translate(0 -243)"
                fillRule="evenodd"
                strokeWidth={0.064}
                d="M65.371 287.156h18.023v2.035H65.371z"
              />
              <text
                transform="matrix(.98179 0 0 1.01855 0 -243)"
                id="text924"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 9 ? "#00C851" : "#e6e6e6")}
                y={287.393}
                x={54.286}
                style={{
                  lineHeight: 32,
                  InkscapeFontSpecification: "'sans-serif, Normal'",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontFeatureSettings: "normal",
                  textAlign: "start"
                }}
                fontWeight={400}
                fontSize={15.787}
                fontFamily="sans-serif"
                letterSpacing={0}
                wordSpacing={0}
                strokeWidth={0.211}
              >
                <tspan y={287.393} x={54.286} id="tspan922">
                  #
          </tspan>
              </text>
              <g transform="matrix(.04337 0 0 .04916 61.588 8.431)" id="g892">
                <path
                  id="path890"
                  d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                  fillRule="evenodd"
                  stroke="#000"
                  fill={(this.props.isNoteActive && this.props.isNoteActiveId == 9 ? "#00C851" : "#e6e6e6")}
                  strokeWidth={5.924}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <g id="g982">
              <text
                transform="matrix(.98179 0 0 1.01855 0 -243)"
                id="text964"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 10 ? "#00C851" : "#e6e6e6")}
                y={284.244}
                x={121.254}
                style={{
                  lineHeight: 32,
                  InkscapeFontSpecification: "'sans-serif, Normal'",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontFeatureSettings: "normal",
                  textAlign: "start"
                }}
                fontWeight={400}
                fontSize={15.787}
                fontFamily="sans-serif"
                letterSpacing={0}
                wordSpacing={0}
                strokeWidth={0.211}
              >
                <tspan y={284.244} x={121.254} id="tspan962">
                  #
          </tspan>
              </text>
              <g transform="matrix(.04337 0 0 .04916 125.733 5.235)" id="g894">
                <path
                  id="path894"
                  d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                  fillRule="evenodd"
                  stroke="#000"
                  fill={(this.props.isNoteActive && this.props.isNoteActiveId == 10 ? "#00C851" : "#e6e6e6")}
                  strokeWidth={5.924}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <g transform="matrix(.04337 0 0 .04916 158.874 .408)" id="g895">
              <path
                id="path898"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 3 ? "#00C851" : "#e6e6e6")}
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                fillRule="evenodd"
                stroke="#000"
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g id="g990">
              <text
                style={{
                  lineHeight: 32,
                  InkscapeFontSpecification: "'sans-serif, Normal'",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontFeatureSettings: "normal",
                  textAlign: "start"
                }}
                x={231.234}
                y={273.748}
                id="text960"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 11 ? "#00C851" : "#e6e6e6")}
                transform="matrix(.98179 0 0 1.01855 0 -243)"
                fontWeight={400}
                fontSize={15.787}
                fontFamily="sans-serif"
                letterSpacing={0}
                wordSpacing={0}
                strokeWidth={0.211}
              >
                <tspan id="tspan958" x={231.234} y={273.748}>
                  #
          </tspan>
              </text>
              <g transform="matrix(.04337 0 0 .04916 233.175 -5.467)" id="g897">
                <path
                  id="path902"
                  d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                  fillRule="evenodd"
                  stroke="#000"
                  fill={(this.props.isNoteActive && this.props.isNoteActiveId == 11 ? "#00C851" : "#e6e6e6")}
                  strokeWidth={5.924}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g> {/*Where i left off..*/}
            <g id="g998">
              <text
                transform="matrix(.98179 0 0 1.01855 0 -243)"
                id="text956"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 12 ? "#00C851" : "#e6e6e6")}
                y={267.451}
                x={308.552}
                style={{
                  lineHeight: 32,
                  InkscapeFontSpecification: "'sans-serif, Normal'",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontFeatureSettings: "normal",
                  textAlign: "start"
                }}
                fontWeight={400}
                fontSize={15.787}
                fontFamily="sans-serif"
                letterSpacing={0}
                wordSpacing={0}
                strokeWidth={0.211}
              >
                <tspan y={267.451} x={308.552} id="tspan954">
                  #
          </tspan>
              </text>
              <g id="g898" transform="matrix(.04337 0 0 .04916 309.08 -11.887)">
                <path
                  d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                  id="path906"
                  fillRule="evenodd"
                  stroke="#000"
                  fill={(this.props.isNoteActive && this.props.isNoteActiveId == 12 ? "#00C851" : "#e6e6e6")}
                  strokeWidth={5.924}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <g id="g912" transform="matrix(.04337 0 0 .04916 420.772 -22.524)">
              <path
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                id="path910"
                fillRule="evenodd"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 7 ? "#00C851" : "#e6e6e6")}
                stroke="#000"
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g id="g920" transform="matrix(.04337 0 0 .04916 454.447 -27.87)">
              <path
                d="M418.39 231.34c5.307 163.8 3.01 316.18.553 483.27-1.246 42.809-38.247 71.529-72.88 89.908-30.854 18.567-67.795 28.966-103.61 20.691-33.304-3.417-67.756-27.73-68.454-63.704-2.22-41.711 27.904-80.552 64.988-97.024 36.404-20.749 82.43-25.246 121.63-10.331 19.156 6.055 24.483-11.721 26.874-28.819 2.213-129.77 3.983-259.54 4.436-389.33.366-12.973 26.294-17.166 26.46-4.66z"
                id="path918"
                fillRule="evenodd"
                fill={(this.props.isNoteActive && this.props.isNoteActiveId == 8 ? "#00C851" : "#e6e6e6")}
                stroke="#000"
                strokeWidth={5.924}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      );
    }
  }
}