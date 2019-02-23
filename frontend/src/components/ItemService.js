// ItemService.js

import axios from 'axios';

class ItemService {
	
   deleteData(id){
    axios.get('http://localhost:5000/items/delete/'+id)
    .then(console.log('Deleted'))
	.catch(err => console.log(err))
  }

  updateData(data, id){
    axios.post('http://localhost:5000/items/update/'+id, {
      item: data
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }

  sendData(data) {
    axios.post('http://localhost:5000/items/add/post', {
    item: data
  })
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}

export default ItemService;