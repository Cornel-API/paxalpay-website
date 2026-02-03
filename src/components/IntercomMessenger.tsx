"use client";

import Script from "next/script";
import { useCallback } from "react";

const INTERCOM_APP_ID =
  process.env.NEXT_PUBLIC_INTERCOM_APP_ID || "iev53uin";

declare global {
  interface Window {
    Intercom?: (action: string) => void;
  }
}

/**
 * Loads the Intercom Web Messenger for live chat.
 * Uses a large custom launcher and auto-opens the messenger when the page loads.
 * See: https://developers.intercom.com/installing-intercom/web/installation
 */
export default function IntercomMessenger() {
  const openMessenger = useCallback(() => {
    if (typeof window !== "undefined" && window.Intercom) {
      window.Intercom("show");
    }
  }, []);

  return (
    <>
      <Script
        id="intercom-settings"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.intercomSettings = {
              api_base: "https://api-iam.intercom.io",
              app_id: "${INTERCOM_APP_ID}",
              hide_default_launcher: true,
              alignment: "right",
              horizontal_padding: 20,
              vertical_padding: 20
            };
          `,
        }}
      />
      <Script
        id="intercom-loader"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var w = window;
              var ic = w.Intercom;
              if (typeof ic === "function") {
                ic('update', w.intercomSettings);
              } else {
                var d = document;
                var i = function() { i.c(arguments); };
                i.q = [];
                i.c = function(args) { i.q.push(args); };
                w.Intercom = i;
                var l = function() {
                  var s = d.createElement('script');
                  s.type = 'text/javascript';
                  s.async = true;
                  s.src = 'https://widget.intercom.io/widget/' + "${INTERCOM_APP_ID}";
                  s.onload = function() {
                    setTimeout(function() {
                      if (w.Intercom) w.Intercom('show');
                    }, 400);
                  };
                  var x = d.getElementsByTagName('script')[0];
                  x.parentNode.insertBefore(s, x);
                };
                if (document.readyState === 'complete') {
                  l();
                } else if (w.attachEvent) {
                  w.attachEvent('onload', l);
                } else {
                  w.addEventListener('load', l, false);
                }
              }
            })();
          `,
        }}
      />
      {/* Large custom launcher — visible when messenger is closed */}
      <button
        type="button"
        onClick={openMessenger}
        className="fixed bottom-6 right-6 z-[2147483000] flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#1f8ded] text-white shadow-lg transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1f8ded] focus:ring-offset-2"
        aria-label="Open chat"
      >
        <svg
          className="h-8 w-8 md:h-10 md:w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>
    </>
  );
}
