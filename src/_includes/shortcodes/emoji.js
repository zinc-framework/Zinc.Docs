/** An accessible emoji shortcode */
export default function emojiShortcode(emoji, label) {
    let attributes = [
      "role=img",
      label ? `aria-label=${label}` : "aria-hidden=true",
    ];
    return `<span ${attributes.join(" ")}>${emoji}</span>`;
  }