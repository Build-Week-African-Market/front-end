import Axios from 'axios'

function AddItems(props) {

    let {newItem, setNewItem, errorSetter} = props;

    const addItemsChangeHandler = e => {
        errorSetter(e);
        setNewItem({...newItem, [e.target.name]: e.target.value})
        console.log(newItem);
    }

    // NOT POSTING RIGHT NOW
    const addItemsSubmitHandler = e => {
        e.preventDefault();
        console.log(e);
        if (e.target.name === 'cat_id') {
            e.target.value.toLowerCase();
            switch (e.target.value) {
                case 'food':
                    e.target.value = '1';
                    break;
                case 'clothing':
                    e.target.value = '2';
                    break;
                case 'electronics':
                    e.target.value = '3';
                    break;
                default:
                    console.log('invalid category!')
            }
        }
        console.log(newItem);
        // axios.post('https://afr-market-backend.herokuapp.com/items')
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
    }

    return (
        <form onSubmit={(e) => addItemsSubmitHandler(e)}>
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
            <button>Click me to add new Item!</button>
        </form>
    )
}

export default AddItems;