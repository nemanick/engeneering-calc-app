class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; // корень bst
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data === node.data) {
            return null;
        } else if(newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(node, data) {
        if (node === null) {
            return null;
        } else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return node;
        }
    }

    // находит минимальный узел в дереве
    minNode(node) {
        // если слева от узла ноль тогда это должен быть минимальный узел
        if (node.left === null)
            return node;
        else
            return this.minNode(node.left);
    }

    remove(data) {
        this.root = this.removeNode(this.root, data); // helper method below
    }

    removeNode(node, data) {
        if (node === null) {
            return null;
        // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        // если данные такие как данные корня, удаляем узел
        } else {
            // удаляем узел без потомков (листовой узел (leaf) или крайний)
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // удаляем узел с одним потомком
            if (node.left === null) {
                node = node.right;
                return node;
            }  else if(node.right === null) {
                node = node.left;
                return node;
            }
            // удаляем узел с двумя потомками
            // minNode правого поддерева хранится в новом узле
            let newNode = this.minNode(node.right);
            node.data = newNode.data;
            node.right = this.removeNode(node.right, newNode.data);
            return node;
        }
    }
}

export { BinarySearchTree };