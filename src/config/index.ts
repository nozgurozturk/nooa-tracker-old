import { PREFIX } from "../constants/index"


export interface IConfig {
    WebSiteUuid: string
    Host: URL
    NoTrack?: boolean
}

export class Config implements IConfig {
    public WebSiteUuid: string
    public Host: URL
    public NoTrack?: boolean

    constructor({ WebSiteUuid, Host, NoTrack = false }: IConfig) {
        this.WebSiteUuid = WebSiteUuid
        this.Host = Host
        this.NoTrack = NoTrack
    }

    public validateConfigs() {

        if (!this.WebSiteUuid) {
            throw new ValidationError("Empty web site uuid")
        }

        if (!this.Host) {
            throw new ValidationError("Empty server url")
        }

        return this
    }
}

function getDefaultConfigs(): IConfig {
    const uuid = document.querySelector(`script[${PREFIX.UUID}]`)?.getAttribute(PREFIX.UUID)
    const path = document.querySelector(`script[${PREFIX.HOST}]`)?.getAttribute(PREFIX.HOST) || ''
    const noTrack = document.querySelector(`script[${PREFIX.NO_TRACK}]`)?.getAttribute(PREFIX.NO_TRACK)

    return {
        WebSiteUuid: uuid || "",
        Host: new URL(path) || "",
        NoTrack: Boolean(noTrack),
    }
}

export function newConfig(uuid?: string, host?: string, noTrack?: boolean): Config {
    try {
        let _config: Config

        if (uuid && host) {
            _config = new Config({
                WebSiteUuid: uuid,
                Host: new URL(host),
                NoTrack: noTrack
            })
            _config.validateConfigs()
        } else {
            const defaults = getDefaultConfigs()
            _config = new Config(defaults).validateConfigs()
        }
        return _config
    } catch (error) {
        console.error(error)
        return error
    }
}
