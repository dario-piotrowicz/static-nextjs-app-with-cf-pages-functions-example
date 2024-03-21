export async function onRequest() {
    return new Response(JSON.stringify({ text: 'hello world' }));
}