
const regexs = {
    url: /([--:\w?@%&+~#=]*\.[a-z]{2,4}\/{0,2})((?:[?&](?:\w+)=(?:\w+))+|[--:\w?@%&+~#=]+)?/g
}

export function urlValidator(url:string): boolean {
    return regexs.url.test(url)
}