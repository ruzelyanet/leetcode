export function isValid(word: string): boolean {
    if (word.length < 3) return false;

    // 2. Только буквы и цифры
    if (!/^[A-Za-z0-9]+$/.test(word)) return false;

    // 3. Хотя бы одна гласная
    if (!/[aeiouAEIOU]/.test(word)) return false;

    // 4. Хотя бы одна согласная
    if (!/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(word)) return false;

    return true;
};

export default {
    render() {
        return `
            <section>
                <h1>ValidWord</h1>
                <pre>${ isValid('234Adas') }</pre>
            </section>
    `;
    }
}