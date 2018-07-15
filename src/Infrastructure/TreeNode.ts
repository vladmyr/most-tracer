class TreeNode<T, U> {
    private _parent: U;
    private _node: T;

    public constructor(node: T, parent?: U) {
        this._node = node;
        this._parent = parent;
    }

    public getNode() { return this._node; }
    public hasParent() { return typeof this._parent != "undefined"; }
    public getParent() { return this._parent; }
}

export default TreeNode;

// child$.getTreeNode().getParent()
// child$.getTreeNode().getNode()                                 // === child$
// child$.getTreeNode().getParent().getTreeNode().getNode()       // === parent$