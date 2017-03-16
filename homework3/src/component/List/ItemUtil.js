
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
        ]
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
    }
});

export default ItemUtil;