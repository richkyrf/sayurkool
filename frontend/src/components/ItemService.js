// ItemService.js

import axios from 'axios';
var port = process.env.PORT || 5000;

class ItemService {
	
   deleteData(id){
    axios.get('http://localhost:' + port + '/items/delete/'+id)
    .then(console.log('Deleted'))
	.catch(err => console.log(err))
  }

  updateData(data, id){
    axios.post('http://localhost:' + port + '/items/update/'+id, {
      item: data
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }

  sendData(data) {
    axios.post('http://localhost:' + port + '/items/add/post', {
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