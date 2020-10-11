import { IConfig } from "./config/index"
import { PREFIX } from "./constants/index"
import { createEvent, INooaEvent } from "./event"
import { INooaSession } from "./session"

type EventItem = {
    element: Element
    type: string
    listener: () => void
    tag?: string | null
}

interface IEventRequest extends INooaEvent {
    readonly websiteId: string
}

class EventRequest {
    readonly websiteId: string
    readonly type: string
    readonly page: string
    readonly event_detail: INooaSession
    readonly tag?: string | null
    constructor({ websiteId, type, page, event_detail, tag }: IEventRequest) { 
        this.websiteId = websiteId
        this.event_detail = event_detail
        this.page = page
        this.event_detail = event_detail
        this.tag = tag
        this.type = type
    }
}

export class Tracker {

    private eventItems: EventItem[] = []
    private config: IConfig
    
    constructor(cnf:IConfig) {
        this.config = cnf
        this.detectMutation()
    }

    private async sendEvent(eventRequest: EventRequest) {

        try {
            const endpoint = this.config.Host
            endpoint.pathname = 'api/analytics/collect'
            await fetch(endpoint.href, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(eventRequest)
            })
        } catch (error) {
            return error
        }
    }

    public async trackEvent(type: string, tag?: string | null): Promise<void> {
        try {
            const request = new EventRequest({ websiteId: this.config.WebSiteUuid, ...createEvent(type, tag) })
            await this.sendEvent(request)
        } catch (error) {
            console.error(error)
        }
    }

    private trackEventItems() {
        const elements = document.querySelectorAll<Element>(`*[${PREFIX.TYPE}]`)
        const privateEventItems: EventItem[] = []

        elements.forEach(element => {
            const type = element.getAttribute(PREFIX.TYPE)!
            const tag = element.getAttribute(PREFIX.TAG)
            const listener = (): void => { this.trackEvent(type, tag) }

            element.addEventListener(type, listener, true)
            const eventItem: EventItem = {
                type,
                tag,
                listener,
                element
            }
            privateEventItems.push(eventItem)
        })

        this.eventItems = privateEventItems
    }

    private unTrackEventItems() {
        if (this.eventItems.length > 0) {
            return
        }
        this.eventItems.forEach(item => {
            item.element.removeEventListener(item.type, item.listener, true)
        })
        this.eventItems = []
    }

    private mutationCallback(mutationList: MutationRecord[], observer: MutationObserver) {
        mutationList.forEach((record: MutationRecord) => {
            if (record.type === 'childList') {
                this.unTrackEventItems()
                this.trackEventItems()
            }
        })
    }

    private detectMutation() {
        const observerOptions = {
            childList: true
        }
        const observer = new MutationObserver(this.mutationCallback.bind(this));
        observer.observe(document.body, observerOptions);

        return this
    }
}
