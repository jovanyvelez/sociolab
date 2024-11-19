import { db } from '$lib/server/database/client'
import { usuarios } from '$lib/server/database/data'
import { eq } from 'drizzle-orm'


export const handle = async ({ event, resolve }) => {

    const session = event.cookies.get('session')

    if (!session) {
        // Si no hay sesión, cargue la página normalmente
        return await resolve(event)
    }

    const user = await db.select().from(usuarios).where(eq(usuarios.token, session));

    if (!user || user.length === 0) {
        // Si la sesión no es válida, elimine la cookie y cargue la página normalmente
        event.cookies.set('session', '', {
            path: '/',
            expires: new Date(0),
          }
        )
        return await resolve(event)    
    }

    event.locals.user = user[0]

    return await resolve(event)
}