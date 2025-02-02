"use client";

import { useState } from "react";
import { highlight } from "sugar-high";
import { LazyMotion, domAnimation, m } from "framer-motion";

const CodeBlock = ({ children, title = "code", ...props }) => {
  const code = highlight(children);

  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(code);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-lg border border-gray-200 bg-gray-50 px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <span className="size-4 rounded-full bg-gray-200" />
            <span className="size-4 rounded-full bg-gray-200" />
            <span className="size-4 rounded-full bg-gray-200" />
          </span>
          {/* {title && <p className="m-0 text-sm">{title}</p>} */}
        </div>
        <button
          className="rounded-lg text-xs text-black"
          disabled={copied}
          onClick={onCopy}
        >
          <LazyMotion features={domAnimation}>
            <m.span
              key={copied ? "copied" : "copy"}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              className="inline-flex w-14 items-center justify-center gap-0.5"
              transition={{ duration: 0.3 }}
            >
              {copied ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-0.5"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                  Copy
                </>
              )}
            </m.span>
          </LazyMotion>
        </button>
      </div>
      <div className=" overflow-x-auto">
        <div className="flex size-full flex-col overflow-x-auto overflow-y-hidden rounded-b-lg border-x border-b border-gray-200">
          <div className="horizontal-scroll-area p-3">
            <pre>
              <code dangerouslySetInnerHTML={{ __html: code }} {...props} />
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeBlock;
