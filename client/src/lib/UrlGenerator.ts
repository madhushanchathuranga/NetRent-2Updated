export const UrlGenerator = (string: string) => {
    return string.toLowerCase().replace(/ /g, '-');
}