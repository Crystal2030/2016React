

const ItemUtil = Object.assign({},{
    items: {
        data: [
            {
                id: 1,
                content: 'zhufeng',
                bgColor: 'red'
            },
            {
                id: 2,
                content: 'react',
                bgColor: "blue"
            },
            {
                id: 3,
                content: 'component',
                bgColor: 'green'
            }
        ]
    },
    getAllItems(){
        return this.items;
    }
});

export default ItemUtil;