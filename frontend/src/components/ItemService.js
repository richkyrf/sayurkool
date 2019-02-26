// ItemService.js

import axios from 'axios';

class ItemService {
	
   deleteData(id){
    axios.get(config.app.url + '/items/delete/'+id)
    .then(console.log('Deleted'))
	.catch(err => console.log(err))
  }

  updateData(data, id){
    axios.post(config.app.url + '/items/update/'+id, {
      item: data
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }

  sendData(data) {
    axios.post(config.app.url + '/items/add/post', {
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