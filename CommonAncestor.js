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
