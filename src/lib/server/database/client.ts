import 'dotenv/config';

import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './data';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL no fue definida en entorno');
/*if (!dev && !env.DATABASE_AUTH_TOKEN)
	throw new Error('DATABASE_AUTH_TOKEN no fue definida en entorno');*/

const client = createClient({ url: process.env.DATABASE_URL, authToken: process.env.DATABASE_AUTH_TOKEN });

export const db = drizzle(client, { schema });
