export default function index() {
  return (
    <div
      id="contact"
      className="bg-gray-800 flex flex-col items-center justify-center "
    >
      <h1 className="text-center  pt-[2rem] pb-[1rem] text-white font-semibold text-5xl ">
        Contact
      </h1>

      <span className="w-[170px] bg-white h-1  md:mb-[2rem]"> </span>
      <div className="w-[80%]   flex gap-[20px]  md:gap-[10%] item-center flex-wrap justify-center pb-10">
        <div className="flex flex-col items-center justify-center">
          <a
            href="https://www.linkedin.com/in/hakan-yusuf-beyli-358038230/"
            target="_blank"
          >
            <svg
              className="fill-white  md:w-[10rem] h-[10rem]  hover:fill-blue-400 transition-all duration-200"
              width="3rem"
              height="3rem"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <h1 className="text-xl mt-[-40px] md:mt-[0px] md:pt-[5px] md:text-3xl  text-white">
            LinkedIn
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a href="https://github.com/hakanyusuf1" target="_blank">
            <svg
              className="fill-white md:w-[10rem] h-[10rem]  hover:fill-gray-400 transition-all duration-200"
              width="3rem"
              height="3rem"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <h1 className="text-xl mt-[-40px] md:mt-[0px] md:pt-[5px] md:text-3xl  text-white">
            Github
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a href="https://www.instagram.com/yusufhakanbeyli/" target="_blank">
            {" "}
            <svg
              className="fill-white  md:w-[10rem] h-[10rem] hover:fill-blue-400 transition-all duration-200"
              width="3rem"
              height="3rem"
              viewBox="0 0 15 15"
            >
              <path
                fillRule="evenodd"
                d="M12.91 12.909c.326-.327.582-.72.749-1.151c.16-.414.27-.886.302-1.578c.032-.693.04-.915.04-2.68c0-1.765-.008-1.987-.04-2.68c-.032-.692-.142-1.164-.302-1.578a3.185 3.185 0 0 0-.75-1.151a3.187 3.187 0 0 0-1.151-.75c-.414-.16-.886-.27-1.578-.302C9.487 1.007 9.265 1 7.5 1c-1.765 0-1.987.007-2.68.04c-.692.03-1.164.14-1.578.301a3.2 3.2 0 0 0-1.151.75a3.2 3.2 0 0 0-.75 1.151c-.16.414-.27.886-.302 1.578C1.007 5.513 1 5.735 1 7.5c0 1.765.007 1.987.04 2.68c.03.692.14 1.164.301 1.578c.164.434.42.826.75 1.151c.325.33.718.586 1.151.75c.414.16.886.27 1.578.302c.693.031.915.039 2.68.039c1.765 0 1.987-.008 2.68-.04c.692-.03 1.164-.14 1.578-.301a3.323 3.323 0 0 0 1.151-.75ZM2 6.735v1.53c-.002.821-.002 1.034.02 1.5c.026.586.058 1.016.156 1.34c.094.312.199.63.543 1.012c.344.383.675.556 1.097.684c.423.127.954.154 1.415.175c.522.024.73.024 1.826.024H8.24c.842.001 1.054.002 1.526-.02c.585-.027 1.015-.059 1.34-.156c.311-.094.629-.2 1.011-.543c.383-.344.556-.676.684-1.098c.127-.422.155-.953.176-1.414C13 9.247 13 9.04 13 7.947v-.89c0-1.096 0-1.303-.023-1.826c-.021-.461-.049-.992-.176-1.414c-.127-.423-.3-.754-.684-1.098c-.383-.344-.7-.449-1.011-.543c-.325-.097-.755-.13-1.34-.156A27.29 27.29 0 0 0 8.24 2H7.057c-1.096 0-1.304 0-1.826.023c-.461.021-.992.049-1.415.176c-.422.128-.753.301-1.097.684c-.344.383-.45.7-.543 1.012c-.098.324-.13.754-.156 1.34c-.022.466-.022.679-.02 1.5ZM7.5 5.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5ZM4.25 7.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0Zm6.72-2.72a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <h1 className="text-xl mt-[-40px] md:mt-[0px] md:pt-[5px] md:text-3xl  text-white">
            Instagram
          </h1>
        </div>
        <div className="flex flex-col items-center  justify-center">
          <a href="https://twitter.com/BeyliHakan" target="_blank">
            <svg
              className="fill-white md:w-[10rem] h-[10rem]  hover:fill-blue-400 transition-all duration-200"
              width="3rem"
              height="3rem"
              viewBox="0 0 512 512"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </a>
          <h1 className="text-xl mt-[-40px] md:mt-[0px] md:pt-[5px] md:text-3xl  text-white">
            Twitter
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a href="mailto:hakanyusufbeyli@gmail.com">
            <svg
              className="fill-white md:w-[10rem] h-[10rem]  hover:fill-blue-400 transition-all duration-200"
              width="3rem"
              height="3rem"
              viewBox="0 0 512 512"
            >
              <path d="m473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72c-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 0 1-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4c57.73 0 112.45-22.62 151.45-63.66c38.34-40.4 58.17-96.3 58.17-154.9c0-24.67-2.48-39.32-2.59-39.96Z" />
            </svg>
          </a>

          <h1 className="text-xl mt-[-40px] md:mt-[0px] md:pt-[5px] md:text-3xl text-center text-white">
            Gmail
          </h1>
        </div>
      </div>
    </div>
  );
}
