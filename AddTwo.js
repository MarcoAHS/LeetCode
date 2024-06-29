function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val); // Value of the node
    this.next = (next === undefined ? null : next); // Reference to the next node
}
let node1 = new ListNode(2);
let node2 = new ListNode(4); 
let node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
l1 = node1
node1 = new ListNode(5);
node2 = new ListNode(6); 
node3 = new ListNode(4);
let node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4
l2 = node1
var addTwoNumbers = function(l1, l2) {
    let current1 = l1
    let current2 = l2
    let n1 = ""
    let n2 = ""
    while(current1){
        n1 += current1.val.toString()
        current1 = current1.next
    }
    while(current2){
        n2 += current2.val.toString()
        current2 = current2.next
    }
    n1 = BigInt(n1.split('').reverse().join(''))
    n2 = BigInt(n2.split('').reverse().join(''))
    let result = n1 + n2
    result = result.toString().split('').reverse()
    let final = new ListNode(result[0]);
    let temp = final
    let i = 1
    while(result[i]){
        let node = new ListNode(result[i])
        temp.next = node
        temp = temp.next
        i++
    }
    return final
}
// var addTwoNumbers = function(l1, l2) {  
//     let largo = 0;
//     if(l1.length > l2.length){
//         largo = l1.length
//     } else{ 
//         largo = l2.length
//     }
//     let n1 = ""
//     let n2 = ""
//     for(i=largo-1; i>=0; i--){
//         if(l1[i]) n1 += l1[i].toString()
//         if(l2[i]) n2 += l2[i].toString()
//     }
//     return (parseInt(n1) + parseInt(n2)).toString().split('').reverse()
// };
console.log(addTwoNumbers(l1, l2))