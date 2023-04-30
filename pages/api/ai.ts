import { LLMChain } from 'langchain/chains';
import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';

export default async function (req, res) {
  const model = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0.9,
  });

  const template = 'What is a good name for a company that makes {product}?';
  const prompt = new PromptTemplate({ template, inputVariables: ['product'] });
  const chainA = new LLMChain({ llm: model, prompt });
  const resA = await chainA.call({ product: 'colorful socks' });

  // The result is an object with a `text` property.
  console.log({ resA });

  return res.status(200).json(resA.text);
}
