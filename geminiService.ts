
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EDUCATIONS, SKILLS, CERTIFICATIONS, EXTRA_CURRICULAR } from "../constants";

export const askGemini = async (question: string) => {
  // Always use a named parameter and the direct process.env.API_KEY string for initialization.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are a professional assistant for Jeeshma C's portfolio. 
    Use the following information to answer questions about her:
    
    Name: ${PERSONAL_INFO.name}
    Objective: ${PERSONAL_INFO.objective}
    Education: ${JSON.stringify(EDUCATIONS)}
    Skills: ${JSON.stringify(SKILLS)}
    Certifications: ${JSON.stringify(CERTIFICATIONS)}
    Activities: ${JSON.stringify(EXTRA_CURRICULAR)}
    Languages: ${PERSONAL_INFO.languages.join(', ')}
    Location: ${PERSONAL_INFO.address}
    Contact: ${PERSONAL_INFO.email}, ${PERSONAL_INFO.phone}
    
    Guidelines:
    - Be professional, polite, and enthusiastic.
    - If someone asks for contact info, provide the email and phone.
    - Highlight her Python skills and NCC background (discipline/teamwork).
    - Keep answers concise but informative.
    - If you don't know the answer based on the context, politely suggest contacting her directly.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        // Removed maxOutputTokens as per guidelines to avoid accidental truncation of responses.
      },
    });

    // Access the .text property directly; do not call it as a function.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again or contact Jeeshma directly!";
  }
};
