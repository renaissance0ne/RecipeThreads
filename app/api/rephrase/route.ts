// app/api/rephrase/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Log the request to help with debugging
    console.log('Received rephrase request');
    
    // Parse the incoming request body
    const body = await req.json().catch(e => {
      console.error('Error parsing request body:', e);
      return {};
    });
    
    const { text } = body;
    
    if (!text || typeof text !== 'string') {
      console.error('Invalid or missing text in request');
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    // Log that we're about to make the API call
    console.log('Calling Gemini API');
    
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not defined');
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const promptText = `Please correct the grammar and improve the wording and style while preserving the original meaning. 
                        Return only one corrected paragraph with appropriate formatting. Use the following rules:
                        - Convert markdown headings (e.g., "# Heading") into corresponding heading styles (levels 1 to 6).
                        - Underline any text enclosed in underscores (__text__).
                        - Bold any text enclosed in double asterisks (**text**).
                        - Italicize any text enclosed in single asterisks (*text*).
                        - Keep newline characters as they are.
                        Text: "${text}"`;

    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: promptText
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024
        }
      })
    });


    // Log the response status
    console.log('Gemini API response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Gemini API error:', errorData);
      return NextResponse.json({ 
        error: 'Gemini API error', 
        status: response.status,
        details: errorData 
      }, { status: 500 });
    }

    const data = await response.json();
    
    // Validate the response structure
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      console.error('Unexpected response format from Gemini:', data);
      return NextResponse.json({ 
        error: 'Invalid response format from Gemini API',
        details: data
      }, { status: 500 });
    }
    
    const rephrasedText = data.candidates[0].content.parts[0].text;
    console.log('Successfully rephrased text');
    
    return NextResponse.json({ rephrasedText });
  } catch (error) {
    console.error('Unhandled error in rephrase API:', error);
    return NextResponse.json({ 
      error: 'Internal server error', 
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}