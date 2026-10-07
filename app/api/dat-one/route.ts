export const runtime = 'nodejs';

export async function GET() {
  const datOneKey = process.env.DAT_ONE_API_KEY;

  if (!datOneKey) {
    return Response.json({
      connected: false,
      source: 'mock',
      data: [
        { lane: 'Dallas → Atlanta', rate: '$2.64/mi', margin: '19.2%', status: 'Hot' },
        { lane: 'Chicago → Denver', rate: '$2.48/mi', margin: '17.8%', status: 'Stable' },
        { lane: 'Memphis → Newark', rate: '$2.91/mi', margin: '22.4%', status: 'Hot' }
      ],
      note: 'Add DAT_ONE_API_KEY in .env.local to enable live DAT One data.'
    });
  }

  const response = await fetch(`${process.env.DAT_ONE_API_URL || 'https://api.dat.com'}/market/overview`, {
    headers: {
      Authorization: `Bearer ${datOneKey}`,
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  });

  if (!response.ok) {
    return Response.json({ connected: false, source: 'dat-one', error: 'DAT One request failed' }, { status: 502 });
  }

  const payload = await response.json();

  return Response.json({ connected: true, source: 'dat-one', data: payload });
}
