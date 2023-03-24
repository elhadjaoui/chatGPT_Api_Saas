const express = require('express');
const bodyParser = require('body-parser')

const cors = require('cors');
const app = express();
const port = 3005;


app.use(bodyParser.json());
app.use(cors());



const OpenAI  = require('openai')
const { Configuration, OpenAIApi }   = OpenAI

const configuration = new Configuration({
    organization: "org-wuIGUPjxNzG76JH0FndlxOSb",
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

app.post('/', async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: req.body.message,
        max_tokens: 100,
        temperature: 1,
      });

      
      if (response.data.choices)
      {
        res.json({message : response.data.choices[0].text});
      }
    // res.json({message:"helloooooo"})
});

app.listen(port, () => console.log(`app listening on port ${port}!`))