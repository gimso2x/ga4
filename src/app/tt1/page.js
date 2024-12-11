"use client";

import { useEffect } from "react";
import { event, pageview } from "./util";

export default function Tt1() {
  useEffect(() => {
    pageview("tt1");
    event({
      action: "page_view",
      category: "Engagement",
      label: "Sample Button",
      page_title: "페이지 타이틀 테스트",
    });
  }, []);

  return (
    <>
      <button
        onClick={
          () =>
            event({
              action: "button_click",
              category: "Engagement",
              label: "Sample Button",
            })
          // sendGAEvent("event", "search_keyword_recent_con", {
          //   event_category: "search",
          //   debug_mode: true,
          // })
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
          event({
            action: "button_click2",
            category: "Engagement2",
            label: "Sample Button2",
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
