class LinkedList{ 
  constructor (head = null){
    this.head = head;
  }
  append(value){
    if(!this.head){
      const newNode = new Node;
      newNode.value = value;
      this.head = newNode;
    }else {
      appendFunction(this.head, value);
    }    
  }

  prepend(value){    
    this.head = functionPrepend(this.head, value);
  }

  size(){
    if(!this.head){
      return 0;
    }else {
      return sizeFunction(this.head);
    }    
  }

  getHead(){
    return this.head;    
  }

  tail(){
    if(!this.head){
      return null
    }else {
      return tailFunction(this.head);
    }   
  }
  
  at(index){
    if (!this.head && index > 0){
      return "out off range";
    }
    else{
      return atFunction(this.head, index);
    }
  }
  pop(){
    if(!this.head){
      return null;
    }else {
      this.head = functionPop(this.head);
    }

  }
  contains(value){
    if(!this.head){
      return false;
    } else {
      return functionContains(this.head, value);
    }
  }
  find(value){
    if(!this.head){
      return false;
    } else {
      return functionFind(this.head, value);
    }

  }
  toString(){
    return functionToString(this.head);
  }

  insertAt(value , index){
    if (!this.head){
      return false
    }else {
      this.head = functionInsertAt(this.head, value, index);
    }
  }

  removeAt( index){
    if (!this.head){
      return false
    }else {
      this.head = functionRemoveAt(this.head, index);
    }
  }


}

class Node{
  value;
  nextNode;
  constructor(){
    this.value = null;
    this.nextNode = null;
  }
}

function appendFunction (head, value){
  if (!head.nextNode){
    const newNode = new Node;
    newNode.value = value;
    head.nextNode = newNode;
  } else {
    appendFunction(head.nextNode, value)
  }
}

function functionPrepend(head, value){
  const newNode = new Node;
  newNode.value = value;
  newNode.nextNode = head;
  return newNode;
    
}

function sizeFunction(head, suma = 0){
  if(!head.nextNode){
    suma++;
    return suma;
  }else {
    suma++;
    return sizeFunction(head.nextNode, suma);
  }
}

function tailFunction(head){
  if(!head.nextNode){
    return head;
  }else {
    return tailFunction(head.nextNode);
  }
}

function atFunction(head, index, actualIndex = 0){
  if (index === actualIndex){
    return head;
  }else if(head.nextNode){
    actualIndex++;
    return atFunction(head.nextNode, index, actualIndex);
  }else{
    return "out of range";
  }
}

function functionPop(head){
  if(!head.nextNode){
    head = null;
    return head;
  } else {    
    head.nextNode = functionPop(head.nextNode)
    console.log(head);
    return head;
  }
}

function functionContains(head, value){
  if (!head.nextNode){
    return head.value === value;
  } else if (head.value === value){
    return true;
  } else{
    return functionContains(head.nextNode, value);
  }
}

function functionFind(head, value, position=0){
  if (!head.nextNode){
    return (head.value === value) ? position : "Not Found";
  } else if (head.value === value){
    return position;
  } else{
    position++;
    return functionFind(head.nextNode, value, position);
  }
}

function functionToString(head, string = ""){
  if(!head.nextNode){
    return string = string + `( ${head.value} ) -> NULL`;
  }else {
    string = string +  `( ${head.value} ) -> `
    return functionToString(head.nextNode, string);
  }

}

function functionInsertAt(head, value, index, position=0){
  if(!index){
    return functionPrepend(head, value)
  }else if (position === index-1 && index>0){
    const newNode = new Node;
    newNode.value = value;
    newNode.nextNode = head.nextNode;
    head.nextNode = newNode;
    return head;
  }else if (!head.nextNode){
    const newNode = new Node;
    newNode.value = value;
    newNode.nextNode = head.nextNode;
    head.nextNode = newNode;
    return head;
  } else {
    position++;
    head.nextNode = functionInsertAt(head.nextNode, value, index, position);
    return head;
  }

}

function functionRemoveAt(head, index, position = 0 ){
  if (!head.nextNode) {
    return head;
  } else if(!index){    
    return head.nextNode
  }else if((position == index-1) && index>0 ){
     head.nextNode = head.nextNode.nextNode;
    return head;
  } else{
    position++;
    head.nextNode = functionRemoveAt(head.nextNode, index, position);
    return head;
  }

} 

