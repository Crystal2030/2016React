var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
const ItemUtil = Object.assign({},{
    items: {
        data: [
            {
                id: 1,
                content: 'zhufeng',
                bgColor: 'red',
                edit: false
            },
            {
                id: 2,
                content: 'react',
                bgColor: "blue",
                edit: false
            },
            {
                id: 3,
                content: 'component',
                bgColor: 'green',
                edit: false
            }
        ],
        display: 'none'
    },
    eventEmit() {
        event.emit('change');
    },
    addEventListener(callback) {
        console.log('save')
        event.on('change', callback);
    },
    getAllItems(){
        return this.items;
    },
    updateContent(id, content){
        this.items.data = this.items.data.map(data=>{
            if(data.id === id){
                data.content = content;
            }
            return data;
        })

    },
    handleEdit(id){
        this.items.data = this.items.data.map(data=>{
            if(data.id === id){
                data.edit = !data.edit;
            }
            return data;
        })
    },
    handleColor(id, color){
        this.items.data = this.items.data.map(data=>{
            if(data.id === id){
                data.bgColor = color;
            }
            return data;
        })
    },
    handleDelete(id){
        return this.items.data = this.items.data.filter(data=>data.id != id);
    },
    displayAdd(){
        this.items.data.display = 'block'
        return this.items.data;
    },
    handleAdd(content, color) {
        let currentData = this.items.data;
        let lastId = currentData[currentData.length - 1].id;
        lastId++;
        currentData.push({id: lastId, content: content, bgColor: color, edit: false});
        return currentData;
    }
});

export default ItemUtil;