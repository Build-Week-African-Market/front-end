

function AddItems(props) {

    let {newItem, setNewItem} = props;

    const addItemsChangeHandler = e => {
        setNewItem({...newItem, [e.target.name]: e.target.value})
    }

    return (
        <form>
            <label>
                Name:
                <input
                    type='text'
                    name='name'
                    onChange={e => addItemsChangeHandler(e)}
                    value={newItem.name}
                />
            </label>
            <label>
                Description:
                <input
                    type='text'
                    name='description'
                    onChange={e => addItemsChangeHandler(e)}
                    value={newItem.description}
                />
            </label>
            <label>
                Price:
                <input
                    type='text'
                    name='price'
                    onChange={e => addItemsChangeHandler(e)}
                    value={newItem.price}
                />
            </label>
            <label>
                Location:
                <input
                    type='text'
                    name='location'
                    onChange={e => addItemsChangeHandler(e)}
                    value={newItem.location}
                />
            </label>
            <label>
                Category of Product:
                <input
                    type='text'
                    name='cat_id'
                    onChange={e => addItemsChangeHandler(e)}
                    value={newItem.cat_id}
                />
            </label>
        </form>
    )
}

export default AddItems;