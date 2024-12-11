// 페이지뷰 이벤트 전송 함수
export const pageview = (url) => {
  if (typeof window.gtag === "undefined") return;

  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// 커스텀 이벤트 전송 함수
export const event = ({ action, category, label, value }) => {
  if (typeof window.gtag === "undefined") return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
