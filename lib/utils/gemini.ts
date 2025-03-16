export async function rephraseText(text: string): Promise<string> {
  try {
    const response = await fetch('/api/rephrase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API response error:', {
        status: response.status,
        statusText: response.statusText,
        data: errorData
      });
      throw new Error(`API error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.rephrasedText) {
      console.error('Invalid API response format:', data);
      throw new Error('Invalid response format from API');
    }
    
    return data.rephrasedText;
  } catch (error) {
    console.error('Error rephrasing text:', error);
    // You could show a toast notification here
    return text; // Return original text if rephrasing fails
  }
}