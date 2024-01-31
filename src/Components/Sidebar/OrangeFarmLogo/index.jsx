import { Box } from "@chakra-ui/react";
import React from "react";

export const Logo = () => {
  return (
    <Box
      width={"100%"}
      h={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-start"}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 21 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="21" height="22" fill="#DDDDDD" />
        <g id="Dashboard">
          <g clip-path="url(#clip0_0_1)">
            <rect
              x="-40"
              y="-41"
              width="1440"
              height="922"
              rx="32"
              fill="#F7F6F3"
            />
            <g id="Sidebar">
              <path
                d="M-24 -8.99999C-24 -17.8365 -16.8366 -25 -8 -25H240C248.837 -25 256 -17.8366 256 -9V849C256 857.837 248.837 865 240 865H-8C-16.8366 865 -24 857.837 -24 849V-8.99999Z"
                fill="white"
              />
              <g id="Brand">
                <g id="Logo">
                  <g id="Logomark" clip-path="url(#clip1_0_1)">
                    <ellipse
                      id="Ellipse 1"
                      cx="10.4"
                      cy="11"
                      rx="10.4"
                      ry="10.4959"
                      fill="#FFA500"
                    />
                    <ellipse
                      id="Ellipse 2"
                      opacity="0.6"
                      cx="7.06439"
                      cy="6.10078"
                      rx="7.06439"
                      ry="6.10078"
                      transform="matrix(0.834795 -0.550561 0.54352 0.839396 -3.0271 5.4007)"
                      fill="url(#paint0_radial_0_1)"
                    />
                    <path
                      id="Union"
                      d="M14.9211 1.71294C13.0945 3.02251 12.4305 5.0479 13.1 6.00003C13.7695 6.95216 15.2733 8.3096 17.1 7.00003C18.5716 5.94502 17.5545 4.69525 20.3793 0.616293C20.3793 0.616293 20.1319 0.585939 20.0095 0.570463C18.6045 0.392745 16.6014 0.508275 14.9211 1.71294Z"
                      fill="#008000"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_0_1"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(7.06439 6.10078) rotate(90) scale(6.10078 7.06439)"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </radialGradient>
          <clipPath id="clip0_0_1">
            <rect
              x="-40"
              y="-41"
              width="1440"
              height="922"
              rx="32"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip1_0_1">
            <rect
              width="20.8"
              height="20.9919"
              fill="white"
              transform="translate(0 0.504059)"
            />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
};
