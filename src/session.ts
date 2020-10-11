import { createAgent, Agent } from "./agent"
import { STORE } from './constants/index'
import { SessionStore } from "./helpers/store"

export interface ITrace {
    fl: string
    h: string
    ip: string
    ts: number
    visit_scheme: string
    uag: string
    colo: string
    http: string
    loc: string
    tls: string
    sni: string
    warp: string
}

export interface INooaSession {
    readonly ip: string
    readonly location: string
    readonly agent: Agent
}

export class NooaSession implements INooaSession {
    public constructor(
        public readonly ip: string,
        public readonly location: string,
        public readonly agent: Agent,
    ) { }
}

function convertTextToTrace(text: string): ITrace {
    if (!text) {
        throw new ValidationError("Empty trace text")
    }
    /*
      Split every line
    */
    const traceArray = text.split('\n')
    /*
      Convert To Key Value
    */
    const trace = new Map()
    traceArray.forEach((traceItem) => {
        let [key, value] = traceItem.split('=')

        /*
          Remove . from timestamp 
        */
        if (key === 'ts') {

            value = value.replace('.', '')
        }

        trace.set(key, value)
    })

    return Object.fromEntries(trace)
}

async function fetchTrace(): Promise<string> {
    try {
        const resp = await fetch('https://www.cloudflare.com/cdn-cgi/trace')
        const data = await resp.text()
        return data
    } catch (error) {
        return error
    }
}

export async function createSession(): Promise<NooaSession> {
    try {
        const text = await fetchTrace()

        const trace: ITrace = convertTextToTrace(text)
        const agent: Agent = createAgent(navigator.userAgent)

        const visitor = new NooaSession(trace.ip, trace.loc, agent)
        SessionStore.setItem(STORE.SESSION, visitor)
        return visitor
    } catch (error) {
        return error
    }
}

export function getSessionInfo(): NooaSession {
    const session = SessionStore.getItem<NooaSession>(STORE.SESSION)
    return session
}