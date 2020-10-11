import { BROWSERS, DESKTOP_OS, MOBILE_OS } from "./constants/agent"
import { browserName, detectOS, OperatingSystem } from "./helpers/userAgentResolver"

export type Device = 'mobile' | 'desktop'

export interface IAgent {
    readonly device: Device | null
    readonly os: OperatingSystem | null
    readonly browser: string
}

export class Agent implements IAgent {
    public constructor(
        public readonly device: Device | null,
        public readonly os: OperatingSystem | null,
        public readonly browser: string,
    ){}
}

function setDevice(os?: OperatingSystem | null): Device | null {
    if (os) {
        if (MOBILE_OS.includes(os)) {
            return 'mobile'
        }

        if (DESKTOP_OS.includes(os)) {
            return 'desktop'
        }
    }
    return null
}

function setOS(ua:string): OperatingSystem | null {
    const os = detectOS(ua)
    return os
}

function setBrowser(ua:string) {
    const browser = browserName(ua)
    return browser ? BROWSERS[browser] : ''
}

export function createAgent(ua:string):Agent {
    const os = setOS(ua)
    const browser = setBrowser(ua)
    const device = setDevice(os)
    return new Agent(
        device,
        os,
        browser
    )
}