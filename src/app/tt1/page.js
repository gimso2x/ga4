"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

export default function Tt1() {
  useEffect(() => {
    sendGAEvent("event", "tt1", {
      page_title: "search",
      event_category: "search",
      debug_mode: true,
    });
  }, []);

  return (
    <>
      <button
        onClick={() =>
          sendGAEvent("event", "search_keyword_recent_con", {
            event_category: "search",
            debug_mode: true,
          })
        }
      >
        Test1
        <pre>
          {`${`
sendGAEvent("event", "search_keyword_recent_con", {
  event_category: "search",
});
    `}`}
        </pre>
      </button>
      <button
        onClick={() =>
          sendGAEvent("event", {
            event_category: "search",
            debug_mode: true,
          })
        }
      >
        Test1123123
      </button>
      <button>Test1</button>
      <button>Test1</button>
      <button>Test1</button>
    </>
  );
}
