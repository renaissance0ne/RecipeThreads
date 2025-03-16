// utils/api-test.ts
export async function testRephrase() {
    try {
      console.log('Testing API route...');
      const response = await fetch('/api/rephrase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: 'This is a test.' })
      });
      
      console.log('Response status:', response.status);
      const data = await response.text();
      console.log('Response data:', data);
      
      return { success: response.ok, status: response.status, data };
    } catch (error) {
      console.error('Test error:', error);
      return { success: false, error };
    }
  }