import React from "react";

const Footer = () => {
  return (
    <>
      <div class="fixed bottom-0 h-16 w-1/2 bg-purple-100 p-8 rounded-t-2xl shadow-lg flex justify-between items-center">
        <div className="relative h-16 w-full flex flex-row justify-between items-center">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              clip-rule="evenodd"
              viewBox="0 0 32 32"
              id="home"
              className="w-7 h-7 md:w-9 md:h-9"
            >
              <path
                d="M21 29h5a1 1 0 0 0 .992-.876l2-16a1 1 0 0 0-.437-.956l-12-8a1 1 0 0 0-1.11 0l-12 8a1 1 0 0 0-.437.956l2 16A1 1 0 0 0 6 29h5v-9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v9Z"
                fill="#b6a0f3"
                class="color000000 svgShape"
              ></path>
              <path
                d="M19 29h-6v-9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9Z"
                fill="#b6a0f3"
                class="color000000 svgShape"
              ></path>
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              id="calendar"
              className="w-7 h-7 md:w-9 md:h-9"
            >
              <path
                fill="#b2b1ff"
                d="M7 6a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-.999 1H7zm10 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-.999 1H17z"
              ></path>
              <path
                fill="#5f33e1"
                d="M19 4h-1v1a1 1 0 0 1-2 0V4H8v1a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v2h20V7a3 3 0 0 0-3-3z"
              ></path>
              <circle cx="7" cy="13" r="1" fill="#6563ff"></circle>
              <circle cx="7" cy="17" r="1" fill="#6563ff"></circle>
              <circle cx="12" cy="13" r="1" fill="#6563ff"></circle>
              <circle cx="12" cy="17" r="1" fill="#6563ff"></circle>
              <circle cx="17" cy="13" r="1" fill="#6563ff"></circle>
              <circle cx="17" cy="17" r="1" fill="#6563ff"></circle>
              <path
                fill="#b6a0f3"
                d="M2 9v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9H2zm5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              ></path>
            </svg>
          </button>

          <button class="bg-white rounded-full p-[3px] -translate-y-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Plus"
              width="60"
              height="60"
              className="w-12 h-12 md:w-16 md:h-16"
            >
              <path
                fill="#5f33e1"
                fill-rule="evenodd"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM11 8a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8Z"
                clip-rule="evenodd"
                class="color000000 svgShape"
              ></path>
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              id="Document"
              className="w-7 h-7 md:w-9 md:h-9"
            >
              <path fill="none" d="M0 0h48v48H0z"></path>
              <path
                d="M28 4H12C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V16L28 4zm4 32H16v-4h16v4zm0-8H16v-4h16v4zm-6-10V7l11 11H26z"
                fill="#b6a0f3"
                class="color000000 svgShape"
              ></path>
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="user"
              className="w-7 h-7 md:w-9 md:h-9"
            >
              <g fill="#000000" class="color000000 svgShape">
                <path
                  fill="#7142f4"
                  d="M13,12.25H11A6.75769,6.75769,0,0,0,4.25,19v1A2.7528,2.7528,0,0,0,7,22.75H17A2.7528,2.7528,0,0,0,19.75,20V19A6.75769,6.75769,0,0,0,13,12.25Z"
                  class="color4285f4 svgShape"
                ></path>
                <circle
                  cx="12"
                  cy="6.5"
                  r="5.25"
                  fill="#b6a0f3"
                  class="colorafcbf9 svgShape"
                ></circle>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
