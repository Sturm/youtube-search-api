class Youtube {
    key: string;
    url: string;

    constructor(key: string) {
        this.key = key;
        this.url = "https://www.googleapis.com/youtube/v3/search";
    }

    async searchVideosByPhrase(phrase: string, limit: number) {
        let params: any = {
            part: "snippet",
            key: this.key,
            q: phrase,
            maxResults: limit
        };

        const url = this.url + "?" + new URLSearchParams(params).toString();

        return fetch(url)
            .then(response => response.json())
            .catch(reason => reason);
    }
}
