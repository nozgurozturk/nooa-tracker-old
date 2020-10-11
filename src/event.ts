import { INooaSession, getSessionInfo } from './session'

export interface INooaEvent {
    readonly event_detail: INooaSession
    readonly type: string
    readonly page: string,
    readonly tag?: string | null
}

export class NooaEvent implements INooaEvent {
    public constructor(
        public readonly event_detail: INooaSession,
        public readonly page: string,
        public readonly type: string,
        public readonly tag?: string | null,
    ) { }
}

export function createEvent(type: string, tag?: string | null): NooaEvent {
    try {
        if (!type) {
            throw new ValidationError('Event type is required')
        }
        const session = getSessionInfo()
        const page = window.location.pathname
        const event = new NooaEvent(session, page, type, tag)
        return event
    } catch (error) {
        return error
    }
}  