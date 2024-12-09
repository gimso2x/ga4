import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

export default function Tt1() {
  useEffect(() => {
    sendGAEvent("event", {
      page_title: "search",
      event_category: "search",
    });
  }, []);

  return (
    <>
      <button
        onClick={() =>
          sendGAEvent("event", "search_keyword_recent_con", {
            event_category: "search",
          })
        }
      >
        Test1
        <pre>
          {
            ("event",
            "search_keyword_recent_con",
            {
              event_category: "search",
            })
          }
        </pre>
      </button>
      <button>Test1</button>
      <button>Test1</button>
      <button>Test1</button>
      <button>Test1</button>
    </>
  );
}
