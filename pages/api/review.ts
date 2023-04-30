import { Configuration, OpenAIApi } from "openai";


export default async function (req, res) {

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: req.body.value,
    temperature: 0,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: null,
  });



  return res.status(200).json({result : response.data.choices})

}



