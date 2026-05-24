export async function POST (request : Request) {
    // console.log('aaaaaa', request)
    const data = await request.json()
    // console.log('Received contact form data:', data)

    return Response.json({ message: 'Form data received successfully' })
}