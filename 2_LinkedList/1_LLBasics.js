class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null
    }

    //Adding at the head of the LinkedList

    addFirst(data){
        const newNode= new Node(data);
        newNode.next=this.head;
        this.head=newNode
    }
    //Adding at the last of the Linked List
    addLast(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode
            return;
        }

        let current=this.head;
        while(current.next){
            current=current.next;
        }

        current.next=newNode;
    }

    //size of the linkedList

    size(){
        let count=0;
        let current=this.head;
        while(current){
            count++;
            current=current.next;
        }
        return count;
    }

    //add at specific index

    addAt(index,data){
        if(index<0 || index>this.size()){
            console.error("Invalid index");
            return;
        }

        const newNode=new Node(data);
        if(index===0){
            newNode.next=this.head;
            this.head=newNode;
            return;
        }

        let current=this.head;
        for(let i=0;i<index-1;i++){
            current=current.next;
        }
        newNode.next=current.next;
        current.next=newNode;
    }

    removeTop(){
        if(!this.head){
            return;
        }

        this.head=this.head.next;
    }

    removeLast(){
        if(!this.head){
            return;
        }
        let current=this.head;
        while(current.next.next){
            current=current.next;
        }
        current.next=null;
    }

    removeAt(index,data){
        if(index<0 || index>this.size()){
            console.error("Invalid index");
            return;
        }

        if(index===0){
            this.head=this.head.next;
            return
        }

        let current=this.head;
        for(let i=0;i<index-1;i++){
            current=current.next;
        }
        if(current.next){
            current.next=current.next.next
        }
    }

    print(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}

const linkedList=new LinkedList();

linkedList.addFirst(5)
linkedList.addFirst(3)
linkedList.addFirst(8)
linkedList.addLast(6)


linkedList.removeTop()

linkedList.addAt(2,8);

linkedList.print();

console.log("Size--",linkedList.size())