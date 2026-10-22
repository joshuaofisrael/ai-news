const TAG_LABELS = {
  ai: "AI",
  api: "API",
  eu: "EU",
  llm: "LLM",
  llms: "LLMs",
  openai: "OpenAI",
  uk: "UK",
  us: "US",
};

export function tagLabel(slug) {
  return String(slug || "")
    .split("-")
    .map((part) => TAG_LABELS[part] || (part ? part.charAt(0).toUpperCase() + part.slice(1) : ""))
    .join(" ");
}
