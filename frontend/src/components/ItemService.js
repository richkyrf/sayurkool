// ItemService.js

import axios from 'axios';
var port = process.env.PORT || 5000;

class ItemService {
	
   deleteData(id){
    axios.get('https://sayurkool.herokuapp.com/items/delete/'+id)
    .then(console.log('Deleted'))
	.catch(err => console.log(err))
  }

  updateData(data, id){
    axios.post('https://sayurkool.herokuapp.com/items/update/'+id, {
      item: data
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }

  sendData(data) {
    axios.post('https://sayurkool.herokuapp.com/items/add/post', {
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