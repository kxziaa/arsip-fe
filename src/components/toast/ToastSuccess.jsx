import React from "react";

const ToastSuccess = ({ message }) => {
  return (
    <div
      id="toast-success"
      className="fixed px-4 py-3 font-semibold text-white transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-md shadow-md top-10 left-1/2"
      role="alert"
    >
      <div className="flex items-center space-x-4">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span class="sr-only">Sukses</span>
        </div>
        <div>
          <div className="text-sm font-normal ms-3">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default ToastSuccess;
