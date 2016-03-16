/* ---------------------------------------------------------------------------
-- Common Ancestor--
Although this problem might be hard to explain the basic concept is when you make a 'newPerson' it is a prototype and will have a .children property to it which is a list.  You can of course populate this list with other people.

-- Example --
var grandma = new Tree();
var mom = new Tree();
grandma.children[0] = mom;
var uncle = new Tree();
grandma.children[1] = uncle;
var me = new Tree();
mom.children[0] = me;

--------------------------------------------------------------------------- */
// -- Parameters given --
// These are helper functions given to you to start the problem off and to see some of the logic involved.
var Tree = function(){
  this.children = [];
};
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

/* ---------------------------------------------------------------------------
-- The Problem --
Given the example above, we need to add two methods to this prototype.
- getClosestAncestor()
  > should take in two parameters that should find the closest ancestor.

- getAncestorPath()
  > should be given a target
  > should return an array containing a list of the ancestor path
  Ex: grandma.getAncestorPath(me);  // [grandma, mom, me]


--------------------------------------------------------------------------- */

// NOTE : you'll want to do getAncestorPath first to use in getClosestCommonAncestor
Tree.prototype.getAncestorPath = function(target){
  if (this === target) {return [this]}
  for (var i = 0; i < this.children.length; i++) {
    var childPath = this.children[i].getAncestorPath(target) // this will end up returning an array list, or null in the case that the target path was never found
    if ( childPath ) {   // by checking to see if childPath is true, we know to keep going
      return [this].concat(childPath);  // we then return the current object in an array, and concat.  This will go alway the way down to the target, and then contact the list going up untill the inital invocation
    }
  }
  return null;      // finaly a safety return for in the case we found nothing
}

Tree.prototype.getClosestCommonAncestor = function(target1, target2){
  var list1 = this.getAncestorPath(target1);  // we generate two lists to be able to compare
  var list2 = this.getAncestorPath(target2);
  if (list1 === null || list2 === null) {     // if either list is null, meaning the targets were never found, then we return null because it cannot have a common ancestor
    return null;
  }
  var closest = this;     // we know to start the the current object is an ancestor
  for (var i = 0; i <list1.length; i++) {         // we go through our list, doesnt matter which list we use as the length;
    if (!list1[i] || !list2[i]){ return closest}  // here if while we go through a list, if one list ends and returns an undefined value, we know thats the end, so we can return the closest ancestor
    if (list1[i] === list2[i]) { closest = list1[i]; }  // here if the lists are the same ancestor we set that to the new closest.
  }
  return closest;  // finaly assumeing we get through the list we return the closest
}
