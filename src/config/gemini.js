// To run this code, install the required packages:
// npm install @google/genai mime

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai"

const MODEL_NAME = "gemini-2.5-flash"
const API_KEY = 'AIzaSyCx_iLvfiUmlJjTcZIt0ouLlDdIqN4bVkE'

async function runChat(prompt) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({model: MODEL_NAME});

    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
    };
    
    const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  }, ]

    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
        ],
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
    return response.text()
}

export default runChat;









/*


const { GoogleGenAI } = require('@google/genai');
const mime = require('mime');
const fs = require('fs');

function saveBinaryFile(fileName, content) {
  fs.writeFile(fileName, content, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing file ${fileName}:`, err);
      return;
    }
    console.log(`File ${fileName} saved to file system.`);
  });
}

async function main() {
  const ai = new GoogleGenAI({
    apiKey: 'AIzaSyCx_iLvfiUmlJjTcZIt0ouLlDdIqN4bVkE', // Make sure this is set in your environment
  });

  const config = {
    responseModalities: ['IMAGE', 'TEXT'],
  };

  const model = 'gemini-2.5-flash-image-preview';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: 'INSERT_INPUT_HERE', // Replace with your actual prompt
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fileIndex = 0;
  for await (const chunk of response) {
    const part = chunk?.candidates?.[0]?.content?.parts?.[0];

    if (part?.inlineData) {
      const fileName = `ENTER_FILE_NAME_${fileIndex++}`;
      const fileExtension = mime.getExtension(part.inlineData.mimeType || '');
      const buffer = Buffer.from(part.inlineData.data || '', 'base64');
      saveBinaryFile(`${fileName}.${fileExtension}`, buffer);
    } else if (chunk.text) {
      console.log(chunk.text);
    }
  }
}

main();
*/