export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function getDecimalValue(head: ListNode | null): number {
    let cur: ListNode | null = head;
    let num: number = 0;

    while(cur) {
        num = num*2 + cur.val;
        cur =cur.next
    }

    return num;
};

let head = new ListNode(1, new ListNode(0, new ListNode(1)))

export default {
    render() {
        return `
            <section>
                <h1>Convert Binary Number in a Linked List to Integer</h1>

                ${getDecimalValue(head)}
            </section>
    `;
    }
}