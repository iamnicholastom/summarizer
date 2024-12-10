import { PipeI } from "@baseai/core";
import getCurrentWeatherTool from "../tools/get-current-weather";
import memoryChatWithDocs from "../memory/chat-with-docs";

const pipeSummarizer = (): PipeI => ({
  apiKey: process.env.OPENAI_API_KEY,
  name: "summarizer",
  description: "A pipe that summarizes content and makes it less wordy'",
  status: "public",
  model: "openai:gpt-4o-mini",
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
  parallel_tool_calls: false,
  messages: [
    {
      role: "system",
      content: `You are a content summarizer. You will summarize content without loosing context into less wordy to the point version.`,
    },
    {
      role: "system",
      name: "rag",
      content:
        "Below is some CONTEXT for you to answer the questions. ONLY answer from the CONTEXT. CONTEXT consists of multiple information chunks. Each chunk has a source mentioned at the end.\n\nFor each piece of response you provide, cite the source in brackets like so: [1].\n\nAt the end of the answer, always list each source with its corresponding number and provide the document name. like so [1] Filename.doc.\n\nIf you don't know the answer, just say that you don't know. Ask for more context and better questions if needed.",
    },
  ],
  variables: [],
  memory: [memoryChatWithDocs()],
  tools: [getCurrentWeatherTool()],
});

export default pipeSummarizer;
