import { PipeI } from "@baseai/core";

const pipeSummarizer = (): PipeI => ({
  apiKey: process.env.XAI_API_KEY,
  name: "summarizer",
  description: "A pipe that summarizes content and makes it less wordy'",
  status: "public",
  model: "xai:grok-beta",
  stream: true,
  json: false,
  store: true,
  moderate: true,
  top_p: 1,
  max_tokens: 1000,
  temperature: 0.7,
  presence_penalty: 1,
  frequency_penalty: 1,
  stop: [],
  tool_choice: "auto",
  parallel_tool_calls: true,
  messages: [
    {
      role: "system",
      content: `You are a content summarizer. You will summarize content without loosing context into less wordy to the point version.
`,
    },
  ],
  variables: [],
  memory: [],
  tools: [],
});

export default pipeSummarizer;
