"use client";

import Script from "next/script";

const INTERCOM_APP_ID =
  process.env.NEXT_PUBLIC_INTERCOM_APP_ID || "iev53uin";

/**
 * Loads the Intercom Web Messenger for live chat.
 * Uses the original Intercom launcher (default icon) and auto-opens the messenger when the page loads.
 * See: https://developers.intercom.com/installing-intercom/web/installation
 */
export default function IntercomMessenger() {
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
    </>
  );
}
