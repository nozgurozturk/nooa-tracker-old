import { Config, IConfig, newConfig } from "./config/index";
import { createSession } from "./session";
import { Tracker } from './tracker'

export class Nooa {
    private configuration?: Config
    private tracker?: Tracker

    private get config() {
        if (!this.configuration) {
            throw new ValidationError('Empty configration')
        }
        return this.configuration
    }

    private set config(cnf) {
        try {
            const { WebSiteUuid, Host, NoTrack } = cnf
            const _config = newConfig(WebSiteUuid, Host.toString(), NoTrack)
            this.configuration = _config
        } catch (error) {
            console.error(error)
        }
    }

    private initializeTracker() {
        try {
            this.tracker = new Tracker(this.configuration!)
            return this
        } catch (error) {
            console.error(error)
        }
    }

    private trackView() {
        if (this.configuration?.NoTrack) {
            return this
        }
        this.tracker?.trackEvent("view")
        return this
    }

    public track(type: string, tag?: string | null) {
        this.tracker?.trackEvent(type, tag)
    }

    public async set(uuid?: string, host?: string, noTrack?: boolean) {
        try {
            if (uuid && host) {
                this.config = newConfig(uuid, host, noTrack)
            } else {
                this.config = newConfig()
            }
            await createSession()
            this.initializeTracker()
            this.trackView()
        } catch (error) {
            console.error(error)
        }

    }
}

declare global {
    interface Window { nooa: Nooa }
}
