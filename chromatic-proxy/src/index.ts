import { Hono } from 'hono';

const ORIGIN: string = 'https://main--65706293733d4955d5ec0dae.chromatic.com' as const;

const app = new Hono({ strict: false });

app.get('*', async (c) => {
	try {
		const path = c.req.path;
		return fetch(`${ORIGIN}${path}`);
	} catch {
		return new Response('internal server error', { status: 500 });
	}
});

export default app;
