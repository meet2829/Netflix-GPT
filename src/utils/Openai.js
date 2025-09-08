import OpenAI from "openai";

const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true, 
});

export default openai;
