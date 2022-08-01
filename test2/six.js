let newarr=[]
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  class LL {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    takeInput(arr) {
    arr.map(ele=>
    {
    	var newnode = new Node(ele);
      if (this.head == null) {
        this.head = newnode;
        this.tail = newnode;
      } else {
        this.tail.next = newnode;
        this.tail = this.tail.next;
      }
    })
    }
      
    
    printLL() {
      var temp = this.head;
      while (temp) {
        console.log(temp.data)
        temp = temp.next;
      }
    }
     reverseList()
    {
          let curr = this.head
          let Next=null
          let prev=null
        while (curr !== null) {
        Next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = Next;
      }
      this.head = prev
      curr=this.head
      while(curr!=null)
      {
      			newarr.push(curr.data)
            curr=curr.next
      }
    }
  

}
 var ll = new LL();
 var ll1=new LL()
 ll.takeInput([1,2,3,3,2,1])
 ll1.takeInput(newarr)
 ll.printLL()

 ll.reverseList()
 console.log(newarr)
 if(ll===ll1)
 {
 		console.log("true")
 }
 else
 {
 		console.log("false")
 }
