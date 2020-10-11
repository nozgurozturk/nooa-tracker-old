export class SessionStore {

    static setItem(key: string, data: any): void {
        if (!key) {
            throw new ValidationError('Empty key of store item')
        }

        if (!data) {
            throw new ValidationError('Empty data of store item')
        }
        const storageValue = JSON.stringify(data)

        if (!storageValue) {
            throw new ValidationError(`Invalid JSON data from ${key} item`)
        }

        sessionStorage.setItem(key, storageValue)
    }

    static getItem<T>(key: string): T {
        if (!key) {
            throw new ValidationError('Empty key of store item')
        }
        const storeItem: string | null = sessionStorage.getItem(key)
        if (!storeItem) {
            throw new NotFoundError(`${key} not found in store`)
        }
        const item: T = JSON.parse(storeItem)
        return item
    }

    static removeItem(key: string): void {
        if (!key) {
            throw new ValidationError('Empty key of store item')
        }
        sessionStorage.removeItem(key)
    }
}